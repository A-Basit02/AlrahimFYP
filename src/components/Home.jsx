import React from "react";
import towelImg from "../assets/images/background.jpg";
import logo from "../assets/images/logomain.png";
const Home = () => {
  return (
    <div className="relative h-screen w-screen">
      <img
        src={towelImg}
        alt="Background"
        className="object-cover h-full w-full"
      />
      <div className="absolute top-0 left-0 h-full w-full bg-black opacity-50"></div>
      <div className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] text-center">
        <img src={logo} alt="LargeLogomain" />
      </div>
    </div>
  );
};



export default Home;
