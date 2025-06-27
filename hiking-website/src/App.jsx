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

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <div
        className="h-[80vh]"
        style={{
          backgroundImage: `url(${Hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navbar />

        <HeroSection />
      </div> */}

      <video 
        className="  videocss h-[90%] absolute top-0 left-0 w-screen  object-cover"
        src={video} // ✅ adjust path to your video
        autoPlay
        loop
        muted
       
      />

      <div className="relative z-10 text-white">
        <Navbar  />
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
      <CopyRight />
    </>
  );
}

export default App;
