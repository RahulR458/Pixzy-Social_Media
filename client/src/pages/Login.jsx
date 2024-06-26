import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="max-w-[1640px] mx-auto flex justify-center text-center items-center flex-col px-4">
      {/* Login Container */}
      <div className="w-full max-w-[437px] h-auto mt-[72px] flex justify-center text-center items-center flex-col sm:border-[1px] border-[#D7D7D7] p-4 sm:p-0">
        <h1 className="mt-12 font-serif font-bold text-4xl">Instagram</h1>
        <div className="w-full flex flex-col gap-2 mt-16 items-center">
          <input
            className="w-full max-w-[350px] border-[1px] border-[#D7D7D7] text-sm p-3 rounded-[3px] focus:outline-none"
            type="text"
            placeholder="Phone number, Username, or Email"
          />
          <input
            className="w-full max-w-[350px] border-[1px] border-[#D7D7D7] text-sm p-3 rounded-[3px] focus:outline-none"
            type="password"
            placeholder="Password"
          />
          <button className="w-full max-w-[350px] bg-[#0095F6] text-white text-lg rounded-[8px] mt-2 p-2 border-[#0095F6]">
            Login
          </button>
          <div className="flex items-center justify-between mt-2 w-full px-4">
            <hr className="flex-grow border-t" />
            <h3 className="text-[#606060] text-lg mx-2">OR</h3>
            <hr className="flex-grow border-t" />
          </div>
          <div className="mt-4">
            <h3 className="text-[#606060] text-lg my-3 font-sans cursor-pointer">
              Log in with Google
            </h3>
            <Link to="/otp">
              <h4 className="text-black text-sm font-sans mb-8 cursor-pointer">Forgot password?</h4>
            </Link>
          </div>
        </div>
      </div>

      {/* Outer login */}
      <div className="w-full max-w-[437px] h-[80px] sm:border-[1px] border-[#D7D7D7] m-2 flex justify-center items-center gap-1">
        <h3 className="text-black text-lg">Don’t have an account?</h3>
        <Link to="/signup" className="text-[#0095F6] text-lg cursor-pointer">Sign up</Link>
      </div>
      <div>
        <h3 className="text-black text-lg mt-4 cursor-pointer">Get the app.</h3>
      </div>
      <div className="w-full max-w-[437px] h-auto flex justify-center gap-2 mt-4">
        <img
          className="w-[110px] h-auto"
          src={"/src/assets/Microsoft.svg"}
          alt="Microsoft"
        />
        <img
          className="w-[110px] h-auto"
          src={"/src/assets/Google_Play.svg"}
          alt="Google Play"
        />
      </div>
      <div>
        <p className="text-[#606060] text-xs my-4">
          @ 2024 Instagram From Meta
        </p>
      </div>
    </div>
  );
};

export default Login;
