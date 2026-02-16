import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const Profile = () => {
  return (
    <div className="flex flex-col w-full md:w-2/5 mt-10 gap-3 mb-10">
      
      {/* Avatar */}
      <div className="flex flex-row gap-3 w-1/4">
        <img
          className="w-full rounded-md"
          src={assets.profile_pic}
          alt="profile-avatar"
        />
        <img
          className="w-full rounded-md"
          src={assets.upload_area}
          alt="upload_icon"
        />
      </div>
      
      {/* Title Name */}
      <div className="border-b-2 border-gray-300">
        <p className="text-xl font-bold pb-2">Edward Vincent</p>
      </div>
      
      {/* Contact Info */}
      <div className="flex flex-col gap-3 w-2/3">
        <p className="text-sm font-thin border-b-2 w-fit mb-2">
          CONTACT INFORMATION
        </p>

        <div className="grid grid-cols-2 grid-rows-3 gap-x-3 gap-y-3 text-sm text-gray-500">
          {/* Left side */}
          <p className="font-bold w-1/2">Email id:</p>
          <p className="font-bold col-start-1 row-start-2 w-1/2">Phone:</p>
          <p className="font-bold col-start-1 row-start-3 w-1/2">Address:</p>
          {/* Right Side */}
          <p>phungnhatfr2352@gmail.com</p>
          <p className="col-start-2 row-start-2">+33 6 56 69 85 63</p>
          <p className="col-start-2 row-start-3">
            43 Rue Saincric, Bordeaux, France
          </p>
        </div>
      </div>
      
      {/* Basic Info */}
      <div className="flex flex-col gap-3 w-2/3">
        <p className="text-sm font-thin border-b-2 w-fit mb-2">
          BASIC INFORMATION
        </p>

        <div className="grid grid-cols-2 grid-rows-2 gap-x-3 gap-y-3 text-sm text-gray-500">
          {/* Left side */}
          <p className="font-bold w-1/2">Gender:</p>
          <p className="font-bold col-start-1 row-start-2 w-1/2">Birthday:</p>

          {/* Right Side */}
          <p>Male</p>
          <p className="col-start-2 row-start-2">23 May, 2002</p>
        </div>
      </div>
      
      {/* Button */}
      <div className="cursor-pointer mt-5 border border-[#5F6FFF] rounded-full text-sm w-1/4 hover:text-white hover:bg-[#5F6FFF]">
        <p className="text-center py-2">Edit</p>
      </div>
    </div>
  );
};

export default Profile;
