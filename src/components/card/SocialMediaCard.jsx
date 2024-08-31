import facebookIcon from "../../assets/icons/facebook.svg";
import Button from "../button/Button";

const SocialMediaCard = () => {
  return (
    <div className="flex-1 flex flex-col items-center bg-white p-6 rounded-[10px] ">
      <img src={facebookIcon} alt="stats-icon" className="size-16" />
      <div className="space-y-3 mt-6">
        <div className="text-primary font-bold text-2xl leading-110 tracking-tighter ">
          Facebook
        </div>
        <div className="text-grayishText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis risus
          dui faucibus eu.{" "}
        </div>
      </div>
      <div className="mt-6 md:mt-12">
        <Button title="Learn More" size="sm" />
      </div>
    </div>
  );
};

export default SocialMediaCard;
