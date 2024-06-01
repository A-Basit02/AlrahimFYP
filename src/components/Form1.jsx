import React, { useState } from "react";
import towelImg from "../assets/images/background.jpg";
import logo from "../assets/images/logomain.png";

const Form1 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [designation, setDesignation] = useState("");
  const [section, setSection] = useState("");
  const [contact, setContact] = useState("");

  // Debugging: Check the initial state
  // console.log({ name, email, department, designation, section, contact });
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
          Issue generator
        </h2>
        <div className="flex items-center justify-between">
          <div className="font-Montserrat text-[20px]">CAPA number</div>
          <div className="font-Montserrat text-[20px]">#1001</div>
        </div>
        <div>
          {/* Name */}
          <div className="relative mb-4 mt-4">
            <input
              id="Name"
              type="text"
              value={name}
              onChange={(event) => {
                console.log("Name:", event.target.value); // Debugging
                setName(event.target.value);
              }}
              className="font-Montserrat block w-full px-2 py-2 text-lg bg-transparent border-b border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="Name"
              className="absolute left-0 top-2.5 text-gray-900 text-lg duration-300 transform -translate-y-6 scale-75 origin-0 peer-placeholder-shown:scale-100 
            peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-gray-600 font-Montserrat"
            >
              Name
            </label>
          </div>

          {/* Email */}
          <div className="relative mb-4">
            <input
              id="Email"
              type="text"
              value={email}
              onChange={(event) => {
                console.log("Email:", event.target.value); // Debugging
                setEmail(event.target.value);
              }}
              className="font-Montserrat block w-full px-2 py-2 text-lg bg-transparent border-b border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="Email"
              className="absolute left-0 top-2.5 text-gray-900 text-lg duration-300 transform -translate-y-6 scale-75 origin-0 peer-placeholder-shown:scale-100 
            peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-gray-600 font-Montserrat"
            >
              Email
            </label>
          </div>

          {/* Department */}
          <div className="relative mb-4">
            <input
              id="Department"
              type="text"
              value={department}
              onChange={(event) => {
                console.log("Department:", event.target.value); // Debugging
                setDepartment(event.target.value);
              }}
              className="font-Montserrat block w-full px-2 py-2 text-lg bg-transparent border-b border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="Department"
              className="absolute left-0 top-2.5 text-gray-900 text-lg duration-300 transform -translate-y-6 scale-75 origin-0 peer-placeholder-shown:scale-100 
            peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-gray-600 font-Montserrat"
            >
              Department
            </label>
          </div>

          {/* Designation */}
          <div className="relative mb-4">
            <input
              id="Designation"
              type="text"
              value={designation}
              onChange={(event) => {
                console.log("Designation:", event.target.value); // Debugging
                setDesignation(event.target.value);
              }}
              className="font-Montserrat block w-full px-2 py-2 text-lg bg-transparent border-b border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="Designation"
              className="absolute left-0 top-2.5 text-gray-900 text-lg duration-300 transform -translate-y-6 scale-75 origin-0 peer-placeholder-shown:scale-100 
            peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-gray-600 font-Montserrat"
            >
              Designation
            </label>
          </div>

          {/* Section */}
          <div className="relative mb-4">
            <input
              id="Section"
              type="text"
              value={section}
              onChange={(event) => {
                console.log("Section:", event.target.value); // Debugging
                setSection(event.target.value);
              }}
              className="font-Montserrat block w-full px-2 py-2 text-lg bg-transparent border-b border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="Section"
              className="absolute left-0 top-2.5 text-gray-900 text-lg duration-300 transform -translate-y-6 scale-75 origin-0 peer-placeholder-shown:scale-100 
            peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-gray-600 font-Montserrat"
            >
              Section
            </label>
          </div>

          {/* Contact */}
          <div className="relative mb-4">
            <input
              id="Contact"
              type="text"
              value={contact}
              onChange={(event) => {
                console.log("Contact:", event.target.value); // Debugging
                setContact(event.target.value);
              }}
              className="font-Montserrat block w-full px-2 py-2 text-lg bg-transparent border-b border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="Contact"
              className="absolute left-0 top-2.5 text-gray-900 text-lg duration-300 transform -translate-y-6 scale-75 origin-0 peer-placeholder-shown:scale-100 
            peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-gray-600 font-Montserrat"
            >
              Contact
            </label>
          </div>
        </div>

        <button className="font-Montserrat bg-primary-button text-white px-4 py-2 rounded hover:bg-primary-button-hover w-full">
          Next
        </button>
      </div>
    </div>
  );
};

export default Form1;
