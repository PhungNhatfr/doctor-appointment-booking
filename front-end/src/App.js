import './App.css';
import { Routes, Route } from 'react-router-dom'; 
import Home from './pages/Home';
import Appointment from './pages/Appointment';
import Doctors from './pages/Doctors';
import About from './pages/About';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import MyAppointment from './pages/MyAppointment';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="flex flex-col min-h-screen px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      
      <NavBar />
      <ToastContainer />

      
      <main className="flex-grow min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment/:doctorId" element={<Appointment />} /> 
          <Route path="/doctors/:specialityDoctor" element={<Doctors />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/my-appointments" element={<MyAppointment />} />
        </Routes>
      </main>
      
      <Footer />

    </div>
  );
}

export default App;