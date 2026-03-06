import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';

export const UserContext = createContext();

const UserContextProvider = (props) => {

    const backendUrl = process.env.REACT_APP_BACKEND_URL;
    const [token, setToken] = useState("");
    const [userData, setUserData] = useState("");

    const getToken = (token) => {
        if (!token && localStorage.getItem('token')) {
            setToken(localStorage.getItem("token"))
        }
    }

    const getUserData = async (token) => {
        try {
            const result = await axios.post(backendUrl + '/api/information/get-user', {}, { headers: {token} });
            if (result.data.success) {
                setUserData(result.data.userData)
                
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getToken(token)
    }, [])
    
    useEffect(() => {
        if (token) {
            getUserData(token)
            
        }
    }, [token])

    const value = {
        token, setToken, backendUrl,
        userData, setUserData, getUserData,


    }

    return (
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider