import { useRef, useState } from "react";
import Header from "./Header";
import Input from "./Input";
import { validate } from "../../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/userSlice";
import { AVATAR } from "../../utils/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errMsg, setErrMsg] = useState("");
  const dispatch = useDispatch();
  const email = useRef();
  const password = useRef();
  const firstName = useRef();
  const lastName = useRef();

  const signInHandler = () => {
    setIsSignIn(!isSignIn);
  };

  const onButtonCLick = () => {
    const msg = validate(email.current.value, password.current.value);
    setErrMsg(msg);
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: `${firstName.current.value} ${lastName.current.value}`,
            photoURL: AVATAR,
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
              console.log(user);
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrMsg(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMsg(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMsg(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <>
      <Header />
      <div className="flex justify-center items-center">
        <div className="bg-black absolute w-96 top-44 h-auto opacity-85 text-white py-10 px-12 rounded-lg">
          <form onSubmit={(e) => e.preventDefault()}>
            <h1 className="text-3xl font-semibold text-left mb-6">
              {isSignIn ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignIn && (
              <Input refer={firstName} type={"text"} field={"First Name"} />
            )}
            {!isSignIn && (
              <Input refer={lastName} type={"text"} field={"Last Name"} />
            )}
            <Input refer={email} type={"text"} field={"Email"} />
            <Input refer={password} type={"password"} field={"Password"} />

            <p className="font-normal text-sm text-red-500">{errMsg}</p>

            <button
              onClick={onButtonCLick}
              className="bg-red-600 w-full py-2 mb-4 rounded-md mt-2"
            >
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>

            {!isSignIn ? (
              <p>
                Already a user?
                <b className="cursor-pointer" onClick={signInHandler}>
                  Sign in now
                </b>
              </p>
            ) : (
              <p>
                New to Netflix?
                <b className="cursor-pointer" onClick={signInHandler}>
                  Sign up now
                </b>
              </p>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
