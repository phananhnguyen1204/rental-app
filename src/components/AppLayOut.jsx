import { useLocation, useNavigate } from "react-router";
import { FcHome } from "react-icons/fc";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function AppLayOut() {
  const [pageState, setPageState] = useState("Sign in");
  const auth = getAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      //if user exits, or authenticated
      if (user) {
        setPageState("Profile");
      } else {
        setPageState("Sign in");
      }
    });
  }, [auth]);

  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-100">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div className="flex justify-center items-center">
          <FcHome
            className="mr-2 text-5xl bg-red-200 rounded-full p-1 border-2 cursor-pointer my-1"
            onClick={() => navigate("/")}
          ></FcHome>
          <p className="font-semibold border-b-[2px] text-black border-b-red-500 cursor-pointer">
            Your best home
          </p>
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              className={`cursor-pointer py-3 text-sm font-semibold  border-b-[3px]  ${
                pathMatchRoute("/")
                  ? "text-black border-b-red-500"
                  : "text-gray-400 border-b-transparent"
              }`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold  border-b-[3px]  ${
                pathMatchRoute("/offers")
                  ? "text-black border-b-red-500"
                  : "text-gray-400 border-b-transparent"
              }`}
              onClick={() => navigate("/offers")}
            >
              Offers
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold  border-b-[3px]  ${
                pathMatchRoute("/sign-in") || pathMatchRoute("/profile")
                  ? "text-black border-b-red-500"
                  : "text-gray-400 border-b-transparent"
              }`}
              onClick={() => navigate("/profile")}
            >
              {pageState}
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default AppLayOut;
