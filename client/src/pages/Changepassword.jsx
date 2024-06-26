import React from "react";

const Changepassword = () => {
  return (
    <div className="max-w-[1640px] mx-auto flex justify-center text-center items-center flex-col px-4">
        <h1 className="mt-12 font-serif font-bold text-4xl">Instagram</h1>
      {/* Login Container */}
      <div className="w-full max-w-[437px] h-auto mt-[50px] flex justify-center text-center items-center flex-col sm:border-[1px] border-[#D7D7D7] p-4 sm:p-0">
        <h1 className="sm:mt-8 font-sans font-semibold sm:text-2xl">Change Password</h1>
        <div className="w-full flex flex-col gap-2 mt-10 items-center">
          <input
            className="w-full max-w-[350px] border-[1px] border-[#D7D7D7] text-sm p-3 rounded-[3px] focus:outline-none"
            type="password"
            placeholder="Current Password"
          />
          <input
            className="w-full max-w-[350px] border-[1px] border-[#D7D7D7] text-sm p-3 rounded-[3px] focus:outline-none"
            type="password"
            placeholder="Password"
          />
          <input
            className="w-full max-w-[350px] border-[1px] border-[#D7D7D7] text-sm p-3 rounded-[3px] focus:outline-none"
            type="password"
            placeholder="Confirm Password"
          />
          <button className="w-full max-w-[350px] bg-[#0095F6] text-white text-lg rounded-[8px] mt-12 mb-16 p-2 border-[#0095F6]">
            Submit
          </button>
          
        </div>
      </div>

      
    </div>
  );
};

export default Changepassword;
