import { DataProvider } from "@plasmicapp/loader-nextjs";

function SimpleGlobalProvider({ children, className, userData }) {
  return (
    <div className={className}>
      <DataProvider name="globalUserData" data={userData}>
        {children}
      </DataProvider>
    </div>
  );
}

export default SimpleGlobalProvider;