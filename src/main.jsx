import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
// Import any other components if necessary
import './index.css'; // Adjust according to your CSS file location

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      {/* Add additional routes here */}
    </Routes>
  </Router>
);
