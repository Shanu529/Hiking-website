import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "../public/images/Hero.webp";
import HeroSection from "./sections/HeroSection";
import Second from "./sections/IntroSec";
import Third from "./sections/FeatureSec";
import PopulerPlace from "./sections/PopulerPlace";
import Moreplace from "./sections/Moreplace";
import Newsletter from "./Components/Newsletter";
import Footer from "./Components/Footer";

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
        <Third
          section="Get accurate GPS locations and directions to every trailhead,
              making your journey easy and stress-free."
          heading="Location Details"
        />
      </div>

      <PopulerPlace heading="Populer Destinations" />
      <Moreplace />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
