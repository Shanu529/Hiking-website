import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "../public/images/Hero.webp";
import HeroSection from "./sections/HeroSection";
import Second from "./sections/Second";
import Third from "./sections/Third";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        className="h-[80vh]"
        style={{
          backgroundImage: `url(${Hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navbar />

        <HeroSection />
      </div>

      <div>
        <Second />
      </div>

      <div>
        <Third />
      </div>
    </>
  );
}

export default App;
