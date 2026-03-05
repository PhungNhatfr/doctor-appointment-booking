
import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';


import Sidebar from './components/Sidebar';
import AdminDashBoard from './pages/adminPage/AdminDashBoard';
import AdminAppointment from './pages/adminPage/AdminAppointment';
import AddDoctor from './pages/adminPage/AddDoctor';
import DoctorList from './pages/adminPage/DoctorList';
import DoctorDashBoard from './pages/doctorPage/DoctorDashBoard';
import DoctorAppointments from './pages/doctorPage/DoctorAppointments';
import PersonalInformation from './pages/doctorPage/PersonalInformation';
import Login from './pages/Login';

import { useContext} from 'react';
import { AdminContext } from './context/AdminContext';
import { DoctorContext } from './context/DoctorContext';


function App() {

  const { tokenAdmin, setTokenAdmin } = useContext(AdminContext);
  const { tokenDoctor, setTokenDoctor } = useContext(DoctorContext);

  const isAuthenticated = tokenAdmin || tokenDoctor;
  
  
  return (
    <div className="flex flex-col min-h-screen">
      <ToastContainer />

      {isAuthenticated && <NavBar />}

      <div className='flex flex-row w-full'>
        {isAuthenticated && <Sidebar className="w-full" />}
        <main className="flex-grow min-h-screen bg-[#F2F3FF]">
          <Routes>
            {/* 1. Nếu CHƯA ĐĂNG NHẬP */}
            {!isAuthenticated && (
              <>
                <Route path="/login" element={<Login />} />
                {/* Bất kỳ đường dẫn nào khác khi chưa login đều bị đẩy về /login */}
                <Route path="*" element={<Navigate to="/login" />} />
              </>
            )}

            {/* 2. Nếu là ADMIN */}
            {tokenAdmin && (
              <>
                <Route path="/admin-dashboard" element={<AdminDashBoard />} />
                <Route path="/admin-appointments" element={<AdminAppointment />} />
                <Route path="/admin-add-doctor" element={<AddDoctor />} />
                <Route path="/admin-doctor-list" element={<DoctorList />} />
                {/* Nếu Admin vào trang chủ "/" -> Tự động đẩy vào dashboard */}
                <Route path="/" element={<Navigate to="/admin-dashboard" />} />
              </>
            )}

            {/* 3. Nếu là BÁC SĨ */}
            {tokenDoctor && (
              <>
                <Route path="/doctor-dashboard" element={<DoctorDashBoard />} />
                <Route path="/doctor-appointments" element={<DoctorAppointments />} />
                <Route path="/doctor-personal-information" element={<PersonalInformation />} />
                <Route path="/" element={<Navigate to="/doctor-dashboard" />} />
              </>
            )}

            
          </Routes>
        </main>
      </div>

      {isAuthenticated && <Footer />}
    </div>
  );
}

export default App;