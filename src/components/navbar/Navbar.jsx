// import { FaChevronDown } from "react-icons/fa6";
// import us from "../../assets/icons/US.png";

import { navData } from "./navbarData";

const Navbar = () => {
  return (
    <div className="w-full justify-center flex    z-30 ">
      <div className="w-full xl:w-2xl flex justify-between font-dm-sans   h-20 py-8 max-w-[1280px]">
        <div className="flex gap-6 items-center">
          <div className=" font-bold text-[32px]">Saasly</div>
        </div>

        <div className="flex gap-4 items-center">
          <div className=" px-8 py-8 flex gap-10 rounded-xl ">
            {navData.map((item) => {
              return (
                <div
                  key={item.name}
                  className=" cursor-pointer hover:bg-secondary hover:rounded-md px-2 py-2 font-bold"
                >
                  {item.name}
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-4 font-bold text-sm">
          <div className="">Sign in</div>
          <div className="border rounded-[10px] px-8 py-3 ">Sign up</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
