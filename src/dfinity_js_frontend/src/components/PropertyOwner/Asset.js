import React from "react";
import PropTypes from "prop-types";

const Asset = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start min-w-[76px] text-left text-xs text-shades-white font-manrope ${className}`}
    >
      <div className="self-stretch flex flex-col items-end justify-start pt-[29px] pb-[16.5px] pl-8 pr-[82px] relative gap-[55px]">
        <img
          className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xl max-w-full overflow-hidden max-h-full object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/vector-11@2x.png"
        />
        <div className="self-stretch flex flex-row items-start justify-start">
          <div className="[backdrop-filter:blur(12px)] rounded-md bg-gray1-1700 flex flex-row items-start justify-start p-1 z-[2]">
            <div className="relative font-medium inline-block min-w-[23px]">
              Live
            </div>
          </div>
        </div>
        <div className="[backdrop-filter:blur(12px)] rounded-md bg-gray1-1700 flex flex-row items-start justify-start p-1 z-[2]">
          <div className="flex flex-row items-start justify-start gap-1">
            <div className="h-1 w-1 relative rounded-[50%] bg-gainsboro-400" />
            <div className="h-1 w-1 relative rounded-[50%] bg-goldenrod-200" />
            <div className="h-1 w-1 relative rounded-[50%] bg-gainsboro-400" />
          </div>
        </div>
      </div>
      <div className="self-stretch rounded-t-xl rounded-b-11xl bg-light-black border-cards-transparent-stroke border-[1px] border-solid flex flex-row items-start justify-start pt-[31px] px-8 pb-2 mt-[-16.5px] text-sm">
        <div className="flex flex-col items-start justify-start gap-2">
          <div className="flex flex-col items-start justify-start gap-1">
            <div className="relative tracking-[0.1em] font-semibold inline-block min-w-[77px]">
              Bungalow
            </div>
            <div className="flex flex-row items-start justify-start gap-1 text-3xs text-gray1-2100">
              <img
                className="h-3 w-3 relative object-contain"
                loading="lazy"
                alt=""
                src="/frame-111@2x.png"
              />
              <div className="relative font-light inline-block min-w-[78px]">
                Leeds city center
              </div>
            </div>
          </div>
          <div className="relative text-base tracking-[0.1em] font-semibold inline-block min-w-[74px] whitespace-nowrap">
            $755.00
          </div>
        </div>
      </div>
    </div>
  );
};

Asset.propTypes = {
  className: PropTypes.string,
};

export default Asset;
