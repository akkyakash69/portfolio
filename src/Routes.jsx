import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from './components/Projects';



const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      {/* <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  );
};

export default AppRoutes;
