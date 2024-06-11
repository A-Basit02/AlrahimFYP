import React, { useState } from "react";
import towelImg from "../assets/images/background.jpg";
import logo from "../assets/images/logomain.png";

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
  };import React, { useState } from "react";
import towelImg from "../assets/images/background.jpg";
import logo from "../assets/images/logomain.png";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confrimpassword, setConfirmpassword] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Select your user type');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
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

      <div className="absolute top-[55%] lg:top-[55%] left-[50%] lg:left-[75%] transform -translate-x-[50%] -translate-y-[50%] lg:translate-y-[-50%] w-full lg:w-[510px] h-full lg:h-[750px] bg-white p-4 rounded-lg shadow-lg mt-20 lg:mt-0">
        <h2 className="font-Montserrat text-[36px] font-bold mb-4">Sign Up</h2>

        <div className="relative mb-4">
          <input
            id="Name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="font-Montserrat block w-full px-2 py-2 text-lg bg-transparent border-b border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="Name"
            className="absolute left-0 top-2.5 text-gray-900 text-lg duration-300 transform -translate-y-6 scale-75 origin-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-gray-600 font-Montserrat"
          >
            Name
          </label>
        </div>

        <div className="relative mb-4">
          <input
            id="Email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="font-Montserrat block w-full px-2 py-2 text-lg bg-transparent border-b border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="Email"
            className="absolute left-0 top-2.5 text-gray-900 text-lg duration-300 transform -translate-y-6 scale-75 origin-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-gray-600 font-Montserrat"
          >
            Email
          </label>
        </div>

        <div className="relative mb-4">
          <input
            id="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type={showPassword ? "text" : "password"}
            className="font-Montserrat block w-full px-2 py-2 text-lg bg-transparent border-b border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="Password"
            className="absolute left-0 top-2.5 text-gray-900 text-lg duration-300 transform -translate-y-6 scale-75 origin-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-gray-600 font-Montserrat"
          >
            Password
          </label>
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-2 top-2.5 text-lg text-gray-600 focus:outline-none"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <div className="relative mb-4">
          <input
            id="Confirm Password"
            value={confrimpassword}
            onChange={(event) => setConfirmpassword(event.target.value)}
            type={showConfirmPassword ? "text" : "password"}
            className="font-Montserrat block w-full px-2 py-2 text-lg bg-transparent border-b border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="Confirm Password"
            className="absolute left-0 top-2.5 text-gray-900 text-lg duration-300 transform -translate-y-6 scale-75 origin-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-gray-600 font-Montserrat"
          >
            Confirm Password
          </label>
          <button
            type="button"
            onClick={toggleConfirmPasswordVisibility}
            className="absolute right-2 top-2.5 text-lg text-gray-600 focus:outline-none"
          >
            {showConfirmPassword ? "Hide" : "Show"}
          </button>
        </div>
    
          {/* {dropdown} */}

   <div className="mb-4 relative inline-block text-left w-full">
          <button
            onClick={toggleDropdown}
            className="w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-gray-100 text-lg font-medium text-black hover:bg-gray-300 focus:outline-none"
            id="menu-button"
            aria-expanded={isOpen}
            aria-haspopup="true"
          >
            {selectedOption}
          </button>

          {isOpen && (
            <div
              className="origin-top-right mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1"
            >
              <div className="py-1" role="none">
                <div
                  className="text-black block px-4 py-2 text-lg hover:bg-[#005B70] hover:text-white cursor-pointer"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-0"
                  onClick={() => handleOptionClick('QA')}
                >
                  QA
                </div>
                <div
                  className="text-black block px-4 py-2 text-lg hover:bg-[#005B70] hover:text-white cursor-pointer"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-1"
                  onClick={() => handleOptionClick('QMS')}
                >
                  QMS
                </div>
                <div
                  className="text-black block px-4 py-2 text-lg hover:bg-[#005B70] hover:text-white cursor-pointer"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-2"
                  onClick={() => handleOptionClick('EMPLOYEE')}
                >
                  EMPLOYEE
                </div>
              </div>
            </div>
          )}
        </div>



        <button className="font-Montserrat bg-primary-button text-white px-4 py-2 rounded hover:bg-primary-button-hover w-full">
          Next
        </button>
      </div>
    </div>
  );
};

export default Signup;


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

        {/* email */}
        <div className="relative mb-4">
          <input
            id="Email"
            type="email"
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

        <div>
          {/* Password */}
          <div className="relative mb-4">
            <input
              id="Password"
              value={password}
              onChange={(event) => {
                console.log("password:", event.target.value); // Debugging
                setPassword(event.target.value);
              }}
              type={showPassword ? "text" : "password"}
              className="font-Montserrat block w-full px-2 py-2 text-lg bg-transparent border-b border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="Password"
              className="absolute left-0 top-2.5 text-gray-900 text-lg duration-300 transform -translate-y-6 scale-75 origin-0 peer-placeholder-shown:scale-100 
          peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-gray-600 font-Montserrat"
            >
              Password
            </label>
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-2 top-2.5 text-lg text-gray-600 focus:outline-none"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative mb-4">
            <input
              id="Confirm Password"
              value={confrimpassword}
              onChange={(event) => {
                console.log("confrim password:", event.target.value); // Debugging
                setConfirmpassword(event.target.value);
              }}
              type={showConfirmPassword ? "text" : "password"}
              className="font-Montserrat block w-full px-2 py-2 text-lg bg-transparent border-b border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="Confirm Password"
              className="absolute left-0 top-2.5 text-gray-900 text-lg duration-300 transform -translate-y-6 scale-75 origin-0 peer-placeholder-shown:scale-100 
          peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-gray-600 font-Montserrat"
            >
              Confirm Password
            </label>
            <button
              type="button"
              onClick={toggleConfirmPasswordVisibility}
              className="absolute right-2 top-2.5 text-lg text-gray-600 focus:outline-none"
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>
        <button className="font-Montserrat bg-primary-button text-white px-4 py-2 rounded hover:bg-primary-button-hover w-full">
          Next
        </button>
      </div>
    </div>
  );
};

export default Signup;
