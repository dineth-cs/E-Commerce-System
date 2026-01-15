import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register"; // Register පිටුව import කළා
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <div className="bg-white text-gray-800 min-h-screen flex flex-col">
        
        {/* Navbar එක හැම පිටුවකම පෙන්වන්න */}
        <Navbar />
        
        <div className="flex-grow">
          <Routes>
            {/* Home Page Route */}
            <Route path="/" element={<Home />} />
            
            {/* Register Page Route */}
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
        
        {/* Footer එකත් හැම තැනම */}
        <Footer />
        
      </div>
    </Router>
  )
}