import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { signOutUser } from "../utils/userAuthentication";
import { useDispatch } from "react-redux";
import { toggleGPTSearchView } from "../utils/gptSlice";
import { useNavigate } from "react-router-dom";

const Footer = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGPTSearchClick = () => {
    dispatch(toggleGPTSearchView());
  };

  return (
    <div className="bg-black w-full h-16 flex justify-between px-6 py-4 md:hidden fixed bottom-0 z-50">
      <FontAwesomeIcon
        icon={faHouse}
        style={{ color: "#ffffff" }}
        className="border-white border-2 rounded-full p-2"
        onClick={() => navigate("/browse")}
      />
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        style={{ color: "#ffffff" }}
        className="border-white border-2 rounded-full p-2"
        onClick={handleGPTSearchClick}
      />
      <FontAwesomeIcon
        icon={faUser}
        style={{ color: "#ffffff" }}
        className="border-white border-2 rounded-full p-2"
        onClick={signOutUser}
      />
    </div>
  );
};

export default Footer;
