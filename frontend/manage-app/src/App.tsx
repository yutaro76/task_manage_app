import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import User from './components/User';
import Project from './components/Project';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
