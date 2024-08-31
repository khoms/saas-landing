import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Feature from "./pages/landing/sections/Feature";
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
    </>
  );
}

export default App;
