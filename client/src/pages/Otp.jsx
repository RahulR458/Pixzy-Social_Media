import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {Formik, useFormik} from "formik"

const validate = (values)=>{
  const errors = {};
  if(values.otp.some((data) =>data === "")){
    errors.otp = "Please enter the OTP";
  }
  return errors;
}

const Otp = () => {
  const navigate = useNavigate()
  const 
    formik
   = useFormik({
    initialValues: {
      otp: 
        Array.from({length:6}).fill("") ,
      
    },
    validate,
    onSubmit: (values)=>{
      console.log(values.otp.join(""));
      // navigate('/reset-password');
    }
  });

  console.log(formik.values);

  // const [otp, setOtp] = useState({
  //   digitOne:"",
  //   digitTwo:"",
  //   digitThree:"",
  //   digitFour:"",
  //   digitFive:"",
  //   digitSix:""
  // })
  const inputRef = useRef({})

  useEffect(()=>{
    inputRef.current[0].focus();
    // inputRef.current[0].addEventListener("paste",pasteText)
    // return () => inputRef.current[0].removeEventListener("paste",pasteText)
    },[])

    const pasteText = (event)=>{
      const pastedText = event.clipboardData.getData("text");
      const fieldValue = {}
      Object.keys(values.otp).forEach((keys,index)=>{
        fieldValue[keys] = pastedText[index];
      })

      // setOtp(fieldValue)
      inputRef.current[5].focus()

    }

  const handleChange = (event, index) => {
    const { value} = event.target;

    if(/[a-z]/gi.test(value)) return;

    const currentOtp = [...formik.values.otp]
    
    currentOtp[index] = value.slice(-1)

    formik.setValues((prev)=>({
      ...prev,
      otp:currentOtp,
    }))

    // setOtp(prev=>({
    //   ...prev,
    //   [name] : value.slice(-1)
    // }))

    // event.target.nextSibling.focus()
    if(value && index < 5){
      inputRef.current[index+1].focus()
      }
  }
      
  const handleBackspace = (event, index)=>{
        if(event.key === "Backspace"){
          if(index > 0){
            inputRef.current[index-1].focus()
            }
        }
  }

  const renderInput = (keys) => {
    // Object.keys(otp)
    return formik.values.otp.map((value, index)=>(
      <input
        ref={(element)=>(inputRef.current[index] = element)}
        autoComplete="none"
        key={index}
        name={index}
        value={value}
        className="w-full max-w-[50px] h-[50px] border-[1px] border-[rgb(215,215,215)] text-gray-500 focus:outline-none text-center font-bold text-xl rounded-[8px]"
        type="text"
        onChange={(event)=>handleChange(event, index)}
        onKeyUp={(event)=>handleBackspace(event, index)}
      />
    ));
  };

  return (
    <div className="max-w-[1640px] mx-auto flex justify-center text-center items-center flex-col px-4">
      <h1 className="mt-12 font-serif font-bold text-4xl">Pixzy</h1>
      {/* Login Container */}
      <div className="w-full max-w-[437px] h-auto mt-[50px] flex justify-center text-center items-center flex-col sm:border-[1px] border-[#D7D7D7] p-4 sm:p-0">
        <h1 className="sm:mt-8 font-sans font-semibold text-2xl">
          Enter OTP
        </h1>
        <h3 className="text-black font-sans m-6 sm:text-sm text-xs">OTP has been sent to your registered email/phone
        <br />tech@gmail.com</h3>
        <Formik className=" mt-10 ">

        <div className="w-full flex justify-center gap-2 mt-10 ">{renderInput()}</div>
         
        </Formik>
        {formik.errors.otp && <p className="mt-2 text-red-600 text-sm">OTP is required</p>}
        <button type="button" onClick={formik.handleSubmit} className="w-full max-w-[350px] bg-[#0095F6] text-white text-lg rounded-[8px] mt-12 mb-2 p-2 border-[#0095F6]">
            Submit
          </button>
          <h2 className="w-full max-w-[350px] h-auto flex items-start mb-16 text-[#0095F6] font-sans cursor-pointer">Resend OTP</h2>
          
      </div>
    </div>
  );
};

export default Otp;
