import { DataProvider } from "@plasmicapp/loader-nextjs";

function AdminRoleSpecificProvider({ children, className, allCoursesData, allStudentsData, allInstructorsData }) {
  return (
    <div className={className}>
        <DataProvider name="globalCoursesData" data={allCoursesData}>
          <DataProvider name="globalStudentsData" data={allStudentsData}>
            <DataProvider name="globalInstructorsData" data={allInstructorsData}  >
            {children}
            </DataProvider>
          </DataProvider>
      </DataProvider>
    </div>
  );
}

export default AdminRoleSpecificProvider;
