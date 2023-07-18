import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

function useAuthStatus() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);

  useEffect(function () {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      //if user exits, which means authenticated
      if (user) {
        setLoggedIn(true);
      }
      setCheckingStatus(false);
    });
  }, []);
  return { loggedIn, checkingStatus };
}

export { useAuthStatus };
