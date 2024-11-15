import { Navigate, useLocation } from "react-router-dom";
import useAuthStore from "../store/authStore";

export const PrivateRoute = ({ children }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const location = useLocation();

  if (!isAuthenticated) {
    // 로그인 후 원래 가려던 페이지로 리다이렉트하기 위해 현재 location을 state로 전달
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};
