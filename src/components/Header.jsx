import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BG_IMG, LOGO_01 } from "../../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");

        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <div className="relative">
        <img className="w-screen h-screen" src={BG_IMG} alt="bg" />
        <img
          className="w-48 absolute top-0 bg-gradient-to-b from-black p-3"
          src={LOGO_01}
          alt="logo"
        />
      </div>
    </>
  );
};

export default Header;
