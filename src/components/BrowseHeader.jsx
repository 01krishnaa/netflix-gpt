import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const BrowseHeader = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        
        navigate("/");
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
        <img
          className="w-48 p-3"
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt="logo"
        />
        <ul className="flex">
          <li className="mx-3 my-6">Home</li>
          <li className="mx-3 my-6">TV Shows</li>
          <li className="mx-3 my-6">Movies</li>
        </ul>
      </div>
      <div className="flex m-2">
        <img src={user?.photoURL} className="h-12 mx-3 mt-2 rounded-full" />
        <p className=" my-5 mx-2">{user.displayName}</p>
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
