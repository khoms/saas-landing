import Button from "../../../components/button/Button";
import dashboardImage from "../../../assets/images/dashboard.webp";
import ArrowRight from "../../../assets/icons/ArrowRight";
import heroImage from "../../../assets/images/hero-bg.webp";
import heroImageSm from "../../../assets/images/hero-bg-sm.webp";

const Hero = () => {
  return (
    <div className="flex relative justify-center font-dm-sans ">
      <picture>
        <source media="(max-width: 680px)" srcSet={heroImageSm} />
        <img
          src={heroImage}
          alt="hero background"
          className="absolute inset-0 w-full h-[800px] object-fill object-center z-0"
        />
      </picture>
      <div className="flex flex-col items-center mt-36 md:mt-40 text-center max-w-[1100px] px-5 lg:px-0 z-10">
        <div>
          <div className="font-bold text-[40px] md:text-[60px]  leading-none">
            <div>Advanced analytics to grow</div>
            your business
          </div>
          <div className="max-w-[462px] text-lg text-[#E6E8EC] mt-8 mx-auto">
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
