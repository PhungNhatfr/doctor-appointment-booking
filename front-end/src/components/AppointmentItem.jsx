import React, { useState } from "react";
import { assets } from "../assets/assets_frontend/assets";

const AppointmentItem = ({
  name,
  speciality,
  addressLine1,
  addressLine2,
  date,
  time,
  image,
  appointmentExist,
}) => {
  const [showMethodePayment, setShowMethodePayment] = useState(false);

  return (
    <div className="flex flex-row justify-between border-b-2 pb-5 items-end">
      <div className="flex flex-row gap-4 my-2 items-center w-2/5">
        <div className="bg-[#EAEFFF]">
          <img
            className="w-full sm:w-32 lg:w-40"
            src={image}
            alt="doctor-image"
          />
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <p className="text-md font-bold">{name}</p>
            <p className="text-sm">{speciality}</p>
          </div>
          <div className="flex flex-col gap-1 text-gray-500">
            <p className="text-sm font-bold">Address</p>
            <div className="flex flex-col">
              <p className="text-sm">{addressLine1}</p>
              <p className="text-sm">{addressLine2}</p>
            </div>
          </div>
          <div className="flex flex-row text-gray-500 text-sm">
            <p className="font-bold">Date & Time: </p>
            <p>
              {date} | {time}
            </p>
          </div>
        </div>
      </div>

      {/* Button */}
      {appointmentExist ? (
        <div className="w-1/6 flex flex-col gap-2">
          {showMethodePayment ? (
            <div className="w-full flex flex-col gap-2 items-center">
              <div className="flex items-center justify-center w-full h-full border border-gray-600 rounded-md py-2  cursor-pointer hover:bg-[#ececf3] hover:text-white hover:border-[#5F6FFF]">
                <img
                  className="w-12 h-5 object-contain"
                  src={assets.stripe_logo}
                  alt="stripe-logo"
                />
              </div>
              <div className=" flex items-center justify-center border w-full h-full border-gray-600 rounded-md py-2  cursor-pointer hover:bg-[#ececf3] hover:text-white hover:border-[#5F6FFF]">
                <img
                  className="w-12 h-5 object-contain"
                  src={assets.razorpay_logo}
                  alt="razorpay-logo"
                />
              </div>
            </div>
          ) : (
            <div
              onClick={() => setShowMethodePayment(true)}
              className="border border-gray-600  text-sm rounded-md py-2 text-center cursor-pointer hover:bg-[#5F6FFF] hover:text-white hover:border-[#5F6FFF]"
            >
              <p>Pay here</p>
            </div>
          )}

          <div className="border border-gray-600  text-sm rounded-md py-2 text-center cursor-pointer hover:bg-[#eb103f] hover:text-white hover:border-[#eb103f]">
            <p>Cancel Appointment</p>
          </div>
        </div>
      ) : (
        <div className="w-1/6">
          <div className="border w-full text-sm rounded-md py-2 text-center cursor-pointer bg-white text-[#eb103f] border-[#eb103f]">
            <p>Appointment cancelled</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentItem;
