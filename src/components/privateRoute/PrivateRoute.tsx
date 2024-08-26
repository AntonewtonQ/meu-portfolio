import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { userLoggedIn } = useAuth();

  return userLoggedIn ? children : <Navigate to="/" />;
};

export default PrivateRoute;
