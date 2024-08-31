import frst from "../../assets/icons/1.svg";
import second from "../../assets/icons/2.svg";
import third from "../../assets/icons/3.svg";
import fourth from "../../assets/icons/4.svg";
import fifth from "../../assets/icons/5.svg";

const BrandItem = ({ logo }) => {
  return (
    <div className="flex gap-3">
      <img src={logo} alt="icon" className="" />
    </div>
  );
};

const Brand = () => {
  const brandLists = [
    { name: "Layers", logo: frst },
    { name: "Layers", logo: second },
    { name: "Layers", logo: third },
    { name: "Layers", logo: fourth },
    { name: "Layers", logo: fifth },
  ];
  return (
    <div className="flex gap-11 my-20">
      {brandLists.map((item, index) => (
        <BrandItem name={item.name} logo={item.logo} key={index} />
      ))}
    </div>
  );
};

export default Brand;
