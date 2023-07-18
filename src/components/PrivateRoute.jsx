import { Outlet, Navigate } from "react-router";
import { useAuthStatus } from "../hook/useAuthStatus";

function PrivateRoute() {
  const { loggedIn, checkingStatus } = useAuthStatus();
  if (checkingStatus) {
    return <h3>Loading...</h3>;
  }
  return loggedIn ? <Outlet></Outlet> : <Navigate to="/sign-in"></Navigate>;
}

export default PrivateRoute;
