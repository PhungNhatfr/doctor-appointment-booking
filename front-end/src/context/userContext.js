import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';

export const UserContext = createContext();

const UserContextProvider = (props) => {

    const backendUrl = process.env.REACT_APP_BACKEND_URL;
    const [token, setToken] = useState("");
    const [userData, setUserData] = useState("");
    const [doctors, setDoctors] = useState([]);
    const [doctorData, setDoctorData] = useState();
    const [relatedDoctor, setRelatedDoctor] = useState([]);
    const [appointments, setAppointments] = useState([]);
    

    const getToken = (token) => {
        if (!token && localStorage.getItem('token')) {
            setToken(localStorage.getItem("token"))
        }
    }

    const getUserData = async (token) => {
        try {
            const result = await axios.post(backendUrl + '/api/information/get-user', {}, { headers: { token } });
            if (result.data.success) {
                setUserData(result.data.userData)

            }
        } catch (error) {
            console.log(error)
        }
    }

    const listDoctor = async () => {

        try {
            const result = await axios.post(backendUrl + '/api/information/list-doctor', {});
            if (result.data.success) {
                setDoctors(result.data.doctors);
            }
        } catch (error) {
            console.log(error);
        }

    }

    const getDoctorById = async (doctorId) => {

        try {
            const { data } = await axios.post(backendUrl + '/api/information/single-doctor', { doctorId });
            if (data.success) {
                setDoctorData(data.doctor); 
                setRelatedDoctor(getRelatedDoctor(data.doctor, doctors))
            } else {
                toast.error("Can't Find This Doctor", { autoClose: 1000 })
            }
        } catch (error) {
            console.log(error);
        }

    }
    
    const getRelatedDoctor = (doctorData, doctors) => {
        
        const relatedDoctors = doctors?.filter(doctor => doctor.speciality === doctorData.speciality && doctor._id !== doctorData._id);
        
        if (relatedDoctors.length > 5) {
            return relatedDoctors.splice(0,5)
        }
        
        if (relatedDoctors) {
            return relatedDoctors
        }
        
        return []
    }



    const handleSubmitAppointment = async (token, doctorId, splotDate, splotTime) => {

        try {
            const { data } = await axios.post(backendUrl + '/api/appointment/add-appointment', { doctorId, splotDate, splotTime }, { headers: { token } });
            if (data.success) {
                toast.success("Add Appointment Successfully !", { autoClose: 1000 });
                getDoctorById(doctorId);
            } else {
                toast.error(data.message, { autoClose: 1000 })
            }
        } catch (error) {

            console.log(error);

        }

    }
    
    const getUserAppointment = async (token) => {
    
        try {
            const { data } = await axios.post(backendUrl + '/api/appointment/get-user-appointments', {}, { headers: { token } })
            if (data.success) {
                setAppointments(data.appointments);
            } else {
                toast.error(data.message, {autoClose: 1000})
            }
        } catch (error) {
            console.log(error);
        }
    }
    
    const handleCancelAppointment = async (token, appointmentId) => {
    
       try {
        
           const {data} = await axios.post(backendUrl + '/api/appointment/cancel-appointment-user', {appointmentId}, { headers: {token}})
           if (data.success) {
               toast.success(data.message, { autoClose: 1000 })
               getUserAppointment(token)
           } else {
            toast.error(data.message, {autoClose: 1000})
           }
       } catch (error) {
           console.log(error);
       }
    
    }

    useEffect(() => {
        getToken(token)
        listDoctor()
    }, [])

    useEffect(() => {
        if (token) {
            getUserData(token)
            getUserAppointment(token)
        }
    }, [token])
    

    const value = {
        token, setToken, backendUrl,
        userData, setUserData, getUserData,
        listDoctor, doctors, setDoctors, doctorData, setDoctorData,
        relatedDoctor, setRelatedDoctor, getRelatedDoctor,
        appointments, setAppointments, getUserAppointment,
        handleCancelAppointment,
        handleSubmitAppointment,
        getDoctorById,
    }

    return (
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider