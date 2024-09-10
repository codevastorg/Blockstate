import React from "react";
import TotalOrder from "./TotalOrder";
import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-row items-start justify-start gap-[25px] max-w-full text-left text-base text-gray1-2000 font-manrope mq825:flex-wrap ${className}`}
    >
      <TotalOrder />
      <TotalOrder />
      <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border min-w-[196px]">
        <div className="self-stretch shadow-[6px_6px_54px_rgba(0,_0,_0,_0.05)] rounded-11xl bg-light-black flex flex-col items-start justify-start p-4 gap-7 z-[1]">
          <div className="w-[262px] h-[161px] relative shadow-[6px_6px_54px_rgba(0,_0,_0,_0.05)] rounded-11xl bg-light-black hidden" />
          <div className="self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
            <div className="flex flex-col items-start justify-start gap-4">
              <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block mix-blend-normal min-w-[104px] z-[1]">
                Total Pending
              </a>
              <a className="[text-decoration:none] relative text-9xl tracking-[1px] font-bold text-shades-white inline-block min-w-[75px] z-[1] mq450:text-3xl">
                2040
              </a>
            </div>
            <img
              className="h-[60px] w-[60px] relative object-contain z-[1]"
              loading="lazy"
              alt=""
              src="/icon-21@2x.png"
            />
          </div>
          <div className="flex flex-row items-start justify-start gap-2 text-gray1-2100">
            <img
              className="h-6 w-6 relative min-h-[24px] z-[1]"
              alt=""
              src="/ictrendingup24px-1.svg"
            />
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <div className="relative font-semibold z-[1]">
                1.8% Up from yesterday
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
