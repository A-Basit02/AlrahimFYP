// src/Signup.js
import React, { useState } from "react";
import towelImg from "../assets/images/background.jpg";
import logo from "../assets/images/logomain.png";
import Inputfields from './Inputfields';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confrimpassword, setConfirmpassword] = useState("");

  // console.log({ name, email, password, confrimpassword });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

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

      {/* inputs div */}
      <div className="absolute top-[55%] lg:top-[55%] left-[50%] lg:left-[75%] transform -translate-x-[50%] -translate-y-[50%] lg:translate-y-[-50%] w-full lg:w-[510px] h-full lg:h-[750px] bg-white p-4 rounded-lg shadow-lg mt-20 lg:mt-0">
        <h2 className="font-Montserrat text-[36px] font-bold mb-4">Sign Up</h2>

        <div className="relative mb-4">
          <Inputfields
            id="Name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            label="Name"
          />
        </div>

        <div className="relative mb-4">
          <Inputfields
            id="Email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            label="Email"
          />
        </div>

        <div className="relative mb-4">
          <Inputfields
            id="Password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            label="Password"
            showPassword={showPassword}
            togglePasswordVisibility={togglePasswordVisibility}
          />
        </div>

        <div className="relative mb-4">
          <Inputfields
            id="Confirm Password"
            type="password"
            value={confrimpassword}
            onChange={(event) => setConfirmpassword(event.target.value)}
            label="Confirm Password"
            showPassword={showConfirmPassword}
            togglePasswordVisibility={toggleConfirmPasswordVisibility}
          />
        </div>

        <div className="relative mb-4">
          <Inputfields
            id="Options"
            type="dropdown"
            options={["QA", "QMS", "Employee"]}
          />
        </div>

        <button className="font-Montserrat bg-primary-button text-white px-4 py-2 rounded hover:bg-primary-button-hover w-full">
          Next
        </button>
      </div>
    </div>
  );
};

export default Signup;
