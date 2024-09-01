import Button from "../../../components/button/Button";
import dashboardImage from "../../../assets/images/dashboard.webp";
import ArrowRight from "../../../assets/icons/ArrowRight";

const Hero = () => {
  return (
    <div className="flex relative justify-center font-dm-sans bg-gradient-to-r from-[#1B45B4] to-[#1C2792]">
      <div className="flex flex-col items-center mt-20 text-center max-w-[1100px] px-5 lg:px-0">
        {/* <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#1B45B4] to-[#1C2792] w-full transform origin-bottom-left -skew-y-6"></div> */}

        <div>
          <div className="font-bold text-[40px] md:text-[60px]  leading-none">
            <div>Advanced analytics to grow</div>
            your business
          </div>
          <div className="max-w-[462px] text-lg text-[#E6E8EC] mt-8 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut id
            nisl tellus rhoncus, imperdiet
          </div>
          <div className="mt-8 mb-12 md:my-16 w-full flex flex-col md:flex-row justify-center gap-3 md:gap-4">
            <Button title="Start Now" size="lg" />

            <Button
              varient="outlined"
              title={
                <div className="flex gap-2 items-center justify-center">
                  <div>Trial</div>
                  <ArrowRight />
                </div>
              }
              size="lg"
            />
          </div>
          <div className="absolute inset-x-0 bottom-0 z-0 bg-white w-full h-[200px] transform origin-bottom-left -skew-y-6 clip-path-triangle"></div>
        </div>

        <div className="w-full z-10">
          <img
            src={dashboardImage}
            alt="dashboard-image"
            className="mb-10 "
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
