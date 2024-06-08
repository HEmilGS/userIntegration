import { useState } from "react";
import { Home } from 'lucide-react';
import { LogIn } from 'lucide-react';
import { Search } from 'lucide-react';
import React from "react";

// eslint-disable-next-line react/prop-types
const NavigationBar = ({ children }) => {
  const [name, setName] = useState("");

  const handleNavigate = (route) => {
    window.location.pathname = route;
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="flex flex-col h-screen w-full relative">
      <div className="flex flex-row  shadow-lg z-0 fixed top-0 left-0 right-0">
        <div
          onClick={() => handleNavigate("/")}
          className="flex cursor-pointer m-4 p-2"
        >
          <Home size={24} />
          <p className="mx-2">Dashboard</p>
        </div>
        <div
          onClick={() => handleNavigate("/register")}
          className="flex cursor-pointer m-4 p-2"
        >
          <LogIn size={24} />
          <p className="mx-2">Register</p>
        </div>


      <div className="w-full flex justify-end items-center">
        <Search size={25}/>
        <input
          className="m-4 p-2 outline outline-black rounded-xl"
          type="text"
          placeholder="Search users"
          onChange={handleNameChange}
          />
          </div>

      </div>

      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { name });
      })}
    </div>
  );
};

export default NavigationBar;
