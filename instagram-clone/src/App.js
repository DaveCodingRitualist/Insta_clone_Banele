import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Explore from './pages/Explore/Explore'; // We'll create this soon
import Profile from './pages/Profile/Profile'; // We'll create this soon
import SignIn from './pages/SignIn/SignIn';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<SignIn />} />
      </Routes>
    </Router>
  );
};

export default App