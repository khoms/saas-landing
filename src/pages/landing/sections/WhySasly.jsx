import SocialMediaAndChart from "../../../assets/images/SocialMedia&Chart.webp";
import Button from "../../../components/button/Button";
import ReportCard from "../../../components/card/ReportCard";

const WhySasly = () => {
  return (
    <div className="py-16 md:py-20 w-full flex justify-center font-dm-sans">
      <div className="max-w-[1100px] mb-4 px-5 xl:px-0">
        <div className="mx-auto font-bold text-3xl md:text-5xl text-[#14358A]  w-full md:w-[580px] text-center tracking-tighter leading-105">
          We optimize marketing for business continuity
        </div>

        <div className="my-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-8 md:space-y-16">
            <ReportCard />
            <ReportCard />
          </div>
          <img
            src={SocialMediaAndChart}
            alt="social-media-chart"
            className="w-[300px] h-[350px] lg:w-[562px] lg:h-[597px] hidden md:block"
          />
          <div className="space-y-8 md:space-y-16">
            <ReportCard />
            <ReportCard />
          </div>
        </div>
        <div className=" justify-center hidden md:flex">
          <Button title="Learn More" size="sm" />
        </div>
      </div>
    </div>
  );
};

export default WhySasly;
