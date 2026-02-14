import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Code from './pages/Code';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import CaseStudies from './pages/CaseStudies';
import CaseStudyDetail from './pages/CaseStudyDetail';

const WORK_REDIRECT_URL = "https://theiamgroup.org/#work";

function WorkRedirect() {
  useEffect(() => {
    window.location.href = WORK_REDIRECT_URL;
  }, []);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="work" element={<WorkRedirect />} />          
          <Route path="code" element={<Code />} />         
          <Route path="about" element={<About />} />
          <Route path="resume" element={<Resume />} />
          <Route path="contact" element={<Contact />} />
          <Route path="case-studies" element={<CaseStudies />} />
          <Route path="case-studies/:slug" element={<CaseStudyDetail />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
