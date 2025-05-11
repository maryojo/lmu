import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

// Define the route that contains your login page
const loginPage = '/login'

// Add any public (non-login protected) routes here
// All other routes will be login protected
// Important: plasmic-host and your login page must always be public
const publicRoutes = [
  '/register',
  '/login',
  '/plasmic-host',
  '/reset-password',
  '/register-admin',
  '/signup-successful'
]

// Middleware function
// This will run on every request to your app that matches the pattern at the bottom of this file
// Adapted from @supabase/ssr docs https://supabase.com/docs/guides/auth/server-side/nextjs?queryGroups=router&router=app
export async function middleware(request: NextRequest) {
  // Initialize response with the incoming request
  const response = NextResponse.next()
  
  // Create supabase client using cookies from the request and response
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name) {
          return request.cookies.get(name)?.value
        },
        set(name, value, options) {
          // IMPORTANT: Set cookies on the response object
          response.cookies.set({
            name,
            value,
            ...options
          })
        },
        remove(name, options) {
          // IMPORTANT: Remove cookies from the response object
          response.cookies.set({
            name,
            value: '',
            ...options,
            maxAge: -1
          })
        }
      }
    }
  )

  // Refresh the session to get the most up-to-date session
  const { data: { session } } = await supabase.auth.getSession()
  
  // Extract URL information
  const { pathname } = request.nextUrl
  
  // Special handling for the login page to avoid redirect loops
  if (pathname === loginPage) {
    // If we're on the login page and have an active session already, 
    // let Plasmic handle the redirect based on your configuration
    if (session) {
      // Just proceed normally - your Plasmic login component will handle the redirect
      return response
    }
    
    // Otherwise, stay on login page
    return response
  }
  
  // Check if route requires authentication
  const requiresAuth = !publicRoutes.includes(pathname)
  
  // If the route requires auth and user isn't authenticated, redirect to login
  if (requiresAuth && !session) {
    const redirectUrl = new URL(loginPage, request.nextUrl.origin)
    
    // Create a redirect response and ensure it includes any cookies set by Supabase
    const redirectResponse = NextResponse.redirect(redirectUrl)
    
    // Copy all cookies from the response to the redirect
    response.cookies.getAll().forEach(cookie => {
      redirectResponse.cookies.set({
        name: cookie.name,
        value: cookie.value,
        path: cookie.path || '/',
        domain: cookie.domain,
        maxAge: cookie.maxAge,
        expires: cookie.expires,
        secure: cookie.secure,
        httpOnly: cookie.httpOnly,
        sameSite: cookie.sameSite
      })
    })
    
    return redirectResponse
  }
  
  // Otherwise, continue with the response that has the proper cookies set
  return response
}

//Only run middleware on requests that match this pattern
export const config = {
  matcher: [
    /*
    * Match all request paths except for the ones starting with:
    * - _next/static (static files)
    * - _next/image (image optimization files)
    * - favicon.ico (favicon file)
    * Feel free to modify this pattern to include more paths.
    */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}