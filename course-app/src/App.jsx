import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Courses, { courseDeleteAction, coursesLoader } from './pages/course/Courses'
import Faq from './pages/help/Faq'
import Contact from './pages/help/Contact'
import MainLayout from './layouts/MainLayout'
import HelpLayout from './layouts/HelpLayout'
import CourseDetails, { courseDetailsLoader } from './pages/course/CourseDetails'
import CourseLayout from './layouts/CourseLayout'
import CourseCreate, { courseAction } from './pages/course/CourseForm'
import CourseEdit from './pages/course/CourseEdit'
import NotFound from './pages/error/NotFound'
import Error from './pages/error/Error'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      {
        path: "courses",
        element: <CourseLayout />,
        errorElement: <Error />,
        children: [
          { index: true, element: <Courses />, loader: coursesLoader },
          { path: "create", element: <CourseCreate />, action: courseAction },
          { 
            id: "course-details",
            path: ":courseid",
            loader: courseDetailsLoader,
            children: [
              { index: true, element: <CourseDetails /> },
              { path: "edit", element: <CourseEdit />, action: courseAction },
              { path: "delete", action: courseDeleteAction }
            ] 
          }
        ]
      },
      {
        path: "help",
        element: <HelpLayout />,
        children: [
          { path: "contact", element: <Contact /> },
          { path: "faq", element: <Faq /> }
        ]
      },
      { path: "*", element: <NotFound /> }
    ]
  }
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App

