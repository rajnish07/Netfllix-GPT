import React, { useState } from "react";
import { Header } from "./Header";

const Login = (props) => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="mw-full h-100vh">
      <Header />
      <div className="absolute bg-black w-3/12 mt-28 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-md">
        <form className="flex flex-col px-16 pt-16">
          <label className="text-3xl">Sign In</label>
          <input
            type="text"
            placeholder="Email or Phone Number"
            className="my-4 h-12 p-4 bg-gray-700 outline-none rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            className="my-4 h-12 p-4 bg-gray-700 outline-none rounded-md"
          />
          <button className="bg-red-600 h-12 mt-6 rounded-md">Sign In</button>
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
            New to Netflix?{" "}
            <span
              className="hover:underline text-white cursor-pointer"
              onClick={toggleSignInForm}
            >
              Sign up now.
            </span>
          </p>
        </div>
      </div>
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="background-img"
      />
    </div>
  );
};

export default Login;
