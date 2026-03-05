import React from "react";
import {doctors } from "../../assets_admin/assets";
import DoctorItem from "../../components/DoctorItem";

const DoctorList = () => {
  return (
    <div className="flex flex-col gap-3 px-5 py-5 w-3/4">
      <p>All Doctor</p>
      <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(170px,1fr))] gap-4 pt-5 gap-y-6">
        {doctors.map((doctor) => (

        <DoctorItem key={doctor._id} name={doctor.name} speciality={doctor.speciality} image={doctor.image} />
))}
      </div>
    </div>
  );
};

export default DoctorList;
