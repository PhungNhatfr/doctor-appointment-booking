import './App.css';
import { Routes, Route } from 'react-router-dom'; 
import NavBar from './components/NavBar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="flex flex-col min-h-screen px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      
      <NavBar />

      
      <main className="flex-grow min-h-screen">
        <Routes>
          
        </Routes>
      </main>
      
      <Footer />

    </div>
  );
}

export default App;