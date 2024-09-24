import React from "react";
import PropTypes from "prop-types";
import { Img } from "../../components/Img";
import * as Images from "../../assets/images";

const BalanceOVerview = ({ className = "" }) => {
  return (
    <div
      className={`w-[717px] shadow-[0px_12px_23px_rgba(62,_73,_84,_0.04)] rounded-11xl bg-light-black border-lightgray-300 border-[1px] border-solid box-border flex flex-col items-start justify-start pt-7 px-8 pb-[50px] gap-[41px] min-w-[717px] max-w-full z-[1] text-left text-xl text-shades-white font-manrope mq800:gap-5 mq800:pt-5 mq800:pb-8 mq800:box-border mq1125:min-w-full mq1300:flex-1 ${className}`}
    >
      <div className="w-[717px] h-[593px] relative shadow-[0px_12px_23px_rgba(62,_73,_84,_0.04)] rounded-11xl bg-light-black border-lightgray-300 border-[1px] border-solid box-border hidden max-w-full" />
      <div className="w-[642.6px] flex flex-row items-start justify-between gap-5 max-w-full mq800:flex-wrap">
        <div className="w-[247.5px] flex flex-col items-start justify-start gap-[38px] min-w-[247.5px] mq800:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-2.5">
            <div className="w-[184.4px] h-[27px] relative font-medium inline-block [text-shadow:1px_0_0_rgba(213,_213,_216,_0.1),_0_1px_0_rgba(213,_213,_216,_0.1),_-1px_0_0_rgba(213,_213,_216,_0.1),_0_-1px_0_rgba(213,_213,_216,_0.1)] z-[1] mq450:text-base">
              Overview Balance
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 text-xs text-gainsboro-300">
              <div className="flex-1 relative [text-shadow:1px_0_0_rgba(213,_213,_216,_0.1),_0_1px_0_rgba(213,_213,_216,_0.1),_-1px_0_0_rgba(213,_213,_216,_0.1),_0_-1px_0_rgba(213,_213,_216,_0.1)] z-[1]">
                Lorem ipsum dolor sit amet, consectetur
              </div>
            </div>
          </div>
          <div className="w-[159.9px] relative text-base inline-block [text-shadow:1px_0_0_rgba(213,_213,_216,_0.1),_0_1px_0_rgba(213,_213,_216,_0.1),_-1px_0_0_rgba(213,_213,_216,_0.1),_0_-1px_0_rgba(213,_213,_216,_0.1)] z-[1]">
            <span>Last Week</span>
            <span className="text-black">{` `}</span>
            <span className="text-limegreen-100">$563,443</span>
          </div>
        </div>
        <div className="w-[245.2px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border min-w-[245.2px] text-sm mq800:flex-1">
          <div className="self-stretch flex flex-col items-end justify-start gap-[29px]">
            <div className="rounded-11xl border-lightgray-200 border-[1px] border-solid flex flex-row items-start justify-start py-2.5 pl-[17px] pr-[15px] gap-[12.3px] z-[1]">
              <div className="h-12 w-[175.2px] relative rounded-11xl border-lightgray-200 border-[1px] border-solid box-border hidden" />
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <div className="relative font-medium [text-shadow:1px_0_0_rgba(213,_213,_216,_0.1),_0_1px_0_rgba(213,_213,_216,_0.1),_-1px_0_0_rgba(213,_213,_216,_0.1),_0_-1px_0_rgba(213,_213,_216,_0.1)] z-[1]">
                  Weekly (2020)
                </div>
              </div>
              <Img
                className="h-6 w-[24.4px] relative rounded-11xl overflow-hidden shrink-0 object-contain min-h-[24px] z-[1]"
                alt=""
                src={Images.imgIcChevron}
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start text-9xl">
              <div className="h-[38px] w-[184.9px] relative font-semibold inline-block shrink-0 [text-shadow:1px_0_0_rgba(213,_213,_216,_0.1),_0_1px_0_rgba(213,_213,_216,_0.1),_-1px_0_0_rgba(213,_213,_216,_0.1),_0_-1px_0_rgba(213,_213,_216,_0.1)] whitespace-nowrap z-[1] mq450:text-3xl">
                $557,235.31
              </div>
              <div className="w-[35.6px] flex flex-col items-start justify-start pt-1 pb-0 pl-0 pr-1.5 box-border text-3xl text-limegreen-100">
                <div className="self-stretch h-[60px] relative inline-block [text-shadow:1px_0_0_rgba(213,_213,_216,_0.1),_0_1px_0_rgba(213,_213,_216,_0.1),_-1px_0_0_rgba(213,_213,_216,_0.1),_0_-1px_0_rgba(213,_213,_216,_0.1)] z-[2] mq450:text-lg">
                  7%
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                <Img
                  className="w-[24.4px] h-6 relative rounded-11xl overflow-hidden shrink-0 object-contain z-[2]"
                  loading="lazy"
                  alt=""
                  src={Images.imgIcChevron1}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[640.8px] flex flex-row items-start justify-start gap-[33.6px] max-w-full text-sm text-gainsboro-300 mq800:gap-[17px] mq800:flex-wrap">
        <div className="flex flex-col items-start justify-start gap-[42px]">
          <div className="relative [text-shadow:1px_0_0_rgba(213,_213,_216,_0.1),_0_1px_0_rgba(213,_213,_216,_0.1),_-1px_0_0_rgba(213,_213,_216,_0.1),_0_-1px_0_rgba(213,_213,_216,_0.1)] z-[1]">
            1,000k
          </div>
          <div className="relative [text-shadow:1px_0_0_rgba(213,_213,_216,_0.1),_0_1px_0_rgba(213,_213,_216,_0.1),_-1px_0_0_rgba(213,_213,_216,_0.1),_0_-1px_0_rgba(213,_213,_216,_0.1)] z-[1]">
            800k
          </div>
          <div className="relative [text-shadow:1px_0_0_rgba(213,_213,_216,_0.1),_0_1px_0_rgba(213,_213,_216,_0.1),_-1px_0_0_rgba(213,_213,_216,_0.1),_0_-1px_0_rgba(213,_213,_216,_0.1)] z-[1]">
            600k
          </div>
          <div className="relative [text-shadow:1px_0_0_rgba(213,_213,_216,_0.1),_0_1px_0_rgba(213,_213,_216,_0.1),_-1px_0_0_rgba(213,_213,_216,_0.1),_0_-1px_0_rgba(213,_213,_216,_0.1)] z-[1]">
            400k
          </div>
          <div className="relative [text-shadow:1px_0_0_rgba(213,_213,_216,_0.1),_0_1px_0_rgba(213,_213,_216,_0.1),_-1px_0_0_rgba(213,_213,_216,_0.1),_0_-1px_0_rgba(213,_213,_216,_0.1)] z-[1]">
            200k
          </div>
        </div>
        <div className="flex-1 flex flex-col items-end justify-start gap-[15.6px] min-w-[367px] max-w-full mq800:min-w-full">
          <div className="self-stretch h-[288.4px] relative">
            <div className="absolute top-[182px] left-[169px] rounded-81xl bg-gray1-1000 w-14 h-1.5" />
            <Img
              className="absolute top-[0px] left-[0px] w-full h-full object-contain z-[1]"
              loading="lazy"
              alt=""
              src={Images.imgBars}
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-between py-0 pl-0 pr-px gap-5 mq800:flex-wrap">
            <div className="flex flex-col items-start justify-start py-0 pl-0 pr-0.5">
              <div className="relative [text-shadow:1px_0_0_rgba(213,_213,_216,_0.1),_0_1px_0_rgba(213,_213,_216,_0.1),_-1px_0_0_rgba(213,_213,_216,_0.1),_0_-1px_0_rgba(213,_213,_216,_0.1)] z-[1]">
                06
              </div>
            </div>
            <div className="relative [text-shadow:1px_0_0_rgba(213,_213,_216,_0.1),_0_1px_0_rgba(213,_213,_216,_0.1),_-1px_0_0_rgba(213,_213,_216,_0.1),_0_-1px_0_rgba(213,_213,_216,_0.1)] z-[1] mq800:w-full mq800:h-[17.3px]">
              07
            </div>
            <div className="relative [text-shadow:1px_0_0_rgba(213,_213,_216,_0.1),_0_1px_0_rgba(213,_213,_216,_0.1),_-1px_0_0_rgba(213,_213,_216,_0.1),_0_-1px_0_rgba(213,_213,_216,_0.1)] z-[1]">
              08
            </div>
            <div className="relative [text-shadow:1px_0_0_rgba(213,_213,_216,_0.1),_0_1px_0_rgba(213,_213,_216,_0.1),_-1px_0_0_rgba(213,_213,_216,_0.1),_0_-1px_0_rgba(213,_213,_216,_0.1)] z-[1]">
              09
            </div>
            <div className="flex flex-col items-start justify-start py-0 pl-0 pr-1">
              <div className="relative [text-shadow:1px_0_0_rgba(213,_213,_216,_0.1),_0_1px_0_rgba(213,_213,_216,_0.1),_-1px_0_0_rgba(213,_213,_216,_0.1),_0_-1px_0_rgba(213,_213,_216,_0.1)] z-[1]">
                10
              </div>
            </div>
            <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[11px]">
              <div className="w-[9.2px] relative inline-block [text-shadow:1px_0_0_rgba(213,_213,_216,_0.1),_0_1px_0_rgba(213,_213,_216,_0.1),_-1px_0_0_rgba(213,_213,_216,_0.1),_0_-1px_0_rgba(213,_213,_216,_0.1)] z-[1]">
                11
              </div>
            </div>
            <div className="w-[16.3px] flex flex-col items-start justify-start py-0 pl-0 pr-[3px] box-border">
              <div className="self-stretch relative [text-shadow:1px_0_0_rgba(213,_213,_216,_0.1),_0_1px_0_rgba(213,_213,_216,_0.1),_-1px_0_0_rgba(213,_213,_216,_0.1),_0_-1px_0_rgba(213,_213,_216,_0.1)] z-[1]">
                12
              </div>
            </div>
            <div className="flex flex-col items-start justify-start py-0 pl-0 pr-1">
              <div className="relative [text-shadow:1px_0_0_rgba(213,_213,_216,_0.1),_0_1px_0_rgba(213,_213,_216,_0.1),_-1px_0_0_rgba(213,_213,_216,_0.1),_0_-1px_0_rgba(213,_213,_216,_0.1)] z-[1]">
                13
              </div>
            </div>
            <div className="flex flex-col items-start justify-start py-0 pl-0 pr-1">
              <div className="relative [text-shadow:1px_0_0_rgba(213,_213,_216,_0.1),_0_1px_0_rgba(213,_213,_216,_0.1),_-1px_0_0_rgba(213,_213,_216,_0.1),_0_-1px_0_rgba(213,_213,_216,_0.1)] z-[1]">
                14
              </div>
            </div>
            <div className="flex flex-col items-start justify-start py-0 pl-0 pr-1">
              <div className="relative [text-shadow:1px_0_0_rgba(213,_213,_216,_0.1),_0_1px_0_rgba(213,_213,_216,_0.1),_-1px_0_0_rgba(213,_213,_216,_0.1),_0_-1px_0_rgba(213,_213,_216,_0.1)] z-[1]">
                15
              </div>
            </div>
            <div className="relative [text-shadow:1px_0_0_rgba(213,_213,_216,_0.1),_0_1px_0_rgba(213,_213,_216,_0.1),_-1px_0_0_rgba(213,_213,_216,_0.1),_0_-1px_0_rgba(213,_213,_216,_0.1)] z-[1] mq800:w-full mq800:h-[14.3px]">
              16
            </div>
            <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[9px]">
              <div className="relative [text-shadow:1px_0_0_rgba(213,_213,_216,_0.1),_0_1px_0_rgba(213,_213,_216,_0.1),_-1px_0_0_rgba(213,_213,_216,_0.1),_0_-1px_0_rgba(213,_213,_216,_0.1)] z-[1]">
                17
              </div>
            </div>
            <div className="relative [text-shadow:1px_0_0_rgba(213,_213,_216,_0.1),_0_1px_0_rgba(213,_213,_216,_0.1),_-1px_0_0_rgba(213,_213,_216,_0.1),_0_-1px_0_rgba(213,_213,_216,_0.1)] z-[1] mq800:w-full mq800:h-[14.3px]">
              18
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BalanceOVerview.propTypes = {
  className: PropTypes.string,
};

export default BalanceOVerview;
