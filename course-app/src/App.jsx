import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Courses, { coursesLoader } from './pages/course/Courses'
import Faq from './pages/help/Faq'
import Contact from './pages/help/Contact'
import MainLayout from './layouts/MainLayout'
import HelpLayout from './layouts/HelpLayout'
import CourseDetails, { courseDetailsLoader } from './pages/course/CourseDetails'
import CourseLayout from './layouts/CourseLayout'

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
        children: [
          { index: true, element: <Courses />, loader: coursesLoader },
          { path: ":courseid", element: <CourseDetails />, loader: courseDetailsLoader },
        ]
      },
      {
        path: "help",
        element: <HelpLayout />,
        children: [
          { path: "contact", element: <Contact /> },
          { path: "faq", element: <Faq /> }
        ]
      }
    ]
  }
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App

