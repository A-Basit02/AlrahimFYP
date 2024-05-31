import React, { useState } from "react";

const Inputfields = ({ label, type = "text", id, ...props }) => {

  const [inputType, setInputType] = useState(type);
  const [showPassword, setShowPassword] = useState(false);


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    setInputType(showPassword ? 'password' : 'text');
  };
  return (
    <div className="relative my-6">
      <input
        id={id}
        type={inputType}
        className="font-Montserrat block w-full px-2 py-2 text-lg bg-transparent border-b border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
        placeholder=" "
        {...props}
      />
      <label
        htmlFor={id}
        className="absolute left-0 top-2.5 text-gray-900 text-lg duration-300 transform -translate-y-6 scale-75 origin-0 peer-placeholder-shown:scale-100 
  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-gray-600 font-Montserrat"
      >
        {label}
      </label>
      {type === "password" && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-2 top-2.5 text-lg text-gray-600 focus:outline-none"
        >
          {showPassword ? 'Hide' : 'Show'}
        </button>
      )}
    </div>
  );
};

export default Inputfields;
