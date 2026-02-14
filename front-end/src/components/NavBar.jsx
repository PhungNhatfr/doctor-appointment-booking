import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets_frontend/assets";
import Button from "./Button";

const NavBar = () => {
  const navigate = useNavigate();
  const [access, setAccess] = useState(true);

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

      {access ? (
        <div className="group relative">
          <div className="flex flex-row gap-2 cursor-pointer">
            <img
              src={assets.profile_pic}
              alt="profile-pic"
              className="rounded-full w-10"
            />
            <img
              src={assets.dropdown_icon}
              alt="drop-down icon"
              className="w-3"
            />
          </div>

          <div className="absolute hidden z-50 group-hover:block top-0 right-0 pr-20 pt-16 w-full">
            <div className="flex flex-col gap-3 border rounded-md w-40 px-3 py-5 bg-[#F8F8F8]">
              <p className=" cursor-pointer hover:text-black" onClick={() => navigate("/profile")}>My Profile</p>
              <p className=" cursor-pointer hover:text-black" onClick={() => navigate("/my-appointment")}>My appointments</p>
              <p className=" cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Button text="Create account" />
        </div>
      )}
    </div>
  );
};

export default NavBar;
