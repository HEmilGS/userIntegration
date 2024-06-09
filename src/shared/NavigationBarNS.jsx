import { useState } from "react";
import { Home } from 'lucide-react';
import { LogIn } from 'lucide-react';
import React from "react";

// eslint-disable-next-line react/prop-types
const NavigationBar = ({ children }) => {

  const handleNavigate = (route) => {
    window.location.pathname = route;
  };


  return (
    <div className="flex flex-col h-screen w-full relative">
      <div className="flex shadow-lg z-0 fixed top-0 left-0 right-0 bg-header">
        <div
          onClick={() => handleNavigate("/")}
          className="flex cursor-pointer m-4 p-2"
        >
          <Home size={24} className="stroke-borders" />
          <p className="mx-2 text-borders">Dashboard</p>
        </div>
        <div
          onClick={() => handleNavigate("/register")}
          className="flex cursor-pointer m-4 p-2"
        >
          <LogIn size={24}className="stroke-borders" />
          <p className="mx-2 text-borders">Register</p>
        </div>


      </div>

      {React.Children.map(children, (child) => {
        return React.cloneElement(child);
      })}
    </div>
  );
};

export default NavigationBar;
