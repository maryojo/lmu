import { DataProvider } from "@plasmicapp/loader-nextjs";

function StudentRoleSpecificProvider({
  children,
  className,
  allAvailableCoursesData,
  allUserEnrolledCoursesData,
}) {
  return (
    <div className={className}>
      <DataProvider name="allAvailableCourses" data={allAvailableCoursesData}>
        <DataProvider name="allUserEnrolledCourses" data={allUserEnrolledCoursesData}>
          {children}
        </DataProvider>
      </DataProvider>
    </div>
  );
}

export default StudentRoleSpecificProvider;
