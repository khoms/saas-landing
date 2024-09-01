import frst from "../../assets/icons/1.svg";
import second from "../../assets/icons/2.svg";
import third from "../../assets/icons/3.svg";
import fourth from "../../assets/icons/4.svg";
import fifth from "../../assets/icons/5.svg";

const brandLists = [
  { name: "Layers", logo: fourth },
  { name: "Layers", logo: second },
  { name: "Layers", logo: fifth },
  { name: "Layers", logo: frst },
  { name: "Layers", logo: third },
];
const BrandItem = ({ logo, index }) => {
  return (
    <div
      className={`lg:w-[162px] ${
        brandLists.length === index + 1 && "hidden lg:block"
      }`}
    >
      <img src={logo} alt="icon" className="" />
    </div>
  );
};

const Brand = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 gap-3 lg:gap-11 lg:grid-cols-5 my-20 gap-y-10 max-w-[1100px] px-5 lg:px-0">
        {brandLists.map((item, index) => (
          <BrandItem
            name={item.name}
            logo={item.logo}
            key={index}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Brand;
