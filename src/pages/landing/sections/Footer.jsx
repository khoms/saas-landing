import React from "react";
import facebook from "../../../assets/icons/facebook.svg";
import footerBg from "../../../assets/images/footerbg.webp";
import footerBgSm from "../../../assets/images/footerBg-sm.webp";

const Footer = () => {
  return (
    <footer className="relative text-white pt-24 md:pt-56 font-dm-sans w-full flex justify-center bg-[#EBF7FF]">
      <picture>
        <source media="(max-width: 768px)" srcSet={footerBgSm} />
        <img
          src={footerBg}
          alt="Footer Background"
          className="absolute inset-0 w-full h-full  object-center z-0"
        />
      </picture>

      <div className="max-w-[1100px] mb-4 w-full z-10">
        <div className="   flex flex-col md:flex-row gap-8 md:justify-between w-full items-center px-5 md:px-4 ">
          {/* Brand Section */}
          <div className="max-w-sm md:max-w-xs  text-center md:text-left flex flex-col items-center md:items-start px-3 md:px-0">
            <h2 className="text-2xl font-bold">Saasly</h2>
            <p className="mt-4 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut
              id nisl tellus rhoncus, imperdiet.
            </p>
            <div className="flex space-x-4 mt-6">
              <img src={facebook} alt="icon" className="size-12" />
              <img src={facebook} alt="icon" className="size-12" />
              <img src={facebook} alt="icon" className="size-12" />
              <img src={facebook} alt="icon" className="size-12" />
            </div>
          </div>

          {/* Pages Links */}
          <div className="flex-1 w-full grid grid-cols-2 gap-8 md:grid-cols-3 justify-between ">
            <div className=" flex flex-col  sm:items-center ">
              <div>
                <h3 className="text-lg font-semibold">Pages</h3>
                <ul className="mt-4 space-y-2 text-left">
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Home V1
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Home V2
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Home V3
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      About 1
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      About 2
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Blog 1
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Blog 2
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Blog Single
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Job 1
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Job 2
                    </a>
                  </li>

                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Job Single
                    </a>
                  </li>

                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Price 1
                    </a>
                  </li>

                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Price 2
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Help Center 1
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Help & Contact Links */}
            <div className="flex-1 flex flex-col items-center">
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Help Center V2
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    FAQ V1
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    FAQ V2
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    FAQ Detail
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Contact V1
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Contact V2
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Checkout
                  </a>
                </li>
              </ul>
            </div>

            {/* Utility Pages */}
            <div className="flex-1 flex flex-col md:items-center">
              <div>
                <h3 className="text-lg font-semibold">Utility Pages</h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Sign In
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Sign Up
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Forgot Password
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Reset Password
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Email Confirmation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      404 Page
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Coming Soon
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Style Guide
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-[72px] text-center text-sm border-t py-4">
          <p>
            Copyright Stairs | Designed by{" "}
            <a
              href="#"
              className="font-bold text-[#0097FE] hover:text-blue-400"
            >
              Design Mate
            </a>{" "}
            - Powered by{" "}
            <a
              href="#"
              className="font-bold text-[#0097FE] hover:text-blue-400"
            >
              Webflow
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
