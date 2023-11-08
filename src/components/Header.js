import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { AVATAR, LOGO } from "../utils/contants";
import { toggleGPTSearchView } from "../utils/gptSlice";

const Header = (props) => {
  const user = useSelector((store) => store.user);
  const gptSearch = useSelector((store) => store.gpt.showGPTSearch);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signOutUser = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unSubscribe();
  }, []);

  const handleGPTSearchClick = () => {
    //Toggle GPTSearch Component
    dispatch(toggleGPTSearchView());
  };

  return (
    <div className="absolute w-full bg-gradient-to-b from-black flex flex-col md:flex-row justify-between items-center z-50">
      <img src={LOGO} alt="logo" className="w-36 md:w-52" />
      {user && (
        <div className="flex p-1 md:p-4">
          <button
            className="bg-purple-600 text-white p-1 md:p-2 mx-2 md:mx-4 rounded-md text-xs md:text-lg"
            onClick={handleGPTSearchClick}
          >
            {gptSearch ? "Browse" : "GPTSearch"}
          </button>
          <img className="w-8 mr-2" alt="usericon" src={AVATAR} />
          <button
            className="font-bold text-white cursor-pointer text-xs md:text-lg"
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
