import { createBrowserRouter } from "react-router-dom";
import {
  MainPage,
  AboutPage,
  CoursesPage,
  CourseDetailPage,
  MyPage,
  ClassroomPage,
  LoginPage,
  SignupPage,
  NotFoundPage,
} from "../pages";
import RootLayout from "../layouts/RootLayout";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "courses",
        element: <CoursesPage />,
      },
      {
        path: "courses/:id",
        element: <CourseDetailPage />,
      },
      {
        path: "mypage",
        element: <MyPage />,
      },
      {
        path: "classroom/:id",
        element: <ClassroomPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignupPage />,
      },
    ],
  },
]);

export default Router;
