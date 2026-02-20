import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import DashBoard from './pages/DashBoard';
import Sidebar from './components/Sidebar';
import AdminDashBoard from './pages/adminPage/AdminDashBoard';
import AdminAppointment from './pages/adminPage/AdminAppointment';
import AddDoctor from './pages/adminPage/AddDoctor';
import DoctorList from './pages/adminPage/DoctorList';
import DoctorDashBoard from './pages/doctorPage/DoctorDashBoard';
import DoctorAppointments from './pages/doctorPage/DoctorAppointments';
import PersonalInformation from './pages/s/PersonalInformation';


function App() {
  return (
    <div className="flex flex-col min-h-screen px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">

      <ToastContainer />
      <NavBar />
      <div className='flex flex-row w-full'>
        <Sidebar className="w-38" />
        <main className="flex-grow min-h-screen">
          <Routes>
            {/* Route for Admin */}
            <Route path="/admin-dashboard" element={<AdminDashBoard />} />
            <Route path="/admin-appointments" element={<AdminAppointment />} />
            <Route path="/admin-add-doctor" element={<AddDoctor />} />
            <Route path="/admin-doctor-list" element={<DoctorList />} />
            {/* Route for Doctor */}
            <Route path="/doctor-dashboard" element={<DoctorDashBoard />} />
            <Route path="/doctor-appointments" element={<DoctorAppointments />} />
            <Route path="/doctor-personal-information" element={<PersonalInformation />} />
          </Routes>
        </main>
      </div>
      <Footer />

    </div>
  );
}

export default App;