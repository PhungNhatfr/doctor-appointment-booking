import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets_frontend/assets";
import Button from "./Button";

const NavBar = () => {
  const navigate = useNavigate();

  return (
      <div className="flex flex-row items-center justify-between text-sm py-4 border-b border-b-gray-400">
        <div>
          <img
            onClick={() => navigate("/")}
            src={assets.logo}
            alt="logo"
            className="w-44 cursor-pointer"
          />
        </div>

        <ul className="hidden md:flex items-start gap-8 font-medium ">
          <NavLink to="/">
            <li>HOME</li>
            <hr className="border-none outline-none h-0.5 bg-[#5F6FFF] w-3/5 m-auto hidden" />
          </NavLink>
          <NavLink to="/doctors">
            <li>ALL DOCTORS</li>
            <hr className="border-none outline-none h-0.5 bg-[#5F6FFF] w-3/5 m-auto hidden" />
          </NavLink>
          <NavLink to="/about">
            <li>ABOUT</li>
            <hr className="border-none outline-none h-0.5 bg-[#5F6FFF] w-3/5 m-auto hidden" />
          </NavLink>
          <NavLink to="/contact">
            <li>CONTACT</li>
            <hr className="border-none outline-none h-0.5 bg-[#5F6FFF] w-3/5 m-auto hidden" />
          </NavLink>
        </ul>

        <div>
          <Button text="Create account" />
        </div>
          </div>
  );
};

export default NavBar;
