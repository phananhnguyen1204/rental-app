import { Outlet, Navigate } from "react-router";
import { useAuthStatus } from "../hook/useAuthStatus";
import Spinner from "./Spinner";

function PrivateRoute() {
  const { loggedIn, checkingStatus } = useAuthStatus();
  if (checkingStatus) {
    return <Spinner></Spinner>;
  }
  return loggedIn ? <Outlet></Outlet> : <Navigate to="/sign-in"></Navigate>;
}

export default PrivateRoute;
