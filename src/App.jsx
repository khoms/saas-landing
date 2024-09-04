import React, { lazy, Suspense } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
const Brand = lazy(() => import("./components/sections/Brand"));
const Article = lazy(() => import("./pages/landing/sections/Article"));
const CTA = lazy(() => import("./pages/landing/sections/CTA"));
const Feature = lazy(() => import("./pages/landing/sections/Feature"));
const Footer = lazy(() => import("./pages/landing/sections/Footer"));
const Hero = lazy(() => import("./pages/landing/sections/Hero"));
const RrSection = lazy(() => import("./pages/landing/sections/RrSection"));
const WhySasly = lazy(() => import("./pages/landing/sections/WhySasly"));

function App() {
  return (
    <>
      <div className="w-full  text-white">
        <Navbar />
        <Suspense fallback={<div>Loader comes here....</div>}>
          <Hero />
        </Suspense>
      </div>
      <Suspense fallback={<div>Loader comes here....</div>}>
        <Brand />
        <WhySasly />
        <Feature />
        <RrSection />
        <Article />
        <CTA />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
