import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../../utils/userSlice";
import { LOGO_02 } from "../../utils/constants";

const BrowseHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

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

  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
        navigate("/error");
      });
  };

  return (
    <div className="bg-gradient-to-b from-black text-white flex justify-between">
      <div className="flex">
        <img className="w-48 p-3" src={LOGO_02} alt="logo" />
        <ul className="flex">
          <li className="mx-3 my-6">Home</li>
          <li className="mx-3 my-6">TV Shows</li>
          <li className="mx-3 my-6">Movies</li>
        </ul>
      </div>
      <div className="flex m-2">
        <img src={user?.photoURL} className="h-12 mx-3 mt-2 rounded-full" />
        <p className=" my-5 mx-2">dad</p>
        <button
          onClick={signOutHandler}
          className="mx-5 mt-2 h-12 px-6 bg-red-600 rounded-lg hover:bg-red-700"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default BrowseHeader;
