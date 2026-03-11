import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets_frontend/assets";
import { UserContext } from "../context/userContext";
import DoctorItem from "./DoctorItem";
import Title from "./Title";

const TopDoctors = () => {
  
  const { doctors } = useContext(UserContext);
  
  const [displayDoctor, setDisplayDoctor] = useState(10);
  const [displayAll, setDisplayAll] = useState(false);
  const [displayButton, setDisplayButton] = useState(false);
  
  
  const topDoctors = doctors?.slice(0, displayDoctor) || [];

  useEffect(() => {
    
    if (doctors && doctors.length > 0) {
      if (displayAll) {
        setDisplayDoctor(doctors.length - 1)
      } else {
        setDisplayDoctor(doctors.length > 10 ? 10 : doctors.length)
      }
      setDisplayButton(doctors.length > 10)      
    }
  }, [displayAll, doctors]);
  
  useEffect(() => {
    if (doctors.length > 10) {
      setDisplayButton(false)
    }
  }, [doctors])

  return (
    <div className="flex flex-col justify-center items-center">
      <Title
        title="Top Doctors to Book"
        content="Simply browse through our extensive list of trusted doctors."
      />
      <div className="mt-10 w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {topDoctors.map((doctor) => (
          <DoctorItem
            _id={doctor._id}
            name={doctor.name}
            image={doctor.image ? doctor.image : assets.upload_area }
            speciality={doctor.speciality}
          />
        ))}
      </div>

      {displayButton && <div
        onClick={() => setDisplayAll(!displayAll)}
        className="flex justify-center items-center rounded-3xl bg-gray-200 w-36 h-10 mt-10 cursor-pointer hover:bg-gray-300 transition-all"
      >
        { (!displayAll ? (
          <p className="text-sm text-gray-600">more</p>
        ) : (
          <p className="text-sm text-gray-600">less</p>
        ))}
      </div>}
    </div>
  );
};

export default TopDoctors;
