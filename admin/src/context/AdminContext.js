import React, { createContext, useState } from 'react'
import { useNavigate } from "react-router-dom";


export const AdminContext = createContext();

const AdminContextProvider = (props) => {

  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const navigate = useNavigate();

  const [tokenAdmin, setTokenAdmin] = useState("");
  

  const value = {
    tokenAdmin, setTokenAdmin, backendUrl,
    navigate
  }

  return (
    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  )
}

export default AdminContextProvider