import { useLocation, useNavigate } from "react-router";
import { FcHome } from "react-icons/fc";

function AppLayOut() {
  const location = useLocation();
  const navigate = useNavigate();

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
            className="h-12 w-10 mr-2 cursor-pointer"
            onClick={() => navigate("/")}
          ></FcHome>
          {/* <img
            // src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            src="https://o.remove.bg/downloads/c0c9ec44-28ec-49cc-bf3e-c8acf8a57cab/3529048-removebg-preview.png"
            alt="logo"
            className="h-14 cursor-pointer "
            onClick={() => navigate("/")}
          ></img> */}
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
                pathMatchRoute("/sign-in")
                  ? "text-black border-b-red-500"
                  : "text-gray-400 border-b-transparent"
              }`}
              onClick={() => navigate("/sign-in")}
            >
              Sign in
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default AppLayOut;
