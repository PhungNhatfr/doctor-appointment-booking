import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {toast} from 'react-toastify';


export const AdminContext = createContext();

const AdminContextProvider = (props) => {

  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const navigate = useNavigate();

  const [tokenAdmin, setTokenAdmin] = useState("");
  const [doctors, setDoctors] = useState([]);
  const [patients, setPatients] = useState([]);
  const [appointments, setAppointments] = useState([]);
  
  const getDoctors = async () => {
    try {
      const { data } = await axios.post(backendUrl + '/api/information/list-doctor', {});
      
      if (data.success) {
        setDoctors(data.doctors);
      } else {
        toast.error(data.message, {autoClose: 1000})
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  const listPatients = async (tokenAdmin) => {
    try {
      
      const { data } = await axios.post(backendUrl + '/api/information/list-patients', {}, { headers: { token: tokenAdmin } });
      
      if (data.success) {
          setPatients(data.patients)
      }
      
    } catch (error) {
      console.log(error)
    }
  }
  
  const listAllAppointments = async (tokenAdmin) => {
  
    try {
      
     const { data } = await axios.post(backendUrl + '/api/appointment/get-all-appointments', {}, { headers: { token: tokenAdmin } });
      
      if (data.success) {
        setAppointments(data.appointments);
      } else {
        toast.error(data.message, { autoClose: 1000 });
      }
      
    } catch (error) {
      console.log(error)
    }
    
  }
  
  useEffect(() => {
    if (localStorage.getItem("tokenAdmin")) {
      setTokenAdmin(localStorage.getItem("tokenAdmin"));
      listAllAppointments(tokenAdmin)
    }
  }, [tokenAdmin])
  
  useEffect(() => {
    getDoctors()
  },[])
  
  
  

  const value = {
    tokenAdmin, setTokenAdmin, backendUrl,
    navigate,
    doctors, setDoctors,
    listPatients, patients,
    appointments, setAppointments, listAllAppointments,
  }

  return (
    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  )
}

export default AdminContextProvider