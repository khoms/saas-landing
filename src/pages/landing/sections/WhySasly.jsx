import SocialMediaAndChart from "../../../assets/images/SocialMedia&Chart.png";
import Button from "../../../components/button/Button";
import ReportCard from "../../../components/card/ReportCard";

const WhySasly = () => {
  return (
    <div className="py-20 w-full flex justify-center font-dm-sans">
      <div className="max-w-[1100px] mb-4">
        <div className="mx-auto font-bold text-5xl text-[#14358A]  w-[580px] text-center tracking-tighter leading-105">
          We optimize marketing for business continuity
        </div>

        <div className="my-12 flex justify-between items-center gap-8">
          <div className="space-y-16">
            <ReportCard />
            <ReportCard />
          </div>
          <img
            src={SocialMediaAndChart}
            alt="social-media-chart"
            className="w-[562px] h-[597px]"
          />
          <div className="space-y-16">
            <ReportCard />
            <ReportCard />
          </div>
        </div>
        <div className="flex justify-center">
          <Button title="Learn More" size="sm" />
        </div>
      </div>
    </div>
  );
};

export default WhySasly;
