import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets_frontend/assets";
import { UserContext } from "../context/userContext";
import { toast } from "react-toastify";

const Profile = () => {
  const { userData, backendUrl, token, getUserData, setUserData } = useContext(UserContext);

  const [isEdit, setIsEdit] = useState(false);
   const [image, setImage] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [birthday, setBirthday] = useState("");
 

  const updateDataProfile = async (e) => {
    
    e.preventDefault();
    
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("phone", phone);
      formData.append("address", address);
      formData.append("gender", gender);
      formData.append("birthday", birthday);
      
      if (image) {
        formData.append("avatar", image);
      }
      

      const result = await axios.post(
        backendUrl + "/api/information/update-user",
        formData,
        { headers: {token} }
      );

      if (result.data.success) {
        toast.success("Update Completely", { autoClose: 1000 });
        await getUserData(token);
        setIsEdit(false);
      } else {
        toast.error(result.data.message, { autoClose: 1000 });
      }
      
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    if (userData) {
      setName(userData.name || "");
      setPhone(userData.phone || "");
      setAddress(userData.address || "");
      setGender(userData.gender || "Male");
      setBirthday(userData.birthday || "");
    }
  }, [userData])

  return !isEdit ? (
    <form className="flex flex-col w-full md:w-2/5 mt-10 gap-3 mb-10">
      {/* Avatar */}
      <div className="flex flex-row gap-3 w-1/4">
        <img
          className="w-full rounded-md"
          src={
            !userData.avatar
              ? assets.upload_area
              : userData.avatar
          }
          alt="profile-avatar"
        />
      </div>

      {/* Title Name */}
      <div className="border-b-2 border-gray-300">
        <p className="text-xl font-bold pb-2">{userData.name}</p>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col gap-3 w-2/3">
        <p className="text-sm font-thin border-b-2 w-fit mb-2">
          CONTACT INFORMATION
        </p>

        <div className="grid grid-cols-2 grid-rows-3 gap-x-3 gap-y-3 text-sm text-gray-500">
          {/* Left side */}
          <p className="font-bold w-1/2">Email id:</p>
          <p className="font-bold col-start-1 row-start-2 w-1/2">Phone:</p>
          <p className="font-bold col-start-1 row-start-3 w-1/2">Address:</p>
          {/* Right Side */}
          <p>{userData.email}</p>
          <p className="col-start-2 row-start-2">{userData.phone}</p>
          <p className="col-start-2 row-start-3">{userData.address}</p>
        </div>
      </div>

      {/* Basic Info */}
      <div className="flex flex-col gap-3 w-2/3">
        <p className="text-sm font-thin border-b-2 w-fit mb-2">
          BASIC INFORMATION
        </p>

        <div className="grid grid-cols-2 grid-rows-2 gap-x-3 gap-y-3 text-sm text-gray-500">
          {/* Left side */}
          <p className="font-bold w-1/2">Gender:</p>
          <p className="font-bold col-start-1 row-start-2 w-1/2">Birthday:</p>

          {/* Right Side */}
          <p>{userData.gender}</p>
          <p className="col-start-2 row-start-2">{userData.birthday}</p>
        </div>
      </div>

      {/* Button */}
      <div
        onClick={() => setIsEdit(true)}
        className="cursor-pointer mt-5 border border-[#5F6FFF] rounded-full text-sm w-1/4 hover:text-white hover:bg-[#5F6FFF]"
      >
        <p className="text-center py-2">Edit</p>
      </div>
    </form>
  ) : (
    //-------------------------------------Edit Part---------------
    <form onSubmit={updateDataProfile} className="flex flex-col w-full md:w-2/5 mt-10 gap-3 mb-10">
      {/* Avatar */}
      <label className="flex flex-row gap-3 w-1/4" htmlFor="avatar">
        <img
          className="w-full rounded-md cursor-pointer"
          src={
            !image
              ? (userData.avatar || assets.upload_area)
              : URL.createObjectURL(image)
          }
          alt="profile-avatar"
        />
        <input
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          id="avatar"
          hidden
        />
      </label>

      {/* Title Name */}
      <div className="border-b-2 border-gray-300">
          <input className="text-xl font-bold pb-2 text-black" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder={userData.name} />
      </div>

      {/* Contact Info */}
      <div className="flex flex-col gap-3 w-3/4">
        <p className="text-sm font-thin border-b-2 w-fit mb-2">
          CONTACT INFORMATION
        </p>

        <div className="grid grid-cols-2 grid-rows-3 gap-x-3 gap-y-3 text-sm text-gray-500">
          {/* Left side */}
          <p className="font-bold w-1/2">Email id:</p>
          <p className="font-bold col-start-1 row-start-2 w-1/2">Phone:</p>
          <p className="font-bold col-start-1 row-start-3 w-1/2">Address:</p>
          {/* Right Side */}
          <p>{userData.email}</p>
          <input className="col-start-2 row-start-2" type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={userData.phone ? userData.phone : "Type your phone number"} />
          <input className="col-start-2 row-start-3" type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder={userData.address ? userData.address : "Type your address"} />
        </div>
      </div>

      {/* Basic Info */}
      <div className="flex flex-col gap-3 w-2/3">
        <p className="text-sm font-thin border-b-2 w-fit mb-2">
          BASIC INFORMATION
        </p>

        <div className="grid grid-cols-2 grid-rows-2 gap-x-3 gap-y-3 text-sm text-gray-500">
          {/* Left side */}
          <p className="font-bold w-1/2">Gender:</p>
          <p className="font-bold col-start-1 row-start-2 w-1/2">Birthday:</p>

          {/* Right Side */}
            <select className="px-2 py-2" onChange = {(e) => setGender(e.target.value)}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
         <input className="col-start-2 row-start-2" type="date" value={birthday} onChange={(e) => setBirthday(e.target.value)}  />
        </div>
      </div>

      {/* Button */}
        <button
          
        type="submit"
        className="cursor-pointer mt-5 border border-[#5F6FFF] rounded-full text-sm w-1/4 hover:text-white hover:bg-[#5F6FFF] px-3 py-2"
      >
        Save
      </button>
    </form>
  );
};

export default Profile;
