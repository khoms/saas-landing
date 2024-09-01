import SocialMediaCard from "../../../components/card/SocialMediaCard";

const RrSection = () => {
  return (
    <div className="relative w-full py-16 pb-40 md:py-40 flex items-center justify-center ">
      {/* Skewed background */}
      <div className="absolute  inset-0 bg-gradient-to-r from-[#1B45B4] to-[#1C2792] w-full transform -skew-y-6 "></div>
      {/* Card container */}
      <div className="relative z-10 text-white text-center max-w-[900px] px-5">
        <div className="font-bold text-[32px] md:text-5xl mb-16">
          Integrated with Social Media
        </div>
        <div className="flex flex-col gap-10 md:gap-6 md:flex-row ">
          <SocialMediaCard />
          <SocialMediaCard />
          <SocialMediaCard />
        </div>
      </div>
    </div>
  );
};

export default RrSection;
