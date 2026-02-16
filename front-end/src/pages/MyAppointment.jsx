import React, { useState } from "react";
import { doctors } from "../assets/assets_frontend/assets";
import AppointmentItem from "../components/AppointmentItem";

const MyAppointment = () => {
  const exampleAppointment = [
    {
      doctorInfo: doctors[0],
      appointmentExist: false,
      date: "25, July, 2024",
      time: "8:30 PM",
    },
    {
      doctorInfo: doctors[0],
      
      appointmentExist: true,
      date: "25, July, 2024",
      time: "8:30 PM",
    },
    {
      doctorInfo: doctors[0],
      appointmentExist: true,
      date: "25, July, 2024",
      time: "8:30 PM",
    },
  ];

  return (
    <div className="mt-10 mb-10">
      <p className="text-md text-gray-600 font-bold border-b pb-2">
        My Appointments
      </p>

      <div className="flex flex-col gap-2">
        {exampleAppointment.map((appointment) => (
          <div>
            <AppointmentItem
              name={appointment.doctorInfo.name}
              speciality={appointment.doctorInfo.speciality}
              addressLine1={appointment.doctorInfo.address.line1}
              addressLine2={appointment.doctorInfo.address.line2}
              date={appointment.date}
              time={appointment.time}
              appointmentExist={appointment.appointmentExist}
              image={appointment.doctorInfo.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointment;
