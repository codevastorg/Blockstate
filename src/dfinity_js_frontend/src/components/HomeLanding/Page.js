import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { Img } from "../../components/Img";
import * as Images from "../../assets/images";

const Page = ({ className = "" }) => {
  const [isAddListingOpen, setIsAddListingOpen] = useState(false);

  // Using useNavigate for navigation
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    // Navigate to the RoleSelection page when the button is clicked
    navigate("/role-selection?canisterId=br5f7-7uaaa-aaaaa-qaaca-cai");
  };

  return (
    <>
      <div
        className={`w-[1349px] flex flex-col items-start justify-start gap-[35px] max-w-full text-left text-45xl text-aliceblue-100 font-manrope mq750:gap-[17px] ${className}`}
      >
        <header className="self-stretch shadow-[0px_20px_24px_-4px_rgba(255,_235,_176,_0.04),_0px_8px_11px_-4px_rgba(45,_54,_67,_0.04)] rounded-11xl bg-gray1-900 flex flex-row items-start justify-center py-[14.5px] pl-[27px] pr-5 gap-[274.5px] top-[0] z-[99] sticky text-left text-5xl text-shades-white font-manrope lg:gap-[137px] mq750:gap-[69px] mq450:gap-[34px]">
          <div className="w-[244px] flex flex-row items-start justify-start gap-2.5">
            <Img
              className="h-[67px] w-[67px] relative rounded object-cover"
              loading="lazy"
              alt=""
              src={Images.imgRectangle11}
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-[17.5px] px-0 pb-0">
              <a className="[text-decoration:none] self-stretch relative tracking-[0.1em] font-bold text-[inherit] whitespace-nowrap">
                BlockState
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[15.5px] pb-0 pl-0 pr-1.5 text-9xl">
            <div className="rounded-xl flex flex-row items-start justify-start">
              <a className="[text-decoration:none] relative leading-[36px] font-bold text-[inherit] whitespace-nowrap">
                Marketplace
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0">
            <button
              className="cursor-pointer [border:none] py-4 px-6 bg-amber-600 rounded-11xl overflow-hidden flex flex-row items-start justify-start gap-2"
              onClick={handleCreateAccount} // Navigate to role selection
            >
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <Img
                  className="w-6 h-6 relative overflow-hidden shrink-0 object-cover"
                  alt=""
                  src={Images.imgHomePounds}
                />
              </div>
              <a className="[text-decoration:none] relative text-lg leading-[26px] font-medium font-manrope text-shades-black text-center inline-block min-w-[94px] whitespace-nowrap">
                Create Account
              </a>
            </button>
          </div>
        </header>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-1 box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start max-w-full">
            <div className="self-stretch rounded-23xl bg-gray1-900 overflow-hidden flex flex-col items-start justify-start py-[125px] pl-[53px] pr-5 box-border relative gap-5 max-w-full mq750:pl-[26px] mq750:box-border mq450:pt-[81px] mq450:pb-[81px] mq450:box-border">
              <Img
                className="w-[1198.2px] h-[476.1px] absolute !m-[0] top-[-73px] right-[-350.2px]"
                alt=""
                src={Images.imgBuildingIllustration}
              />
              <h1 className="m-0 relative text-inherit leading-[72px] font-bold font-[inherit] inline-block max-w-full z-[1] mq1050:text-32xl mq1050:leading-[58px] mq450:text-19xl mq450:leading-[43px]">
                Assets in the market
              </h1>
              <h1 className="m-0 relative text-9xl leading-[36px] font-semibold font-[inherit] inline-block max-w-full z-[1] mq450:text-3xl mq450:leading-[29px]">
                Search for assets and properties in your area.
              </h1>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-[50px] box-border max-w-full mt-[-27px] lg:pl-[25px] lg:pr-[25px] lg:box-border">
              <form className="m-0 flex-1 shadow-[0px_20px_24px_-4px_rgba(255,_235,_176,_0.04),_0px_8px_11px_-4px_rgba(45,_54,_67,_0.04)] rounded-81xl bg-shades-white flex flex-row items-center justify-center flex-wrap content-center py-4 px-[77px] box-border gap-4 opacity-[0.9] max-w-full z-[2] lg:pl-[38px] lg:pr-[38px] lg:box-border">
                <div className="flex-1 rounded-xl border-amber-100 border-[1px] border-solid box-border flex flex-row items-center justify-start py-2.5 px-4 min-w-[192px] max-w-full">
                  <input
                    className="w-48 [border:none] [outline:none] font-manrope text-lg bg-[transparent] h-[26px] relative leading-[26px] text-gray-300 text-left flex items-center p-0"
                    placeholder="Enter City, Zip, Address"
                    type="text"
                  />
                </div>
                <div className="w-[142px] flex flex-row items-start justify-start">
                  <div className="flex-1 rounded-xl border-amber-100 border-[1.5px] border-solid flex flex-row items-center justify-start py-2.5 pl-3.5 pr-2.5 gap-0.5">
                    <div className="flex-1 relative text-lg leading-[26px] font-manrope text-shades-black text-left">
                      Price
                    </div>
                    <Img
                      className="h-6 w-6 relative"
                      alt=""
                      src={Images.imgAngledown}
                    />
                  </div>
                </div>
                <div className="w-[218px] rounded-xl border-amber-100 border-[1.5px] border-solid box-border flex flex-row items-center justify-start py-2.5 pl-3.5 pr-2.5 gap-0.5">
                  <div className="flex-1 relative text-lg leading-[26px] font-manrope text-shades-black text-left">
                    Asset type
                  </div>
                  <Img
                    className="h-6 w-6 relative"
                    alt=""
                    src={Images.imgAngledown}
                  />
                </div>
                <button className="cursor-pointer border-amber-600 border-[1.5px] border-solid py-2.5 px-3.5 bg-[transparent] w-[116px] [filter:drop-shadow(0px_0px_1px_rgba(12,_26,_75,_0.24))_drop-shadow(0px_3px_8px_rgba(50,_50,_71,_0.05))] rounded-xl box-border flex flex-row items-center justify-center gap-2 hover:bg-darkgoldenrod-300 hover:border-darkgoldenrod-200 hover:border-[1.5px] hover:border-solid hover:box-border">
                  <Img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    alt=""
                    src={Images.imgFilter1}
                  />
                  <a className="[text-decoration:none] relative text-lg leading-[26px] font-medium font-manrope text-shades-black text-center inline-block min-w-[52px]">
                    Filters
                  </a>
                </button>
                <button className="cursor-pointer [border:none] py-3 px-[22px] bg-amber-600 shadow-[0px_0px_1px_rgba(12,_26,_75,_0.24),_0px_3px_8px_-1px_rgba(50,_50,_71,_0.05)] rounded-xl flex flex-row items-center justify-center gap-2 hover:bg-darkgoldenrod-200">
                  <Img
                    className="h-6 w-6 relative"
                    alt=""
                    src={Images.imgSearch}
                  />
                  <a className="[text-decoration:none] relative text-lg leading-[26px] font-medium font-manrope text-shades-black text-center inline-block min-w-[60px]">
                    Search
                  </a>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Page.propTypes = {
  className: PropTypes.string,
};

export default Page;
