import { Routes, Route } from "react-router-dom";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ScrollToHash from "@/components/ScrollToHash";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Work from "@/pages/Work";
import Faq from "@/pages/Faq";
import Contact from "@/pages/Contact";

export default function App() {
  return (
    <>
      <ScrollToHash />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/work" element={<Work />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <BackToTop />
    </>
  );
}
