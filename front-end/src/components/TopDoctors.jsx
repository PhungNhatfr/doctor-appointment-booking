import React, { useEffect, useState } from "react";
import { doctors } from "../assets/assets_frontend/assets";
import DoctorItem from "./DoctorItem";
import Title from "./Title";

const TopDoctors = () => {
  const [displayDoctor, setDisplayDoctor] = useState(10);
  const [displayAll, setDisplayAll] = useState(false);

  const topDoctors = doctors.slice(0, displayDoctor);

  useEffect(() => {
    if (displayAll) {
      setDisplayDoctor(doctors.length);
    } else {
        setDisplayDoctor(10)
    }
  }, [displayAll]);

  return (
    <div className="flex flex-col justify-center items-center">
      <Title
        title="Top Doctors to Book"
        content="Simply browse through our extensive list of trusted doctors."
      />
      <div className="mt-10 flex flex-row gap-8 flex-wrap justify-between">
        {topDoctors.map((doctor) => (
          <DoctorItem
            name={doctor.name}
            image={doctor.image}
            speciality={doctor.speciality}
          />
        ))}
      </div>

      <div onClick={() => setDisplayAll(!displayAll)} className="flex justify-center items-center rounded-3xl bg-gray-200 w-36 h-10 mt-10 cursor-pointer hover:bg-gray-300 transition-all">
              {  !displayAll ?  <p className="text-sm text-gray-600">more</p> : <p className="text-sm text-gray-600">less</p>}
      </div>
    </div>
  );
};

export default TopDoctors;
