import React from "react";
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/search_icon.svg";
import bellIcon from "../../assets/bell_icon.svg";
import caretIcon from "../../assets/caret_icon.svg";
import profileImg from "../../assets/profile_img.png";

const Navbar = () => {
  return (
    <div className="w-full py-5 px-[6%] flex justify-between fixed text-[14px] bg-gradient-to-b from-[rgba(0,0,0,0.7)] via-[rgba(0,0,0,0.1)] to-transparent z-1">
      <div className=" flex items-center gap-10">
        <img src={logo} alt="logo" className="w-24" />
        <ul className="flex list-none gap-5 cursor-pointer">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className="flex gap-5 items-center">
        <img src={searchIcon} alt="searchIcon" className="w-5 cursor-pointer" />
        <p>Children</p>
        <img src={bellIcon} alt="bellIcon" className="w-5 cursor-pointer" />
        <div className="flex items-center gap-2 cursor-pointer relative group">
          <img src={profileImg} alt="profileIcon" />
          <img src={caretIcon} alt="caretIcon" />
          <div className="absolute top-full right-0 w-max bg-[#191919] py-2 px-4 border-2 underline z-1 hidden group-hover:block">
            <p className="text-[12px] cursor-pointer">Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
