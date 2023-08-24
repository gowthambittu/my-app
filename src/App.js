import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from "./component/NavBar";

function App() {
  return (
    <Router>
      <CssBaseline />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/faq" element={<Faq />} /> */}
      </Routes>
    </Router>
  );
}
export default App;