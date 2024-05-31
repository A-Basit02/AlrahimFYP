import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImage from "../assets/images/logomain.png";
import sidebarimg from "../assets/images/sidebarlogo.png";
const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((perv) => !perv);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <nav className="bg-white bg-opacity-30 p-4 absolute top-0 left-0 w-full">
      <div className="container mx-auto flex items-center justify-between h-16">
        <div className="flex items-center">
          <Link to="/" onClick={closeSidebar}>
            <img src={logoImage} alt="Logo" className="h-44 w-60 mr-4" />
          </Link>
        </div>
        <div className="flex-grow flex justify-center">
          <ul className="hidden md:flex space-x-8">
            {["Form 1", "Form 2", "Form 3", "Form 4", "Form 5", "Form 6"].map(
              (form, index) => (
                <li key={index}>
                  <Link
                    to={`/form${index + 1}`}
                    className="text-white font-Montserrat hover:text-primary-hover"
                  >
                    {form}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/signup">
            <button className="font-Montserrat bg-white text-primary-button px-4 py-2 rounded hover:bg-slate-100">
              Signup
            </button>
          </Link>
          <Link to="/login">
            <button className="font-Montserrat bg-primary-button text-white px-4 py-2 rounded hover:bg-primary-button-hover">
              Login
            </button>
          </Link>
        </div>
        <button onClick={toggleSidebar} className="text-white md:hidden">
          ☰
        </button>
      </div>
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50 flex">
          <div className="bg-slate-200 w-64 p-4">
            <button onClick={toggleSidebar} className="text-black mb-4">
              ✕
            </button>
            <div className="flex items-center mb-4">
              <img src={sidebarimg} alt="Logo" className="h-32 w-40" />
            </div>
            <ul className="space-y-4">
              {["Form 1", "Form 2", "Form 3", "Form 4", "Form 5", "Form 6"].map(
                (form, index) => (
                  <li key={index}>
                    <Link
                      to={`/form${index + 1}`}
                      className="text-black font-Montserrat hover:text-primary-hover"
                      onClick={closeSidebar}
                    >
                      {form}
                    </Link>
                  </li>
                )
              )}
            </ul>
            <div className="mt-4">
              <Link to="/signup">
                <button
                  className="font-Montserrat bg-white text-primary-button px-4 py-2 rounded hover:bg-slate-100 w-full mb-2"
                  onClick={closeSidebar}
                >
                  Signup
                </button>
              </Link>
              <Link to="/login">
                <button
                  className="font-Montserrat bg-primary-button text-white px-4 py-2 rounded hover:bg-primary-button-hover w-full"
                  onClick={closeSidebar}
                >
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
