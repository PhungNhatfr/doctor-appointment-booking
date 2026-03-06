import React, { useContext, useState } from "react";
import { assets, timeSlots, daysOfTheWeeks } from "../../assets_admin/assets";
import { AdminContext } from "../../context/AdminContext";
import axios from "axios";
import { toast } from "react-toastify";

const AddDoctor = () => {
  const { backendUrl, tokenAdmin } = useContext(AdminContext);

  const [image, setImage] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [education, setEducation] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [experience, setExperience] = useState("");
  const [fees, setFees] = useState("");
  const [about_me, setAbout_me] = useState("");
  const [scheduleSelected, setScheduleSelected] = useState({
    Mon: [],
    Tue: [],
    Wed: [],
    Thu: [],
    Fri: [],
    Sat: [],
    Sun: [],
  });

  const removeDoctorData = () => {
    setName("");
    setEmail("");
    setPassword("");
    setSpeciality("");
    setEducation("");
    setAddress1("");
    setAddress2("");
    setExperience("");
    setFees("");
    setAbout_me("");
    setScheduleSelected({
      Mon: [],
      Tue: [],
      Wed: [],
      Thu: [],
      Fri: [],
      Sat: [],
      Sun: [],
    });
    setActiveDay("Mon");
    setImage(false)
  };

  const onSubmitHandler = async (e) => {
    
    e.preventDefault();

    try {
      const formDoctorData = new FormData();

      formDoctorData.append("name", name);
      formDoctorData.append("email", email);
      formDoctorData.append("password", password);
      formDoctorData.append("speciality", speciality);
      formDoctorData.append("education", education);
      formDoctorData.append("address1", address1);
      formDoctorData.append("address2", address2);
      formDoctorData.append("experience", experience);
      formDoctorData.append("fees", fees);
      formDoctorData.append("about_me", about_me);
      formDoctorData.append("schedule", JSON.stringify(scheduleSelected));

      if (image) {
        formDoctorData.append("image", image);
      }

      
      const result = await axios.post(
        backendUrl + "/api/information/add-doctor",
        formDoctorData,
        { headers: { token: tokenAdmin } }
      );

      if (result.data.success) {
        toast.success(result.data.message, { autoClose: 1000 });
        removeDoctorData();
      } else {
        toast.error(result.data.message, { autoClose: 1000 });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [activeDay, setActiveDay] = useState("Mon");

  const toggleSlot = (slot) => {
    setScheduleSelected((prev) => ({
      ...prev,
      [activeDay]: prev[activeDay].includes(slot)
        ? prev[activeDay].filter((s) => s !== slot)
        : [...prev[activeDay], slot],
    }));
  };

  return (
    <div className=" w-full flex flex-col gap-2 px-5 py-5">
      <p className="text-md">Add Doctor</p>

      <form
        onSubmit={onSubmitHandler}
        className="border border-gray-400 bg-white rounded-md w-3/4 h-full px-5 py-5 flex flex-col gap-3"
      >
        {/* Avatar */}
        <div className="flex flex-row gap-4 items-center cursor-pointer">
          <label htmlFor="image">
            <img
              src={!image ? assets.upload_area : URL.createObjectURL(image)}
              alt="doctor-image"
              className="w-20 h-20 object-cover rounded-full"
            />

            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              id="image"
              hidden
            />
          </label>
          <p className="text-sm ">Upload doctor picture</p>
        </div>

        {/* Info */}
        <div className="grid grid-cols-2 gap-x-10 pt-5 text-gray-600 ">
          {/* Col 1 */}
          <div className="col-start-1 flex flex-col gap-3 ">
            <div className="flex flex-col gap-2 text-sm ">
              <p>Doctor Name</p>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                placeholder="Name"
                className=" text-sm px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="flex flex-col gap-2 text-sm">
              <p>Doctor Email</p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Email"
                className=" text-sm px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="flex flex-col gap-2 text-sm">
              <p>Doctor Password</p>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Password"
                className=" text-sm px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="flex flex-col gap-2 text-sm">
              <p>Experiences</p>
              <input
                onChange={(e) => setExperience(e.target.value)}
                value={experience}
                type="number"
                placeholder="Experience"
                className=" text-sm px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="flex flex-col gap-2 text-sm">
              <p>Fees</p>
              <input
                onChange={(e) => setFees(e.target.value)}
                value={fees}
                type="number"
                placeholder="Fees"
                className=" text-sm px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
          {/* Col 2 */}
          <div className="col-start-2 flex flex-col gap-3 ">
            <div className="flex flex-col gap-2 text-sm ">
              <p>Speciality</p>
              <select
                onChange={(e) => setSpeciality(e.target.value)}
                className=" text-sm px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="General physician">General physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatricians">Pediatricians</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
              </select>
            </div>

            <div className="flex flex-col gap-2 text-sm">
              <p>Education</p>
              <input
                onChange={(e) => setEducation(e.target.value)}
                value={education}
                type="text"
                placeholder="Education"
                className=" text-sm px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="flex flex-col gap-2 text-sm">
              <p>Address</p>
              <input
                onChange={(e) => setAddress1(e.target.value)}
                value={address1}
                type="text"
                placeholder="Address 1"
                className=" text-sm px-3 py-2 border border-gray-300 rounded-md"
              />
              <input
                onChange={(e) => setAddress2(e.target.value)}
                value={address2}
                type="text"
                placeholder="Address 2"
                className=" text-sm px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-sm w-full">
          <p>About me</p>
          <textarea
            onChange={(e) => setAbout_me(e.target.value)}
            value={about_me}
            rows={5}
            placeholder="write about yourself"
            className=" text-sm px-3 py-2 border border-gray-300 rounded-md h-32"
          />
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <p>Schedule</p>

          {/* Line 1: Day */}
          <div className="flex flex-row justify-between gap-3 px-3">
            {daysOfTheWeeks.map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                type="button"
                className={`text-gray-800 text-sm font-bold px-5 py-3 cursor-pointer rounded-full ${
                  activeDay === day ? "bg-blue-500 text-white" : ""
                } `}
              >
                {day}
              </button>
            ))}
          </div>
          {/* Line 2: Time */}
          <div className="flex flex-wrap gap-5 justify-center">
            {timeSlots.map((timeSlot) => (
              <button
                key={timeSlot}
                type="button"
                onClick={() => toggleSlot(timeSlot)}
                className={`rounded-full w-fit px-4 py-2  cursor-pointer text-sm mt-3
${
  scheduleSelected[activeDay].includes(timeSlot)
    ? "bg-[#3945e3] text-white"
    : "bg-[#a2abf9] text-white hover:text-[#eaecff] hover:bg-[#3945e3]"
}`}
              >
                {timeSlot}
              </button>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="rounded-full w-fit px-10 py-2 bg-[#5F6FFF] text-white hover:text-[#5F6FFF] hover:bg-white cursor-pointer text-sm mt-3"
        >
          Add Doctor
        </button>
      </form>
    </div>
  );
};

export default AddDoctor;
