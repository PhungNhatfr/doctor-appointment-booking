import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AdminContext } from "../context/AdminContext";
import { DoctorContext } from "../context/DoctorContext";

import { assets } from "../assets_admin/assets";

const Sidebar = () => {
  const { tokenAdmin } = useContext(AdminContext);
  const { tokenDoctor } = useContext(DoctorContext);

  return (
    <div className="min-h-screen bg-white border-r border-gray-400 flex flex-col w-24 md:w-1/6 py-5">
      {/* For admin */}
      {tokenAdmin && (
        <>
          <NavLink
            to="/admin-dashboard"
            className={({ isActive }) =>
              `flex flex-row gap-3 w-full cursor-pointer px-5 py-4  ${
                isActive ? "bg-[#F2F3FF] border-r border-[#5F6FFF]" : ""
              }`
            }
          >
            <img src={assets.home_icon} alt="home-icon" className="w-5" />
            <p className="text-sm">Dashboard</p>
          </NavLink>

          <NavLink
            to="/admin-appointments"
            className={({ isActive }) =>
              `flex flex-row gap-3 w-full cursor-pointer px-5 py-4  ${
                isActive ? "bg-[#F2F3FF] border-r border-[#5F6FFF]" : ""
              }`
            }
          >
            <img src={assets.appointment_icon} alt="appointment-icon" className="w-5" />
            <p className="text-sm">Appointment</p>
          </NavLink>

          <NavLink
            to="/admin-add-doctor"
            className={({ isActive }) =>
              `flex flex-row gap-3 w-full cursor-pointer px-5 py-4  ${
                isActive ? "bg-[#F2F3FF] border-r border-[#5F6FFF]" : ""
              }`
            }
          >
            <img src={assets.add_icon} alt="add-icon" className="w-5" />
            <p className="text-sm">Add Doctor</p>
          </NavLink>

          <NavLink
            to="/admin-doctor-list"
            className={({ isActive }) =>
              `flex flex-row gap-3 w-full cursor-pointer px-5 py-4  ${
                isActive ? "bg-[#F2F3FF] border-r border-[#5F6FFF]" : ""
              }`
            }
          >
            <img src={assets.people_icon} alt="doctor-icon" className="w-5" />
            <p className="text-sm">Doctors</p>
          </NavLink>
        </>
      )}
      
      {/* ------For Doctor--------- */}
      {/* For admin */}
      {tokenDoctor && (
        <>
          <NavLink
            to="/doctor-dashboard"
            className={({ isActive }) =>
              `flex flex-row gap-3 w-full cursor-pointer px-5 py-4  ${
                isActive ? "bg-[#F2F3FF] border-r border-[#5F6FFF]" : ""
              }`
            }
          >
            <img src={assets.home_icon} alt="home-icon" className="w-5" />
            <p className="text-sm">Dashboard</p>
          </NavLink>

          <NavLink
            to="/doctor-appointments"
            className={({ isActive }) =>
              `flex flex-row gap-3 w-full cursor-pointer px-5 py-4  ${
                isActive ? "bg-[#F2F3FF] border-r border-[#5F6FFF]" : ""
              }`
            }
          >
            <img src={assets.appointment_icon} alt="appointment-icon" className="w-5" />
            <p className="text-sm">Appointment</p>
          </NavLink>

          <NavLink
            to="/doctor-personal-information"
            className={({ isActive }) =>
              `flex flex-row gap-3 w-full cursor-pointer px-5 py-4  ${
                isActive ? "bg-[#F2F3FF] border-r border-[#5F6FFF]" : ""
              }`
            }
          >
            <img src={assets.add_icon} alt="add-icon" className="w-5" />
            <p className="text-sm">Personal Information</p>
          </NavLink>
        </>
      )}
    </div>
  );
};

export default Sidebar;