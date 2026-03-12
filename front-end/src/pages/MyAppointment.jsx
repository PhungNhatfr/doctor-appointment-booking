import React, { useContext, useEffect, useState } from "react";
import { doctors } from "../assets/assets_frontend/assets";
import AppointmentItem from "../components/AppointmentItem";
import { UserContext } from "../context/userContext";

const MyAppointment = () => {
  const { appointments, setAppointments, getUserAppointments, handleCancelAppointment, token } =
    useContext(UserContext);

  const deformatSplotDate = (dateString) => {
    const [day, month, year] = dateString.split("_").map(Number);

    return new Date(year, month - 1, day);
  };


  useEffect(() => {
    console.log("Appointment: ", appointments);
  }, [appointments]);

  return (
    <div className="mt-10 mb-10">
      <p className="text-md text-gray-600 font-bold border-b pb-2">
        My Appointments
      </p>

      <div className="flex flex-col gap-2">
        {appointments.map((appointment) => {
          
          const deformatDate = deformatSplotDate(appointment.splotDate);
          
          return (<div>
            <AppointmentItem
              token={token}
              appointmentId = {appointment._id}
              name={appointment.doctorData.name}
              speciality={appointment.doctorData.speciality}
              addressLine1={appointment.doctorData.address1}
              addressLine2={appointment.doctorData.address2}
              date={deformatDate.toDateString()}
              time={appointment.splotTime}
              cancelled={appointment.cancelled}
              completed={appointment.completed}
              image={appointment.doctorData.image}
            />
          </div>)
        })}
      </div>
    </div>
  );
};

export default MyAppointment;
