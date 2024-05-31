import React from 'react'
import towelImg from "../assets/images/background.jpg";
import logo from "../assets/images/logomain.png";
import Inputfields from './index.js';

const Signup = () => {
  return (
    <div className="relative h-screen w-screen">
    <img
      src={towelImg}
      alt="Background"
      className="object-cover h-full w-full"
    />
    <div className="absolute top-0 left-0 h-full w-full bg-black opacity-50"></div>
    <div className="hidden lg:block absolute top-[50%] left-[25%] transform -translate-x-[50%] -translate-y-[50%] text-center">
      <img src={logo} alt="LargeLogomain" />
    </div>
    <div className="absolute top-[55%] lg:top-[55%] left-[50%] lg:left-[75%] transform -translate-x-[50%] -translate-y-[50%] lg:translate-y-[-50%] w-full lg:w-[510px] h-full lg:h-[750px] bg-white p-4 rounded-lg shadow-lg mt-20 lg:mt-0">
      <h2 className="font-Montserrat text-[36px] font-bold mb-4">
      Sign Up
      </h2>

      <Inputfields label="Name" id="Name" />
      <Inputfields label="Email" id="Email" />
      <Inputfields label="Password" id="Password" type='password' />
      <Inputfields label="Confirm Password" id="ConfirmPassword"  type='password'/>
      <button className="font-Montserrat bg-primary-button text-white px-4 py-2 rounded hover:bg-primary-button-hover w-full">
        Next
      </button>
    </div>
  </div>
  )
}

export default Signup