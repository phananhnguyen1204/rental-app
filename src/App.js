import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AppLayOut from "./components/AppLayOut";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./components/PrivateRoute";
import CreateListing from "./pages/CreateListing";
function App() {
  return (
    <>
      <Router>
        <AppLayOut> </AppLayOut>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/profile" element={<PrivateRoute></PrivateRoute>}>
            <Route path="/profile" element={<Profile></Profile>}></Route>
          </Route>
          <Route path="/sign-in" element={<SignIn></SignIn>}></Route>
          <Route path="/sign-up" element={<SignUp></SignUp>}></Route>
          <Route
            path="/forgot-password"
            element={<ForgotPassword></ForgotPassword>}
          ></Route>
          <Route path="/offers" element={<Offers></Offers>}></Route>
          <Route path="/create-listing" element={<PrivateRoute></PrivateRoute>}>
            <Route
              path="/create-listing"
              element={<CreateListing></CreateListing>}
            ></Route>
          </Route>
        </Routes>
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
