import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = (props) => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute w-full bg-gradient-to-b from-black flex justify-between items-center">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
        className="w-52"
      />
      {user && (
        <div className="flex p-4">
          <img
            className="w-8 mr-2"
            alt="usericon"
            src="https://pbs.twimg.com/card_img/1708640244457979904/PXo_UL6N?format=png&name=small"
          />
          <button
            className="font-bold text-white cursor-pointer"
            onClick={signOutUser}
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export { Header };
