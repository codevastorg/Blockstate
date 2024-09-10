import React from "react";
import PropTypes from "prop-types";
import { Img } from "../../components/Img";
import * as Images from "../../assets/images";

const OrderReport = ({ className = "" }) => {
  return (
    <section
      className={`w-[1020px] rounded-23xl bg-light-black flex flex-col items-start justify-start pt-[33px] pb-[9px] pl-[55px] pr-10 box-border gap-4 max-w-full z-[1] text-center text-sm text-gainsboro-200 font-manrope mq1275:pl-[27px] mq1275:box-border mq825:pt-[21px] mq825:pb-5 mq825:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-between max-w-full gap-5 text-left text-xl text-shades-white mq1275:flex-wrap">
        <h3 className="m-0 relative text-inherit leading-[140%] font-semibold font-[inherit] mq450:text-base mq450:leading-[22px]">
          Investment Details
        </h3>
        <div className="w-[561px] shadow-[0px_20px_24px_-4px_rgba(255,_235,_176,_0.04),_0px_8px_11px_-4px_rgba(45,_54,_67,_0.04)] rounded-xl flex flex-row items-center justify-center py-[5.5px] px-2.5 box-border gap-4 opacity-[0.9] max-w-full mq825:flex-wrap">
          <div className="flex-1 rounded-xl border-amber-100 border-[1px] border-solid box-border flex flex-row items-center justify-start py-0.5 px-4 min-w-[123px] whitespace-nowrap">
            <input
              className="w-[123px] [border:none] [outline:none] font-manrope text-lg bg-[transparent] h-[26px] relative leading-[26px] text-gray-300 text-left inline-block min-w-[123px] p-0"
              placeholder="Search query..."
              type="text"
            />
          </div>
          <button className="cursor-pointer border-amber-600 border-[1.5px] border-solid py-0.5 px-3.5 bg-[transparent] w-[116px] [filter:drop-shadow(0px_0px_1px_rgba(12,_26,_75,_0.24))_drop-shadow(0px_3px_8px_rgba(50,_50,_71,_0.05))] rounded-xl box-border flex flex-row items-center justify-center gap-2 hover:bg-darkgoldenrod-300 hover:border-darkgoldenrod-200 hover:border-[1.5px] hover:border-solid hover:box-border">
            <Img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src={Images.imgFilter}
            />
            <div className="relative text-lg leading-[26px] font-medium font-manrope text-shades-white text-center inline-block min-w-[52px]">
              Filters
            </div>
          </button>
          <button className="cursor-pointer [border:none] py-1 px-[22px] bg-amber-600 shadow-[0px_0px_1px_rgba(12,_26,_75,_0.24),_0px_3px_8px_-1px_rgba(50,_50,_71,_0.05)] rounded-xl flex flex-row items-center justify-center gap-2 hover:bg-darkgoldenrod-200">
            <Img className="h-6 w-6 relative" alt="" src={Images.imgSearch} />
            <div className="relative text-lg leading-[26px] font-medium font-manrope text-shades-black text-center inline-block min-w-[60px]">
              Search
            </div>
          </button>
        </div>
      </div>
      <div className="w-[891.2px] flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-1.5 max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-2 pr-[13px] box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq825:flex-wrap">
              <div className="w-[103px] relative leading-[20px] font-semibold text-left inline-block shrink-0">
                Asset type
              </div>
              <div className="relative leading-[20px] font-semibold inline-block min-w-[48px]">
                Tokens
              </div>
              <div className="w-[66px] relative leading-[20px] font-semibold inline-block min-w-[66px]">
                Unit Price
              </div>
              <div className="w-[85px] rounded-11xl bg-mediumaquamarine flex flex-row items-start justify-start pt-1 px-3 pb-0 box-border text-accents-green">
                <div className="w-[55px] relative leading-[22px] font-semibold inline-block shrink-0">
                  Status
                </div>
              </div>
              <div className="relative leading-[20px] font-semibold inline-block min-w-[87px]">
                Market Value
              </div>
              <div className="w-[102px] relative leading-[20px] font-semibold text-shades-white inline-block shrink-0 min-w-[102px]">
                Holdings Value
              </div>
            </div>
          </div>
          <Img
            className="self-stretch relative max-w-full overflow-hidden max-h-full"
            loading="lazy"
            alt=""
            src={Images.imgDivider}
          />
        </div>
      </div>
      <div className="w-[910px] overflow-hidden flex flex-row items-start justify-start py-0 px-1 box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[27px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-row items-start justify-between py-0 pl-0 pr-[25px] gap-5 mq825:flex-wrap">
              <div className="w-[103px] relative leading-[20px] font-semibold inline-block shrink-0">
                Asset name
              </div>
              <div className="w-[52px] relative leading-[20px] font-semibold inline-block shrink-0">
                Menu
              </div>
              <div className="h-10 w-[63px] relative tracking-[-0.2px] leading-[140%] font-semibold inline-block shrink-0">
                Unit Price
              </div>
              <div className="w-[85px] rounded-11xl bg-mediumaquamarine flex flex-col items-center justify-center py-0.5 px-[15px] box-border text-accents-green">
                <div className="self-stretch relative leading-[22px] font-semibold">
                  Status
                </div>
              </div>
              <div className="relative leading-[20px] font-semibold inline-block min-w-[87px]">
                Market Value
              </div>
              <div className="w-[102px] relative leading-[20px] font-semibold text-shades-white inline-block shrink-0 min-w-[102px]">
                Holdings Value
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-row items-start justify-between py-0 pl-0 pr-[25px] gap-5 mq825:flex-wrap">
              <div className="w-[103px] relative leading-[20px] font-semibold inline-block shrink-0">
                Asset name
              </div>
              <div className="w-[52px] relative leading-[20px] font-semibold inline-block shrink-0">
                Menu
              </div>
              <div className="h-10 w-[63px] relative tracking-[-0.2px] leading-[140%] font-semibold inline-block shrink-0">
                Unit Price
              </div>
              <div className="w-[85px] rounded-11xl bg-mediumaquamarine flex flex-col items-center justify-center py-0.5 px-[15px] box-border text-accents-green">
                <div className="self-stretch relative leading-[22px] font-semibold">
                  Status
                </div>
              </div>
              <div className="relative leading-[20px] font-semibold inline-block min-w-[87px]">
                Market Value
              </div>
              <div className="w-[102px] relative leading-[20px] font-semibold text-shades-white inline-block shrink-0 min-w-[102px]">
                Holdings Value
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-row items-start justify-between py-0 pl-0 pr-[25px] gap-5 mq825:flex-wrap">
              <div className="w-[103px] relative leading-[20px] font-semibold inline-block shrink-0">
                Asset name
              </div>
              <div className="w-[52px] relative leading-[20px] font-semibold inline-block shrink-0">
                Menu
              </div>
              <div className="h-10 w-[63px] relative tracking-[-0.2px] leading-[140%] font-semibold inline-block shrink-0">
                Unit Price
              </div>
              <div className="w-[85px] rounded-11xl bg-mediumaquamarine flex flex-col items-center justify-center py-0.5 px-[15px] box-border text-accents-green">
                <div className="self-stretch relative leading-[22px] font-semibold">
                  Status
                </div>
              </div>
              <div className="relative leading-[20px] font-semibold inline-block min-w-[87px]">
                Market Value
              </div>
              <div className="w-[102px] relative leading-[20px] font-semibold text-shades-white inline-block shrink-0 min-w-[102px]">
                Holdings Value
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-row items-start justify-between py-0 pl-0 pr-[25px] gap-5 mq825:flex-wrap">
              <div className="w-[103px] relative leading-[20px] font-semibold inline-block shrink-0">
                Asset name
              </div>
              <div className="w-[52px] relative leading-[20px] font-semibold inline-block shrink-0">
                Menu
              </div>
              <div className="h-10 w-[63px] relative tracking-[-0.2px] leading-[140%] font-semibold inline-block shrink-0">
                Unit Price
              </div>
              <div className="w-[85px] rounded-11xl bg-mediumaquamarine flex flex-col items-center justify-center py-0.5 px-[15px] box-border text-accents-green">
                <div className="self-stretch relative leading-[22px] font-semibold">
                  Status
                </div>
              </div>
              <div className="relative leading-[20px] font-semibold inline-block min-w-[87px]">
                Market Value
              </div>
              <div className="w-[102px] relative leading-[20px] font-semibold text-shades-white inline-block shrink-0 min-w-[102px]">
                Holdings Value
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-row items-start justify-between py-0 pl-0 pr-[25px] gap-5 mq825:flex-wrap">
              <div className="w-[103px] relative leading-[20px] font-semibold inline-block shrink-0">
                Asset name
              </div>
              <div className="w-[52px] relative leading-[20px] font-semibold inline-block shrink-0">
                Menu
              </div>
              <div className="h-10 w-[63px] relative tracking-[-0.2px] leading-[140%] font-semibold inline-block shrink-0">
                Unit Price
              </div>
              <div className="w-[85px] rounded-11xl bg-mediumaquamarine flex flex-col items-center justify-center py-0.5 px-[15px] box-border text-accents-green">
                <div className="self-stretch relative leading-[22px] font-semibold">
                  Status
                </div>
              </div>
              <div className="relative leading-[20px] font-semibold inline-block min-w-[87px]">
                Market Value
              </div>
              <div className="w-[102px] relative leading-[20px] font-semibold text-shades-white inline-block shrink-0 min-w-[102px]">
                Holdings Value
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-row items-start justify-between py-0 pl-0 pr-[25px] gap-5 mq825:flex-wrap">
              <div className="w-[103px] relative leading-[20px] font-semibold inline-block shrink-0">
                Asset name
              </div>
              <div className="w-[52px] relative leading-[20px] font-semibold inline-block shrink-0">
                Menu
              </div>
              <div className="h-10 w-[63px] relative tracking-[-0.2px] leading-[140%] font-semibold inline-block shrink-0">
                Unit Price
              </div>
              <div className="w-[85px] rounded-11xl bg-mediumaquamarine flex flex-col items-center justify-center py-0.5 px-[15px] box-border text-accents-green">
                <div className="self-stretch relative leading-[22px] font-semibold">
                  Status
                </div>
              </div>
              <div className="relative leading-[20px] font-semibold inline-block min-w-[87px]">
                Market Value
              </div>
              <div className="w-[102px] relative leading-[20px] font-semibold text-shades-white inline-block shrink-0 min-w-[102px]">
                Holdings Value
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

OrderReport.propTypes = {
  className: PropTypes.string,
};

export default OrderReport;