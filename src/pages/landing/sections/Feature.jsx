import FeatureCard from "../../../components/card/FeatureCard";
import feature1 from "../../../assets/images/feature1.webp";
import keypad from "../../../assets/icons/keypad.svg";

const Feature = () => {
  const abc = [1, 2, 3];
  return (
    <div className="py-16 md:py-20 w-full flex justify-center font-dm-sans">
      <div className="max-w-[1100px] mb-4 w-full px-5 xl:px-0  space-y-14 md:space-y-16">
        <div className="mx-auto font-bold text-3xl md:text-5xl text-[#14358A] w-full  md:w-[580px] text-center tracking-tighter leading-105">
          We make it easy to track all data analytics
        </div>
        <div className="  space-y-14 md:space-y-16 ">
          {abc.map(() => (
            <FeatureCard
              icon={keypad}
              image={feature1}
              title="Real Time Data Analytics"
              content="
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;
