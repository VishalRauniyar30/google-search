// Routerer.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Results from './Results';

const Routerer = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/search" />} />
    <Route path="/search" element={<Results />} />
    {/* <Route path="/images" element={<Results />} /> */}
    <Route path="/news" element={<Results />} />
    {/* <Route path="/videos" element={<Results />} /> */}
  </Routes>
);

export default Routerer;
