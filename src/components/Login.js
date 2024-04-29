import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c7f07b68-7989-4ff7-a31e-11c17dcc2fea/fcf685b8-3f9f-42d8-9af3-4bb86fa5a3b8/IN-en-20240422-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Bcg-img"
        />
      </div>
      <form className="absolute p-8 bg-black w-4/12 my-28 mx-auto right-0 left-0 text-white bg-opacity-85 rounded-lg ">
        <h1 className=" text-4xl font-semibold py-4 px-0 my-4 mx-8 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 mx-8 my-2 w-5/6 bg-zinc-900 bg-opacity-70 border border-gray-500 rounded-lg"
          ></input>
        )}
        <input
          type="text"
          placeholder="Email"
          className="p-4 my-2 mx-8  w-5/6 bg-zinc-900 bg-opacity-70 border border-gray-500 rounded-lg"
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-5/6 mx-8  bg-zinc-900 bg-opacity-70 border border-gray-500 rounded-lg"
        ></input>
        {!isSignInForm && (
          <input
            type="password"
            placeholder="Confirm Password"
            className="p-4 my-2 w-5/6 mx-8  bg-zinc-900 bg-opacity-70 border border-gray-500 rounded-lg"
          ></input>
        )}
        <button className="p-4 my-2 bg-red-700 w-5/6 rounded-lg mx-8 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="px-4  text-center cursor-pointer mx-8 ">Forget Password?</p>
        <div className="flex my-6 mx-8 ">
          <input type="checkbox" className="size-4 my-1"></input>
          <p className="mx-4">Remeber me</p>
        </div>
        <p className="py-4 mx-8 ">
          {isSignInForm ? "New to Netflix?" : "Already have account?"}
          <span
            className="cursor-pointer mx-2 font-bold"
            onClick={toggleSignIn}
          >
            {isSignInForm ? "Sign Up now" : "Sign In now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
