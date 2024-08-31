import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./pages/landing/sections/Hero";

function App() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#1B45B4] to-[#1C2792] text-white min-h-screen">
        <Navbar />
        <Hero />
      </div>
    </>
  );
}

export default App;
