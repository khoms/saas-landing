import React from "react";
import facebook from "../../../assets/icons/facebook.svg";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-blue-800 to-blue-900 text-white pt-24 md:pt-40 font-dm-sans w-full flex justify-center ">
      {/* <div className="absolute top-0 left-0 w-full  h-20 transform -skew-y-6  origin-bottom bg-[#EBF7FF] text-black text-xl font-bold">
        NEPAL IS GOO COUNTRY
      </div> */}

      {/* <div class="absolute top-0  w-full h-[100px] bg-[#EBF7FF] transform -skew-y-6 origin-top-right"></div> */}

      <div class="absolute top-0 left-0 w-full h-0 border-t-[40px] md:border-t-[140px] border-t-[#EBF7FF] border-r-[100vw] border-r-transparent"></div>

      <div className="absolute -top-2 right-0 h-16 bg-[#0097FE] transform origin-bottom-left w-48 -skew-y-6 hidden md:block"></div>
      <div className="absolute bottom-28 left-0 h-12 bg-[#0097FE]/40 transform origin-bottom-left w-32 -skew-y-6 "></div>
      <div className="absolute bottom-1/3 right-0 h-16 border border-[#4885D5]/40 border-r-transparent transform origin-bottom-left w-full md:w-32 -skew-y-6 "></div>
      <div className="absolute top-[92px] left-8 h-12 border border-[#4885D5]/40 border-b-transparent  transform origin-bottom-left w-64 -skew-y-6"></div>
      <div className="absolute top-[48px] left-0 h-16  bg-[#4885D5]/20  transform origin-bottom-left w-52 -skew-y-6"></div>

      <div className="max-w-[1100px] mb-4 w-full">
        <div className="container   flex flex-col md:flex-row gap-8 md:justify-between w-full items-center px-5 md:px-4">
          {/* Brand Section */}
          <div className="md:max-w-xs  text-center  md:text-left flex flex-col items-center md:items-start px-3 md:px-0">
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
            <div className=" flex flex-col  md:items-center ">
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
