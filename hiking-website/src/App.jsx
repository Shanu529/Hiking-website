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
import CopyRight from "./Components/CopyRight";
import video from "../public/images/216058_small.mp4";
import Signin from "./Components/Signin";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     
      <video
        className="  videocss h-[90%] absolute top-0 left-0 w-screen  object-cover"
        src={video} 
        autoPlay
        loop
        muted
      />

      <div className="relative z-10 text-white">
        <Navbar />
        <HeroSection />
      </div>

      <div className="over">
        <Second />
      </div>

      <div className="over">
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
      <CopyRight />
{/* 
      <div className="h-screen w-screen mt-[20%] top-0 left-1/3 justify-center align-middle fixed">
        <Signin />
      </div> */}

    </>
  );
}

export default App;
