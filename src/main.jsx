import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css'
import App from './App.jsx'
import 'remixicon/fonts/remixicon.css';

import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx';
import AppRoutes from './Routes.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    
    
    
    </BrowserRouter>
  </StrictMode>,
)
