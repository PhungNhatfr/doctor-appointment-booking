import React from "react";
import { assets } from "../../assets_admin/assets";

const AdminDashBoard = () => {
  return (
    <div className="grid grid-cols-5  grid-rows-[100px_1fr] gap-3 h-full py-5 px-10">
      <div className="col-start-1 row-start-1 border rounded-md bg-white border-gray-200 flex flex-row px-5 py-5 gap-1">
        <img src={assets.doctor_icon} alt="doctor-icon" className="w-14" />
        <div className="flex flex-col gap-1">
          <p className="font-bold text-md">14</p>
          <p className="text-sm text-gray-500">Doctors</p>
        </div>
      </div>
      <div className="col-start-2 row-start-1 border rounded-md bg-white border-gray-200 flex flex-row px-5 py-5 gap-1">
        <img src={assets.appointments_icon} alt="appointment-icon" className="w-14" />
        <div className="flex flex-col gap-1">
          <p className="font-bold text-md">2</p>
          <p className="text-sm text-gray-500">Appointments</p>
        </div>
      </div>
      <div className="col-start-3 row-start-1 border rounded-md bg-white border-gray-200 flex flex-row px-5 py-5 gap-1">
        <img src={assets.patients_icon} alt="patient-icon" className="w-14" />
        <div className="flex flex-col gap-1">
          <p className="font-bold text-md">5</p>
          <p className="text-sm text-gray-500">Patients</p>
        </div>
      </div>

      
      <div className="col-start-1 col-span-3 h-fit rounded-md border border-gray-200 bg-white  ">
        <div className="flex flex-row gap-2 px-5 py-5 border-b border-gray-200">
          <img src={assets.list_icon} alt="list-icon" className="w-5" />
          <p className="font-bold text-md ">Lastest Appointments</p>
        </div>
        
        <div className="flex flex-col">
          <div className="flex flex-row justify-between px-5 py-4">
            <div className="flex flex-row gap-2">
              <img src={assets.upload_area} alt="profile-avatar" className="w-10 rounded-full" />
              <div className="flex flex-col text-sm font-bold">
                <p className="text-md">DR. Richard James</p>
                <p className="text-gray-400">Booking on 24th, July, 2025</p>
              </div>
            </div>
            <img src={assets.cancel_icon} alt="cancel-icon" className="w-10 cursor-pointer" />
          </div>
          
          
        </div>
        
      </div>

     
    </div>
  );
};

export default AdminDashBoard;
