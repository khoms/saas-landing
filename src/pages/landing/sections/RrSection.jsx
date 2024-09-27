import React from "react";
import SocialMediaCard from "../../../components/card/SocialMediaCard";
import bgSocialMedia from "../../../assets/images/bg-socialmedia.webp";
import bgSocialMediaSm from "../../../assets/images/bg-socialmedia-sm.webp"; 
const RrSection = () => {
  return (
    <div className="relative w-full  flex items-center justify-center overflow-hidden ">
      {/* Background image */}
      <picture>
        <source media="(max-width: 680px)" srcSet={bgSocialMediaSm} />
        <img
          src={bgSocialMedia}
          alt="Social Media Background"
          className="absolute inset-0 w-full h-full object-fill sm:object-cover 2xl:object-fill object-center z-0"
        />
      </picture>

      {/* Card container */}
      <div className="relative z-10 pt-40 pb-64 sm:py-72 text-white text-center max-w-[900px] px-5">
        <div className="font-bold text-[32px] md:text-5xl mb-16">
          Integrated with Social Media
        </div>
        <div className="flex flex-col gap-10 md:gap-6 md:flex-row">
          <SocialMediaCard />
          <SocialMediaCard />
          <SocialMediaCard />
        </div>
      </div>
    </div>
  );
};

export default RrSection;
