import { Outlet } from "react-router";

export default function CourseLayout() {

  return (
    <div id="course-layout">
      <h1>Courses</h1>
      <Outlet />
    </div>
  )
}