import { useState } from "react";
import Header from "./Header";
import Input from "./Input";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const signInHandler = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <>
      <Header />
      <div className="bg-black absolute top-40 mx-[550px] w-[420px] h-auto opacity-85 text-white py-10 px-12 rounded-lg">
        <form>
          <h1 className="text-3xl font-semibold text-left mb-6">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && <Input type={"text"} field={"First Name"} />}
          {!isSignIn && <Input type={"text"} field={"Last Name"} />}
          <Input type={"text"} field={"Email"} />
          <Input type={"password"} field={"Password"} />
          <button className="bg-red-600 w-full py-2 mb-4 rounded-md">
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>

          {!isSignIn ? (
            <p>
              Already a user?{" "}
              <b className="cursor-pointer" onClick={signInHandler}>
                Sign in now
              </b>
            </p>
          ) : (
            <p>
              New to Netflix?{" "}
              <b className="cursor-pointer" onClick={signInHandler}>
                Sign up now
              </b>
            </p>
          )}
        </form>
      </div>
    </>
  );
};

export default Login;
