import React, { useState, useRef, useEffect } from "react";
import { Header } from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACKGROUND } from "../utils/contants";

const Login = (props) => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const userName = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    const isvalid = checkValidData(email.current.value, password.current.value);
    setErrorMessage(isvalid);
    if (isvalid) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: userName.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({
                  uid,
                  email,
                  displayName,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage + "-" + errorCode);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const { uid, email, displayName } = userCredential.user;
          dispatch(
            addUser({
              uid,
              email,
              displayName,
            })
          );
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage + "-" + errorCode);
        });
    }
  };

  return (
    <div className="mw-full h-100vh">
      <Header />
      <div className="absolute bg-black w-[90%] md:w-3/12 mt-28 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-md">
        <form className="flex flex-col px-8 md:px-16 pt-16">
          <label className="text-3xl">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </label>
          {!isSignInForm && (
            <input
              type="text"
              ref={userName}
              required={true}
              placeholder="Full Name"
              className="my-4 h-12 p-4 bg-gray-700 outline-none rounded-md"
            />
          )}
          <input
            type="text"
            required={true}
            ref={email}
            placeholder="Email or Phone Number"
            className="my-4 h-12 p-4 bg-gray-700 outline-none rounded-md"
          />
          <input
            type="password"
            ref={password}
            required={true}
            placeholder="Password"
            className="mt-4 h-12 p-4 bg-gray-700 outline-none rounded-md"
          />
          <small className="text-red-700 mt-4">{errorMessage}</small>
          <button
            className="bg-red-600 h-12 mt-6 rounded-md"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
        </form>
        <div className="px-16 pb-32">
          <div className="flex items-center justify-between text-xs mt-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember me
            </label>
            <label>Need help?</label>
          </div>
          <p className="mt-8 text-gray-500">
            {isSignInForm ? "New to Netflix? " : "Already registered "}
            <span
              className="hover:underline text-white cursor-pointer"
              onClick={toggleSignInForm}
            >
              {isSignInForm ? "Sign up now." : "Sign In"}
            </span>
          </p>
        </div>
      </div>
      <img
        src={BACKGROUND}
        alt="background-img"
        className="h-screen object-cover w-full"
      />
    </div>
  );
};

export default Login;
