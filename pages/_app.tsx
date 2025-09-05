import { useEffect } from "react";
import type { AppProps } from "next/app";

// Import the CSS required for SupabaseUppyUploader globally
import "@uppy/core/dist/style.min.css";
import "@uppy/dashboard/dist/style.min.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // --- Patch fetch
    const originalFetch = window.fetch;
    window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
      const url = typeof input === "string" ? input : (input as URL).href;
      if (url.includes("analytics.plasmic.app/capture")) {
        console.debug("[Plasmic analytics blocked: fetch]", url);
        return new Response(null, { status: 204 });
      }
      return originalFetch(input, init);
    };

    // --- Patch XMLHttpRequest (for good measure)
    const originalOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function (
      method: string,
      url: string | URL,
      async?: boolean,
      user?: string | null,
      password?: string | null
    ) {
      const urlStr = typeof url === "string" ? url : url.toString();
      if (urlStr.includes("analytics.plasmic.app/capture")) {
        console.debug("[Plasmic analytics blocked: xhr]", urlStr);
        // Redirect to dummy no-op request
        return originalOpen.call(this, method, "about:blank", async ?? true, user ?? null, password ?? null);
      }
      return originalOpen.call(this, method, url, async ?? true, user ?? null, password ?? null);
    };
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;