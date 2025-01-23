import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.jsx'
import './index.css'
import HomePage from './pages/HomePage.jsx';
import Projects from './pages/Projects.jsx';
import Resume from './pages/Resume.jsx';
import Biography from './pages/Biography.jsx';
import Contact from './pages/Contact.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
      <Route index element={<HomePage />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/biography" element={<Biography />} />
      <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
