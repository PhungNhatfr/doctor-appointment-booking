import React, { useEffect, useState } from "react";
import { assets, doctors } from "../assets/assets_frontend/assets";

const Appointment = () => {
  const dayOfTheWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const timeOfTheDay = [
    "8.00",
    "8.30",
    "9.00",
    "9.30",
    "10.00",
    "10.30",
    "11.00",
  ];

  const getSevenDays = () => {
    let today = new Date();
    let arrayDays = [];

    for (let i = 0; i < 7; i++) {
      let tempDate = new Date();
      tempDate.setDate(today.getDate() + i);

      arrayDays.push({
        dayName: dayOfTheWeek[tempDate.getDay()],
        dateNumber: tempDate.getDate(),
        fullDay: tempDate,
      });
    }

    return arrayDays;
  };

  const [arrayDays, setArrayDays] = useState(getSevenDays());

  return (
    <div className="mt-10">
      <div className="grid grid-rows-2 grid-cols-4 h-[700px] gap-2">
        <div className="col-start-1 row-start-1 bg-[#5F6FFF] rounded-xl w-full aspect-[5/6] overflow-hidden">
          <img className="w-full h-full object-cover" src={doctors[0].image} />
        </div>

        <div className="col-start-2 col-end-5 row-start-1 border rounded-xl pt-8 px-6 flex flex-col justify-between gap-3 pb-10">
          <div className="flex flex-row items-center gap-2">
            <p className="text-3xl font-bold ">{doctors[0].name}</p>
            <img className="w-5" src={assets.verified_icon} />
          </div>

          <div className="flex flex-row gap-2 items-center text-sm">
            <p>
              {doctors[0].degree} - {doctors[0].speciality}
            </p>

            <div className=" flex  border rounded-3xl border-gray-500 text-gray-500 text-sm w-20 h-8 items-center justify-center">
              <p className="text-center">{doctors[0].experience}</p>
            </div>
          </div>

          <div className="flex flex-row gap-2 items-center font-bold text-sm">
            <p>About</p>
            <img src={assets.info_icon} />
          </div>

          <p className="text-sm">{doctors[0].about}</p>

          <p>Appointment Fee: ${doctors[0].fees}</p>
        </div>

        <div className="col-start-2 col-end-5 row-start-2 mt-5">
          <p>Booking slots</p>

          <div className="flex flex-row gap-5 mt-5">
            {arrayDays.map((date, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center gap-3 border rounded-full w-16 py-5 font-bold hover:bg-[#5F6FFF] hover:text-white cursor-pointer"
              >
                <p>{date.dayName}</p>
                <p>{date.dateNumber}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-row flex-wrap gap-2 mt-5">
            {timeOfTheDay.map((time) => (
              <div className="flex items-center justify-center text-gray-700 border w-28 h-12 rounded-full text-center  hover:bg-[#5F6FFF] hover:text-white cursor-pointer">
                <p>{time} am</p>
              </div>
            ))}
          </div>
          
          <div className="border rounded-full bg-[#5F6FFF] w-64 h-14 flex justify-center items-center mt-5 text-white">
            <p>Book an appointment</p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Appointment;
