import React, { createContext, useEffect, useState } from 'react'

export const UserContext = createContext();

const UserContextProvider = (props) => {
    
    const backendUrl = process.env.REACT_APP_BACKEND_URL;
    const [token, setToken] = useState("");
    
    const getToken = (token) => {
        if (!token && localStorage.getItem('token')) {
            setToken(localStorage.getItem("token"))
        }
    }
    
    useEffect(() => {
        getToken(token)
    }, [])

    const value = {
        token, setToken, backendUrl,

    }

    return (
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider