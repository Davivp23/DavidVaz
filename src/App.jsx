import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import ProjectDetail from './components/ProjectDetail';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/proyecto/:id" element={<ProjectDetail />} />
    </Routes>
  );
}
