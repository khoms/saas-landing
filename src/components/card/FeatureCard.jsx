import Button from "../button/Button";

const FeatureCard = ({ image, icon, title, content }) => {
  return (
    <div className="flex flex-col-reverse gap-9 w-full justify-between items-center md:even:flex-row-reverse  md:flex-row">
      <div className="flex flex-col items-center md:items-start ">
        <div className=" inline-block p-4 bg-gradient-to-tr from-[#0097FE] to-[#14358A] rounded-[10px] mb-3">
          <img src={icon} alt="stats-icon" className="size-8" />
        </div>

        <div className="space-y-3 mt-6 w-[480px] text-center md:text-left">
          <div className="text-primary font-bold text-2xl leading-110 tracking-tighter ">
            {title}
          </div>
          <div className="text-grayishText">{content}</div>
        </div>
        <div className="mt-6 md:mt-12">
          <Button title="Learn More" size="sm" />
        </div>
      </div>

      <div className="w-[335px] h-[268px] md:w-[509px] md:h-[406px] ">
        <img src={image} alt="feature-image" className="size-full" />
      </div>
    </div>
  );
};

export default FeatureCard;
