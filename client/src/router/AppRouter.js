// AppRouter.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../components/App.js';
import Header from '../components/Header.js';
import FilesList from '../components/FilesList.js';

const AppRouter = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/list" element={<FilesList />} />
        </Routes>
      </div>
    </div>
  </BrowserRouter>
);

export default AppRouter;
