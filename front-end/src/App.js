import './App.css';
import { Routes, Route } from 'react-router';
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

function App() {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      
      
      <NavBar />
      
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/appointment"} element={<Appointment />} />
        <Route path={"/doctors"} element={<Doctors />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/profile"} element={<Profile />} />
        <Route path={"/signup"} element={<SignUp />} />
        <Route path={"/login"} element={<LogIn />} />
        <Route path={"/myappointment"} element={<MyAppointment />} />
      </Routes>
    
    </div>
  );
}

export default App;
