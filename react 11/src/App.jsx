import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Books from './pages/Books';
import Authors from './pages/Authors';
import './index.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/books" element={<Books />} />
          <Route path="/authors" element={<Authors />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
