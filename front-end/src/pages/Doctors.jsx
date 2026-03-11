import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {assets, specialityData } from "../assets/assets_frontend/assets";
import DoctorItem from "../components/DoctorItem";
import { UserContext } from "../context/userContext";

const Doctors = () => {
  
  const { doctors } = useContext(UserContext);
  
  const { specialityDoctor } = useParams();
  const navigate = useNavigate();
  
  return (
    <div className="mt-10 mb-20 min-h-max">
      <p className="text-md">Browse through the doctors specialist.</p>

      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        {/* Left */}
        <div className="flex flex-col gap-4 w-full h-12 sm:w-auto">
          {specialityData.map((speciality) => (
            <div
              onClick={() => navigate(`/doctors/${speciality.speciality}`)}
              className={`border rounded-lg border-gray-400 text-gray-600 text-xs w-full sm:w-48 hover:border-[#E2E5FF] hover:bg-[#E2E5FF] cursor-pointer ${
                speciality.speciality === specialityDoctor
                  ? "bg-[#E2E5FF] border-[#E2E5FF]"
                  : ""
              } `}
            >
              <p className="py-3 px-4">{speciality.speciality}</p>
            </div>
          ))}
        </div>

        {/* Right */}

        <div className="w-full grid sm:grid-cols-2 md:grid-cols-4  gap-4 gap-y-6">
          {doctors.map((doctor) => {
            if (doctor.speciality === specialityDoctor) {
              return (
                <DoctorItem
                  _id={doctor._id}
                  name={doctor.name}
                  speciality={doctor.speciality}
                  image={doctor.image ? doctor.image : assets.upload_area}
                />
              );
            }

            if (!specialityDoctor) {
              return (
                <DoctorItem
                  _id={doctor._id}
                  name={doctor.name}
                  speciality={doctor.speciality}
                  image={doctor.image ? doctor.image : assets.upload_area}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
