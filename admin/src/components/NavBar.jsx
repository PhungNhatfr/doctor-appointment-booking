import React, { useContext } from "react";
import { assets } from "../assets_admin/assets";
import { AdminContext } from "../context/AdminContext";
import { DoctorContext } from "../context/DoctorContext";

const NavBar = () => {
  const { navigate, setTokenAdmin } = useContext(AdminContext);
  const { setTokenDoctor } = useContext(DoctorContext);

  const logout = () => {
    localStorage.removeItem("tokenAdmin");
    localStorage.removeItem("tokenDoctor");
    setTokenAdmin("");
    setTokenDoctor("");
    navigate("/login");
  };

  return (
    <div className="border-b border-gray-400 pb-3 mt-3">
      <div className="flex flex-row justify-between px-4 md:px-16">
        <div className="w-34">
          <img src={assets.admin_logo} alt="admin-logo" className="w-full" />
        </div>

        <div
          onClick={logout}
          className="bg-[#5F6FFF] text-white border rounded-full text-center text-sm cursor-pointer w-32 flex justify-center items-center "
        >
          <p className="px-5 py-2">Log out</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
