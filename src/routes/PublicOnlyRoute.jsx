import { Navigate } from "react-router-dom";
import useAuthStore from "../store/authStore";

export const PublicOnlyRoute = ({ children }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};
