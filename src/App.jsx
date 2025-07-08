import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import ProjectDetail from './components/ProjectDetail';
import CV from './components/CV';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/proyecto/:id" element={<ProjectDetail />} />
      <Route path="/cv" element={<CV />} />

    </Routes>
  );
}
