import React, { createContext, useContext, useEffect, useState } from 'react'
import { AdminContext } from './AdminContext';
import axios from 'axios';
import { toast } from 'react-toastify';

export const DoctorContext = createContext();


const DoctorContextProvider = (props) => {

  const [tokenDoctor, setTokenDoctor] = useState("");
  const [doctorInfo, setDoctorInfo] = useState(null);
  const { backendUrl } = useContext(AdminContext);

  const getToken = (token) => {
    if (!token && localStorage.getItem('tokenDoctor')) {
      setTokenDoctor(localStorage.getItem("tokenDoctor"))
    }
  }

  const getDoctorData = async (token) => {
    try {
      const result = await axios.post(backendUrl + '/api/information/get-doctor',{}, { headers: { token } });

      if (result.data.success) {
        setDoctorInfo(result.data.dataDoctor)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getToken(tokenDoctor)
  }, [])

  useEffect(() => {
    if (tokenDoctor) {
      getDoctorData(tokenDoctor)
    }
  }, [tokenDoctor])
  



  const value = {
    tokenDoctor, setTokenDoctor,
    doctorInfo, setDoctorInfo, getDoctorData
  }

  return (
    <DoctorContext.Provider value={value}>
      {props.children}
    </DoctorContext.Provider>
  )
}

export default DoctorContextProvider