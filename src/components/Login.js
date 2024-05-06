import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidate } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { PHOTOURL } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  //const cnfrmpassword = useRef(null);

  const handleButtonClick = () => {
    //validate form

    const msg = checkValidate(email.current.value, password.current.value);

    setErrorMessage(msg);

    if (msg) return;
    if (!isSignInForm) {
      //SignUp Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: PHOTOURL,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              
              // ...
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });

          

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
          // ..
        });
    } else {
      //sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
         
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="bg-no-repeat brightness-50"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c7f07b68-7989-4ff7-a31e-11c17dcc2fea/fcf685b8-3f9f-42d8-9af3-4bb86fa5a3b8/IN-en-20240422-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Bcg-img"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-8 bg-black w-4/12 my-28 mx-auto right-0 left-0 text-white bg-opacity-75 rounded-lg "
      >
        <h1 className=" text-4xl font-semibold py-4 px-0 my-4 mx-8 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 mx-8 my-2 w-5/6 bg-zinc-900 bg-opacity-70 border border-gray-500 rounded-lg"
          ></input>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-4 my-2 mx-8  w-5/6 bg-zinc-900 bg-opacity-70 border border-gray-500 rounded-lg"
        ></input>
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-5/6 mx-8  bg-zinc-900 bg-opacity-70 border border-gray-500 rounded-lg"
        ></input>
        {/* {!isSignInForm && (
          <input
            ref={cnfrmpassword}
            type="password"
            placeholder="Confirm Password"
            className="p-4 my-2 w-5/6 mx-8  bg-zinc-900 bg-opacity-70 border border-gray-500 rounded-lg"
          ></input>
        )} */}
        <p className="text-red-700 px-9 "> {errorMessage}</p>
        <button
          className="p-4 my-2 bg-red-700 w-5/6 rounded-lg mx-8 "
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="px-4  text-center cursor-pointer mx-8 ">
          {isSignInForm ? "Forgot Password?" : ""}
        </p>
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
