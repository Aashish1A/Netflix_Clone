import React from 'react'
import facebookIcon from "../../assets/facebook_icon.png";
import instagramIcon from "../../assets/instagram_icon.png";
import twitterIcon from "../../assets/twitter_icon.png";
import youtubeIcon from "../../assets/youtube_icon.png";


const Footer = () => {
  return (
    <div className='py-7 px-[4%] max-w-5xl my-0 mx-auto'>
        <div className="flex gap-5 my-9 mx-0">
            <img src={facebookIcon} alt="" className='w-7 cursor-pointer' />
            <img src={instagramIcon} alt="" className='w-7 cursor-pointer' />
            <img src={twitterIcon} alt="" className='w-7 cursor-pointer' />
            <img src={youtubeIcon} alt="" className='w-7 cursor-pointer' />
        </div>
        <ul className='grid grid-cols-[repeat(4,auto)] gap-4 mb-7 list-none'>
            <li>Audio Description</li>
            <li>Help Center</li>
            <li>Gift Cards</li>
            <li>Media Center</li>
            <li>Investor Relations</li>
            <li>Jobs</li>
            <li>Terms of Use</li>
            <li>Privacy</li>
            <li>Legal Notices</li>
            <li>Cookie Preferences</li>
            <li>Corporate Information</li>
            <li>Contact Us</li>
        </ul>
        <p className="text-gray-300 text-[14px]">@ 1997-2025 Netflix, Inc.</p>
    </div>
  )
}

export default Footer