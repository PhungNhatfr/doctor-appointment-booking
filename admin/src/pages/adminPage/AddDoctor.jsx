import React from "react";
import { assets } from "../../assets_admin/assets";

const AddDoctor = () => {
  return (
    <div className="flex flex-col gap-2 px-5 py-5">
      <p className="text-md">Add Doctor</p>

      <form className="border border-gray-400 bg-white rounded-md w-3/4 h-full px-5 py-5 flex flex-col gap-3">
        {/* Avatar */}
        <div className="flex flex-row gap-4 items-center cursor-pointer">
          <img
            src={assets.upload_area}
            alt="doctor-image"
            className="w-13 rounded-full"
          />
          <p className="text-sm ">Upload doctor picture</p>
        </div>

        {/* Info */}
        <div className="grid grid-cols-2 gap-x-10 pt-5 text-gray-600 ">
          {/* Col 1 */}
          <div className="col-start-1 flex flex-col gap-3 ">
            <div className="flex flex-col gap-2 text-sm ">
              <p>Doctor Name</p>
              <input
                type="text"
                placeholder="Name"
                className=" text-sm px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="flex flex-col gap-2 text-sm">
              <p>Doctor Email</p>
              <input
                type="email"
                placeholder="Email"
                className=" text-sm px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="flex flex-col gap-2 text-sm">
              <p>Doctor Password</p>
              <input
                type="password"
                placeholder="Password"
                className=" text-sm px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="flex flex-col gap-2 text-sm">
              <p>Experiences</p>
              <input
                type="number"
                placeholder="Experience"
                className=" text-sm px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="flex flex-col gap-2 text-sm">
              <p>Fees</p>
              <input
                type="number"
                placeholder="Fees"
                className=" text-sm px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
          {/* Col 2 */}
          <div className="col-start-2 flex flex-col gap-3 ">
            <div className="flex flex-col gap-2 text-sm ">
              <p>Speciality</p>
              <select className=" text-sm px-3 py-2 border border-gray-300 rounded-md">
                <option value="General physician">General physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatricians">Pediatricians</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
              </select>
            </div>

            <div className="flex flex-col gap-2 text-sm">
              <p>Education</p>
              <input
                type="text"
                placeholder="Education"
                className=" text-sm px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="flex flex-col gap-2 text-sm">
              <p>Address</p>
              <input
                type="text"
                placeholder="Address 1"
                className=" text-sm px-3 py-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Address 2"
                className=" text-sm px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-sm w-full">
          <p>About me</p>
          <textarea
            rows={5}
            placeholder="write about yourself"
            className=" text-sm px-3 py-2 border border-gray-300 rounded-md h-32"
          />
        </div>
        
        <button className="rounded-full w-fit px-10 py-2 bg-[#5F6FFF] text-white hover:text-[#5F6FFF] hover:bg-white cursor-pointer text-sm mt-3">
          Add Doctor
        </button>
      </form>
    </div>
  );
};

export default AddDoctor;
