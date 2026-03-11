import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets } from "../assets/assets_frontend/assets";
import RelatedDoctor from "../components/RelatedDoctor";
import { UserContext } from "../context/userContext";

const Appointment = () => {
  const { token ,doctors, handleSubmitAppointment, getDoctorById, doctorData, setDoctorData } = useContext(UserContext);

  const { doctorId } = useParams();
  const [selectedDay, setSelectedDay] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState();

  const dayOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const timeOfTheDay = ["8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"];

  const [arrayDays, setArrayDays] = useState([]);
  const [currentWeekStart, setCurrentWeekStart] = useState(new Date());

  const today = new Date();

  const formatSplotDate = (date) => {
    return `${date.getDate()}_${date.getMonth() + 1}_${date.getFullYear()}`;
  };
  
  const splotDate = formatSplotDate(selectedDay);

  // Find the day in the week from mon to sun contain currentDay
  const getDaysOfWeek = (currentDay) => {
    let days = [];
    let tempDate = new Date(currentDay);
    let dayIdx = tempDate.getDay();
    let diff = tempDate.getDate() - dayIdx + (dayIdx === 0 ? -6 : 1);
    tempDate.setDate(diff);
    tempDate.setHours(0, 0, 0, 0);
    for (let i = 0; i < 7; i++) {
      days.push(new Date(tempDate));
      tempDate.setDate(tempDate.getDate() + 1);
    }

    return days;
  };

  const handlePrevWeek = () => {
    const prev = new Date(currentWeekStart);
    prev.setDate(prev.getDate() - 7);
    setCurrentWeekStart(prev);
  };

  const handleNextWeek = () => {
    const next = new Date(currentWeekStart);
    next.setDate(next.getDate() + 7);
    setCurrentWeekStart(next);
  };

  const daysOfWeek = getDaysOfWeek(currentWeekStart);

  

  useEffect(() => {
   getDoctorById(doctorId)
  }, [doctorId]);

  useEffect(() => {
    console.log(JSON.parse(doctorData?.schedule || "{}"));
    console.log("Selected Day:", selectedDay);
    console.log("Selected Time: ", selectedTime);
    console.log("Booked: ", doctorData?.schedule_booked)
  });

  return doctorData ? (
    <div className="mt-10 mb-20">
      <div className="grid grid-rows-2 grid-cols-4 h-[700px] gap-2">
        <div className="col-start-1 row-start-1 bg-[#5F6FFF] rounded-xl w-full aspect-[5/6] overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={doctorData.image ? doctorData.image : assets.upload_area}
            alt="doctor-image"
          />
        </div>

        <div className="col-start-2 col-end-5 row-start-1 border rounded-xl pt-8 px-6 flex flex-col justify-between gap-3 pb-10">
          <div className="flex flex-row items-center gap-2">
            <p className="text-3xl font-bold ">{doctorData.name}</p>
            <img
              className="w-5"
              src={assets.verified_icon}
              alt="verified-icon"
            />
          </div>

          <div className="flex flex-row gap-2 items-center text-sm">
            <p>
              {doctorData.degree} - {doctorData.speciality}
            </p>

            <div className=" flex  border rounded-3xl border-gray-500 text-gray-500 text-sm w-20 h-8 items-center justify-center">
              <p className="text-center">{doctorData.experience}</p>
            </div>
          </div>

          <div className="flex flex-row gap-2 items-center font-bold text-sm">
            <p>About</p>
            <img src={assets.info_icon} alt="info-icon" />
          </div>

          <p className="text-sm">{doctorData.about_me}</p>

          <p>Appointment Fee: ${doctorData.fees}</p>
        </div>

        {/* ---------------------------Booking slot-------------------------------- */}

        <div className="col-start-2 col-end-5 row-start-2 mt-5">
          <p>Booking slots</p>

          {/* --------------Day------------- */}

          <div className="flex flex-row gap-5 mt-5 items-center">
            <div onClick={() => handlePrevWeek()}>
              <img
                src={assets.dropdown_icon}
                className="w-5 rotate-90 cursor-pointer hover:scale-125 transition-all duration-75 "
              />
            </div>
            {daysOfWeek.map((date, index) => {
              const day = new Date(date);
              day.setHours(0, 0, 0, 0);
              const date_appointment = formatSplotDate(new Date(date));

              const tempToday = new Date(today);
              tempToday.setHours(0, 0, 0, 0);
              
              const display = day < tempToday ? false : true 
              
              const active = selectedDay ?  (dayOfTheWeek[selectedDay.getDay()] === dayOfTheWeek[day.getDay()] ? true : false) : false

              return (
                <div
                  onClick={() => {
                    if (!display) return
                    setSelectedDay(day)
                    setSelectedTime(null)
                  }}
                  key={index}
                  className={`flex flex-col justify-center items-center gap-3 border rounded-full w-16 py-5 font-bold ${
                    !display ? "text-gray-500" : "cursor-pointer hover:bg-[#5F6FFF] hover:text-white "
                  } ${active ? "bg-[#5F6FFF] text-white" : ""}`}
                >
                  <p>{dayOfTheWeek[day.getDay()]}</p>
                  <p>{new Date(date).getDate()}</p>
                </div>
              );
            })}
            <div onClick={() => handleNextWeek()}>
              <img
                src={assets.dropdown_icon}
                className="w-5 -rotate-90 cursor-pointer hover:scale-125 transition-all duration-75"
              />
            </div>
          </div>

          {/* ----------Time------------ */}

          <div className="flex flex-row overflow-x-auto scroll-smooth snap-x gap-2 mt-5 pb-3">
            {timeOfTheDay.map((time) => {
              
              const date = new Date(selectedDay);
              const day = dayOfTheWeek[date.getDay()]
              let display = (JSON.parse(doctorData?.schedule)?.[day]?.includes(time) ?? false)
              
              const booked_slot = doctorData?.schedule_booked[formatSplotDate(date)] || [];
              
              if (booked_slot.includes(time)) {
                display = false;
              }
              
              return (
                <div
                  onClick={() => {
                     if (!display) return;
                    setSelectedTime((prev) => (prev !== time ? (time) : null));
                  }}
                  key={time}
                  className={`flex flex-shrink-0 items-center justify-center ${
                    display
                      ? "hover:bg-[#5F6FFF] hover:text-white cursor-pointer text-black border-gray-500"
                      : "text-gray-400 border-gray-300"
                  }  border w-24 h-10 rounded-full text-center  snap-start ${
                    time === selectedTime && display ? "bg-[#5F6FFF] text-white" : ""
                  }`}
                >
                  <p>{`${time}:00`} </p>
                </div>
              );
            })}
          </div>

          <button type="button" onClick={() => handleSubmitAppointment(token, doctorData._id, splotDate, selectedTime)} className="border rounded-full bg-[#5F6FFF] w-64 h-14 flex justify-center items-center mt-5 text-white cursor-pointer">
            Book an appointment
          </button>
        </div>
      </div>

      <RelatedDoctor />
    </div>
  ) : (
    ""
  );
};

export default Appointment;
