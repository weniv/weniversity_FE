import { createBrowserRouter } from "react-router-dom";
import {
  MainPage,
  AboutPage,
  CoursesPage,
  CourseDetailPage,
  MyPage,
  LecturePage,
  LoginPage,
  SignupPage,
  NotFoundPage,
  TestPage,
} from "../pages";
import RootLayout from "../layouts/RootLayout";
import LectureLayout from "../layouts/LectureLayout";

const Router = createBrowserRouter(
  [
    {
      path: "lectures/:id",
      element: <LectureLayout />,
      children: [{ index: true, element: <LecturePage /> }],
    },
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <NotFoundPage />,
      children: [
        {
          index: "true",
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
          path: "login",
          element: <LoginPage />,
        },
        {
          path: "signup",
          element: <SignupPage />,
        },
        {
          path: "test",
          element: <TestPage />,
        },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

export default Router;
