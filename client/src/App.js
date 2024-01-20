// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './components/App';
import Header from './components/Header';
import FilesList from './components/FilesList';
import Login from './components/LoginPage'; // Import the Login component
import './App.css';

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route element={<App />} path="/app" />
        <Route element={<FilesList />} path="/list" />
        <Route element={<Login />} path="/" /> {/* Add the Login route */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
