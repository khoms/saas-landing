import ArrowRight from "../../../assets/icons/ArraowRight";
import Button from "../../../components/button/Button";
import dashboardImage from "../../../assets/images/dashboard.png";
import Brand from "../../../components/sections/Brand";

const Hero = () => {
  return (
    <div className="flex justify-center font-dm-sans">
      <div className="flex flex-col items-center mt-20 text-center max-w-[1100px]">
        <div className="font-bold text-[60px]  leading-none">
          <div>Advanced analytics to grow</div>
          your business
        </div>
        <div className="max-w-[462px] text-lg text-[#E6E8EC] mt-8 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut id
          nisl tellus rhoncus, imperdiet
        </div>
        <div className="my-16 flex justify-center gap-4">
          <button className="bg-gradient-to-r from-[#6A36FF] to-[#AC5FE6] px-10 py-5 rounded-[10px] font-bold text-lg">
            Start Now
          </button>
          <Button
            varient="outlined"
            title={
              <div className="flex gap-2 items-center">
                <div>Trial</div>
                <ArrowRight />
              </div>
            }
            size="lg"
          />
        </div>

        <img
          src={dashboardImage}
          alt="dashboard-image"
          className="w-full h-[614px]] px-20 mb-10"
        />

        <Brand />
      </div>
    </div>
  );
};

export default Hero;
