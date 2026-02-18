import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets, doctors } from "../assets/assets_frontend/assets";
import RelatedDoctor from "../components/RelatedDoctor";

const Appointment = () => {
  const { doctorId } = useParams();
  
  
  const dayOfTheWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const timeOfTheDay = [
    "8.00",
    "8.30",
    "9.00",
    "9.30",
    "10.00",
    "10.30",
    "11.00",
    "11.30",
    "12.00"
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
  const [doctorData, setDoctorData] = useState(false);
  
  const fetchDoctorData = async () => {
    doctors.map((doctor) => {
      if (doctor._id === doctorId) {
        setDoctorData(doctor)
      }
    })
  }
  
  useEffect(() => {
    fetchDoctorData()
  },[doctorId, doctors])

  return doctorData ? (
    <div className="mt-10 mb-20">
      <div className="grid grid-rows-2 grid-cols-4 h-[700px] gap-2">
        <div className="col-start-1 row-start-1 bg-[#5F6FFF] rounded-xl w-full aspect-[5/6] overflow-hidden">
          <img className="w-full h-full object-cover" src={doctorData.image} alt="doctor-image" />
        </div>

        <div className="col-start-2 col-end-5 row-start-1 border rounded-xl pt-8 px-6 flex flex-col justify-between gap-3 pb-10">
          <div className="flex flex-row items-center gap-2">
            <p className="text-3xl font-bold ">{doctorData.name}</p>
            <img className="w-5" src={assets.verified_icon} alt="verified-icon" />
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

          <p className="text-sm">{doctorData.about}</p>

          <p>Appointment Fee: ${doctorData.fees}</p>
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

          <div className="flex flex-row overflow-x-auto scroll-smooth snap-x gap-2 mt-5 pb-3">
            {timeOfTheDay.map((time) => (
              <div className="flex flex-shrink-0 items-center justify-center text-gray-700 border w-24 h-10 rounded-full text-center  hover:bg-[#5F6FFF] hover:text-white cursor-pointer snap-start">
                <p>{time} am</p>
              </div>
            ))}
          </div>
          
          <div className="border rounded-full bg-[#5F6FFF] w-64 h-14 flex justify-center items-center mt-5 text-white cursor-pointer">
            <p>Book an appointment</p>
          </div>
        </div>
      </div>
      
      <RelatedDoctor />
      
    </div>
  ) : "";
};

export default Appointment;
