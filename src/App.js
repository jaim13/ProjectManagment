import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Header';
import Landing from './pages/Landing';
import Login from './pages/Login'; // Import your Login component

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} /> {/* Landing page */}
          <Route path="/login" element={<Login />} /> {/* Login page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
