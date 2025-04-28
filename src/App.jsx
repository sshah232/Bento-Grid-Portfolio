import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Contact from "./components/Contact";
import ModularHome from "./components/ModularHome";
import { SpeedInsights } from "@vercel/speed-insights/react";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-black text-white min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<ModularHome />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/1" element={<Home />} />
          </Routes>
        </div>
        <Footer />
        <SpeedInsights />
      </div>
    </Router>
  );
}

export default App;
