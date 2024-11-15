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
} from "../pages";
import RootLayout from "../layouts/RootLayout";
import LectureLayout from "../layouts/LectureLayout";
import { PrivateRoute } from "./PrivateRoute";
import { PublicOnlyRoute } from "./PublicOnlyRoute";

const Router = createBrowserRouter(
  [
    {
      path: "lectures/:id",
      element: (
        <PrivateRoute>
          <LectureLayout />
        </PrivateRoute>
      ),
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
          element: (
            <PrivateRoute>
              <MyPage />
            </PrivateRoute>
          ),
        },
        {
          path: "login",
          element: (
            <PublicOnlyRoute>
              <LoginPage />
            </PublicOnlyRoute>
          ),
        },
        {
          path: "signup",
          element: (
            <PublicOnlyRoute>
              <SignupPage />
            </PublicOnlyRoute>
          ),
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
