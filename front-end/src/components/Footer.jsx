import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const Footer = () => {
  return (
    <div className="mt-18">
      <div className="flex flex-row justify-between border-b border-b-gray-400 py-4">
        <div className="flex flex-col w-1/2">
          <img className="w-36 mb-5" src={assets.logo} alt="logo" />
          <p className="text-xs">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-md font-bold mb-5">COMPANY</p>
          <div className="flex flex-col text-xs gap-3">
            <p>Home</p>
            <p>About</p>
            <p>Contact us</p>
            <p>Privacy Policy</p>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-md font-bold mb-5">GET IN TOUCH</p>
          <div className="flex flex-col text-xs gap-3">
            <p>+1-212-456-7890</p>
            <p>phungnhatfr2352@gmail.com</p>
          </div>
        </div>
          </div>
          <p className="text-center mt-5 mb-5 text-xs">© 2024 GreatStack. Proudly developed by phungnhatfr Inspired by GreatStack Design System.</p>
    </div>
  );
};

export default Footer;
