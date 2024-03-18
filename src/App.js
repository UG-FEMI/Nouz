import React from "react";
import Navbar from "./components/navbar/Navbar";
import LandPage from "./components/landingpage/LandPage";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <div className="px-[50px]">
        <Navbar />
        <LandPage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
