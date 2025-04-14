import React from "react";
import Navbar from "../../Navbar/Navbar";
import heroBanner from "../../../assets/hero_banner.jpg";
import heroTitle from "../../../assets/hero_title.png";
import playIcon from "../../../assets/play_icon.png";
import infoIcon from "../../../assets/info_icon.png";
import TitleCards from "../../TitleCards/TitleCards";
import Footer from "../../Footer/Footer";

const Home = () => {
  return (
    <div className="">
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative ">
        <img
          src={heroBanner}
          alt="Banner"
          className="w-full [mask-image:linear-gradient(to_right,_transparent,_black_75%)] [-webkit-mask-image:linear-gradient(to_right,_transparent,_black_75%)]"
        />
        <div className="absolute w-full pl-[6%] bottom-0">
          <img src={heroTitle} alt="Hero" className="w-[90%] max-w-md mb-6" />
          <p className="max-w-[700px] mb-5">
            Discovering his ties to a secret ancient order, young man living in
            modern Istanbul embarks on a quest to save the city from an immortal
            enemy.
          </p>
          <div className="flex gap-3 mb-10">
            <button className="py-2 px-5 inline-flex items-center gap-2 text-black font-semibold rounded cursor-pointer bg-white hover:bg-[#ffffffbf]">
              <img src={playIcon} alt="" className="w-6" />
              Play
            </button>
            <button className="py-2 px-5 inline-flex items-center gap-2 font-semibold rounded cursor-pointer bg-[#6d6d6eb3] hover:bg-[#6d6d6e66]">
              <img src={infoIcon} alt="" className="w-6" />
              More Info
            </button>
          </div>

          {/* Title Cards Section */}
          <TitleCards />
        </div>
      </div>

      {/* Extra card  */}
      <div className="pl-[6%]">
        <TitleCards title={"Blockbuster Movies"} />
        <TitleCards title={"Only on Netflix"} />
        <TitleCards title={"Upcoming"} />
        <TitleCards title={"Top Picks for You"} />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
