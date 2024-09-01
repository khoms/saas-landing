import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Article from "./pages/landing/sections/Article";
import CTA from "./pages/landing/sections/CTA";
import Feature from "./pages/landing/sections/Feature";
import Footer from "./pages/landing/sections/Footer";
import Hero from "./pages/landing/sections/Hero";
import RrSection from "./pages/landing/sections/RrSection";
import WhySasly from "./pages/landing/sections/WhySasly";

function App() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#1B45B4] to-[#1C2792] text-white min-h-screen">
        <Navbar />
        <Hero />
      </div>
      <WhySasly />
      <Feature />
      <RrSection />
      <Article />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
