import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Clothes from './pages/Clothes'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} /> {/* Landing page */}
          <Route path="/login" element={<Login />} /> {/* Login page */}
          <Route path="/Clothes" element={<Clothes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
