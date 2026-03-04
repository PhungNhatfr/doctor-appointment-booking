import React, { createContext, useContext, useState } from 'react'
import { AdminContext } from './AdminContext';

export const DoctorContext = createContext();


const DoctorContextProvider = (props) => {
    
    const [tokenDoctor, setTokenDoctor] = useState("");
    const { backendUrl } = useContext(AdminContext);
    

    const value = {
        tokenDoctor, setTokenDoctor
    } 
    
  return (
      <DoctorContext.Provider value={value}>
        {props.children}
      </DoctorContext.Provider>
  )
}

export default DoctorContextProvider