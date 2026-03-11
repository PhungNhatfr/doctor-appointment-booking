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
            } else {
                toast.error("Can't Find This Doctor", { autoClose: 1000 })
            }
        } catch (error) {
            console.log(error);
        }

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

    useEffect(() => {
        getToken(token)
        listDoctor()
    }, [])

    useEffect(() => {
        if (token) {
            getUserData(token)

        }
    }, [token])


    const value = {
        token, setToken, backendUrl,
        userData, setUserData, getUserData,
        listDoctor, doctors, setDoctors, doctorData, setDoctorData,
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