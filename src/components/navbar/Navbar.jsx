import { useState } from "react";
import menu from "../../assets/icons/menu.svg";

import { navData } from "./navbarData";
import ArrowDown from "../../assets/icons/ArrowDown";

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <div className="w-full justify-center    z-20 lg:flex font-dm-sans  bg-gradient-to-r from-[#1B45B4] to-[#1C2792]">
      <div className="w-full xl:w-2xl flex justify-between items-center font-dm-sans   h-20 py-8 max-w-[1100px] px-5 lg:px-0">
        <div className="flex gap-6 items-center">
          <div className=" font-bold text-[32px]">Saasly</div>
        </div>

        <div className="lg:hidden">
          <img
            src={menu}
            alt="menu-icon"
            onClick={() => setOpenDrawer(!openDrawer)}
          />
        </div>
        <div className=" gap-4 items-center hidden lg:flex">
          <div className=" px-8 py-8 flex gap-10 rounded-xl ">
            {navData.map((item) => {
              return (
                <div
                  key={item.name}
                  className={`cursor-pointer hover:bg-secondary hover:rounded-md px-4 py-2 hover:bg-primary/50 flex items-center gap-2  ${
                    item.name === "Home" && "font-bold"
                  }`}
                >
                  {item.name}
                  {item.children && <ArrowDown />}
                </div>
              );
            })}
          </div>
        </div>

        <div className=" items-center gap-4 font-bold text-sm hidden lg:flex">
          <div className="cursor-pointer">Sign in</div>
          <div className="border rounded-[10px] px-6 py-3 cursor-pointer">
            Sign up
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
