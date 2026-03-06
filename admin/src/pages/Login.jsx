import axios from "axios";

import React, { useContext, useState } from "react";
import { toast } from "react-toastify";

import { AdminContext } from "../context/AdminContext";
import { DoctorContext } from "../context/DoctorContext";

const Login = () => {
  const { backendUrl, tokenAdmin, setTokenAdmin, navigate } = useContext(AdminContext);
  const { tokenDoctor, setTokenDoctor } = useContext(DoctorContext);

  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState("Admin");

  const onSubmitHandler = async (event) => {
    
    event.preventDefault();

    if (state === "Admin") {
      try {
        const response = await axios.post(backendUrl + "/api/user/admin-login", {
          email,
          password,
        });

        if (response.data.success) {
          setTokenAdmin(response.data.token);
          toast.success("Login successfully!", { autoClose: 1000 });
          localStorage.setItem("tokenAdmin", response.data.token);
          navigate('/admin-dashboard');
        } else {
          toast.error(response.data.message, { autoClose: 1000 });
        }
      } catch (error) {
        console.log(error);
        toast.error(error.message, { autoClose: 1000 });
      }
    } else {
      
      try {
        const response = await axios.post(backendUrl + "/api/user/doctor-login", {
          email,
          password,
        });

        if (response.data.success) {
          setTokenDoctor(response.data.token);
          toast.success("Login successfully!", { autoClose: 1000 });
          localStorage.setItem("tokenDoctor", response.data.token);
          navigate('/doctor-dashboard')
        } else {
          toast.error(response.data.message, { autoClose: 1000 });
        }
      } catch (error) {
        console.log(error);
        toast.error(error.message, { autoClose: 1000 });
      }
    }
  };

  return (
    <div className=" w-full flex flex-row justify-center mb-20 mt-20">
      <div className=" text-gray-700 flex flex-col gap-4 border border-gray-100 shadow-md shadow-gray-300 rounded-xl sm:w-1/3 mt-20 mb-10">
        <div className="flex flex-col mt-8 ml-8 gap-5">
          <p className="text-2xl font-bold">Login</p>
          <p className="text-sm ">Login as {state}</p>
        </div>

        <form
          onSubmit={onSubmitHandler}
          className="flex flex-col gap-3 mt-3 ml-8 mr-8"
        >
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-500">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className=" pl-3 border border-gray-500 rounded-md h-10"
              type="email"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-500">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className=" pl-3 border border-gray-500 rounded-md h-10"
              type="password"
            />
          </div>

          <button className=" mt-3 border bg-[#5F6FFF] h-10 rounded-md text-sm text-white cursor-pointer">
            Log In
          </button>
        </form>

        <div className="flex flex-row gap-1 text-sm ml-8 mt-3 mb-8">
          <p>{state === "Admin" ? "Login as Doctor ?" : "Login as Admin ?"}</p>
          <p
            onClick={() =>
              state === "Admin" ? setState("Doctor") : setState("Admin")
            }
            className="underline text-[#5F6FFF] cursor-pointer"
          >
            Click here
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
