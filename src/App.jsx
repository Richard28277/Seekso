import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import Search from './pages/Search.jsx';
import Changelog from './pages/Changelog.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/changelog" element={<Changelog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;