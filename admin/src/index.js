import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import AdminContextProvider from './context/AdminContext';
import DoctorContextProvider from './context/DoctorContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter >
    <AdminContextProvider>
      <DoctorContextProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </DoctorContextProvider>
    </AdminContextProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
