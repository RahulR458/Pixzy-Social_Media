import React from "react";
import { Formik, Form, Field } from "formik";
import { signupSchema } from "../schemas/signupSchema";
import { Link } from "react-router-dom";

import { IoMdCloseCircle, IoMdCheckmarkCircle, IoLogoGoogle } from "react-icons/io";

const initialValues = {
  emailOrNumber: "",
  name: "",
  userName: "",
  password: "",
};

let URL = "http://localhost:3005/api/"


const Signup = () => {
  // const {values, handleBlur, handleChange, handleSubmit, errors, touched} = useFormik({
  //   initialValues,
  //   validationSchema: signupSchema,
  //   onSubmit: (values, action)=>{
  //     action.resetForm()
  //   }
  // })

  const onSubmit = (values, action) => {
    action.resetForm();
  };

  const signup = async (id)=>{
    try {
      const response = await axios(URL,{
        method : "POST",
        data : {
          initialValues
        }
      })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="max-w-[1640px] mx-auto flex justify-center text-center items-center flex-col px-4">
      {/* Login Container */}
      <div className="w-full max-w-[437px] h-auto sm:mt-[72px] flex justify-center text-center items-center flex-col sm:border-[1px] border-[#D7D7D7] p-4 sm:p-0">
        <h1 className="mt-12 font-serif font-bold text-4xl">Instagram</h1>
        <h3 className="text-black font-sans m-6 text-sm">
          Sign up to see photos and videos
          <br />
          from your friends.
        </h3>
        <button className="w-full max-w-[350px] bg-[#0095F6] text-white text-sm rounded-[8px] mt-2 p-2 border-[#0095F6] flex justify-center items-center gap-2">
          {/* <img
            className="bg-white w-4 h-4"
            src="/src/assets/Fb-logo.webp"
            alt="Fb-logo"
          /> */}
          <IoLogoGoogle />
          Log in with Google
        </button>
        <div className="flex items-center justify-center mt-2 w-full p-4">
          <hr className="flex-grow border-t mx-8" />
          <hr className="flex-grow border-t mx-8" />
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={signupSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched, values }) => (
            <Form
              action=""
              className="w-full flex flex-col gap-2 mt-2 items-center"
            >
              <div className="relative w-full max-w-[350px]">
                <Field
                  className="w-full border-[1px] border-[#D7D7D7] text-sm p-3 rounded-[3px] focus:outline-none"
                  name="emailOrNumber"
                  type="text"
                  placeholder="Email / Phone Number"
                />
                {touched.emailOrNumber &&
                  (errors.emailOrNumber ? (
                    <IoMdCloseCircle className="absolute top-3 right-3 text-xl cursor-pointer text-red-500" />
                  ) : (
                    <IoMdCheckmarkCircle className="absolute top-3 right-3 text-xl cursor-pointer text-green-500" />
                  ))}
              </div>
              <div className="w-full max-w-[350px] h-auto flex items-start text-[#ff4040] text-xs font-sans cursor-pointer">
                {errors.emailOrNumber && touched.emailOrNumber && (
                  <p>{errors.emailOrNumber}</p>
                )}
              </div>

              <div className="relative w-full max-w-[350px]">
                <Field
                  className="w-full max-w-[350px] border-[1px] border-[#D7D7D7] text-sm p-3 rounded-[3px] focus:outline-none"
                  name="name"
                  type="text"
                  placeholder="Full Name"
                />
                {touched.name &&
                  (errors.name ? (
                    <IoMdCloseCircle className="absolute top-3 right-3 text-xl cursor-pointer text-red-500" />
                  ) : (
                    <IoMdCheckmarkCircle className="absolute top-3 right-3 text-xl cursor-pointer text-green-500" />
                  ))}
                <div className="w-full max-w-[350px] h-auto flex items-start text-[#ff4040] text-xs font-sans cursor-pointer">
                  {errors.name && touched.name && <p>{errors.name}</p>}
                </div>
              </div>

              <div className="relative w-full max-w-[350px]">
                <Field
                  className="w-full max-w-[350px] border-[1px] border-[#D7D7D7] text-sm p-3 rounded-[3px] focus:outline-none"
                  name="userName"
                  type="text"
                  placeholder="Username"
                />
                {touched.userName &&
                  (errors.userName ? (
                    <IoMdCloseCircle className="absolute top-3 right-3 text-xl cursor-pointer text-red-500" />
                  ) : (
                    <IoMdCheckmarkCircle className="absolute top-3 right-3 text-xl cursor-pointer text-green-500" />
                  ))}
                <div className="w-full max-w-[350px] h-auto flex items-start text-[#ff4040] text-xs font-sans cursor-pointer">
                  {errors.userName && touched.userName && (
                    <p>{errors.userName}</p>
                  )}
                </div>
              </div>

              <div className="relative w-full max-w-[350px]">
                <Field
                  className="w-full max-w-[350px] border-[1px] border-[#D7D7D7] text-sm p-3 rounded-[3px] focus:outline-none"
                  name="password"
                  type="password"
                  placeholder="Password"
                />
                <div className="w-full max-w-[350px] h-auto flex items-start text-[#ff4040] text-xs font-sans cursor-pointer">
                  {errors.password && touched.password && (
                    <p>{errors.password}</p>
                  )}
                </div>
              </div>
              <p className="text-[#6E6E6E] font-sans p-1 sm:text-sm text-xs ">
                People who use our service may have uploaded <br />
                your contact information to instagram.{" "}
                <span className="text-[#005DAE] cursor-pointer">
                  Learn
                </span>{" "}
                <br />
                <span className="text-[#005DAE] cursor-pointer">More</span>
              </p>
              <p className="text-[#6E6E6E] font-sans p-1 sm:text-sm text-xs ">
                By signing up, you agree to out{" "}
                <span className="text-[#005DAE] cursor-pointer">
                  Terms, Privacy
                </span>{" "}
                <br />
                <span className="text-[#005DAE] cursor-pointer">Policy </span>
                <span>and</span>{" "}
                <span className="text-[#005DAE] cursor-pointer">
                  Cookies Policy
                </span>
              </p>
              <button className="w-full max-w-[350px] bg-[#0095F6] text-white text-lg rounded-[8px] mt-2 mb-12 p-2 border-[#0095F6]">
                Signup
              </button>
            </Form>
          )}
        </Formik>
      </div>

      {/* Outer login */}
      <div className="w-full max-w-[437px] h-[80px] sm:border-[1px] border-[#D7D7D7] m-2 flex justify-center items-center gap-1">
        <h3 className="text-black text-lg">Have an account?</h3>
        <Link to="/" className="text-[#0095F6] text-lg cursor-pointer">
          Log in
        </Link>
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

export default Signup;
