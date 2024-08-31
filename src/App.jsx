import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./pages/landing/sections/Hero";
import WhySasly from "./pages/landing/sections/WhySasly";

function App() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#1B45B4] to-[#1C2792] text-white min-h-screen">
        <Navbar />
        <Hero />
      </div>
      <WhySasly />
    </>
  );
}

export default App;
