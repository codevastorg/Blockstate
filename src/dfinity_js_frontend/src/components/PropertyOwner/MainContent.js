import React, { useState } from "react";
import ValueSubComponents from "./ValueSubComponents";
import PropTypes from "prop-types";

const MainContent = ({ className = "", propertyOwner }) => {
  return (
    <section
      className={`self-stretch rounded-23xl bg-gray1-1000 flex flex-col items-start justify-start pt-[43px] pb-[42px] pl-10 pr-[31px] box-border relative gap-9 max-w-full text-left text-5xl text-aliceblue-100 font-manrope mq700:gap-[18px] mq975:pt-7 mq975:pb-[27px] mq975:box-border ${className}`}
    >
      <div className="w-[1150px] h-[752px] relative rounded-23xl bg-gray1-1000 hidden max-w-full z-[0]" />
      <div className="w-[58px] h-[58px] absolute !m-[0] top-[192px] left-[490px] rounded-11xl bg-gray1-1600 border-cards-transparent-stroke border-[1px] border-solid box-border z-[2]">
        <div className="absolute top-[0px] left-[0px] rounded-11xl bg-gray1-1600 border-cards-transparent-stroke border-[1px] border-solid box-border w-full h-full hidden" />
        <img
          className="absolute top-[17px] left-[17px] w-6 h-6 overflow-hidden z-[3]"
          loading="lazy"
          alt=""
          src="/frame-8.svg"
        />
      </div>
      <div className="w-[58px] h-[58px] absolute !m-[0] top-[192px] left-[224px] rounded-11xl bg-gray1-1600 border-cards-transparent-stroke border-[1px] border-solid box-border z-[2]">
        <div className="absolute top-[0px] left-[0px] rounded-11xl bg-gray1-1600 border-cards-transparent-stroke border-[1px] border-solid box-border w-full h-full hidden" />
        <img
          className="absolute top-[17px] left-[17px] w-6 h-6 overflow-hidden z-[3]"
          loading="lazy"
          alt=""
          src="/frame-9.svg"
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-5 mq700:flex-wrap">
        <div className="w-[323px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[9px]">
            <a className="[text-decoration:none] relative tracking-[0.1em] text-[inherit] z-[1] mq450:text-lgi">
              <span className="font-light">Hello,</span>
              <span className="font-semibold"> {propertyOwner}</span>
            </a>
            <div className="relative text-sm tracking-[0.1em] font-semibold text-darkgray-200 z-[1]">
              Here is your quick overview
            </div>
          </div>
        </div>
        <div className="h-[43px] w-[45px] relative rounded-23xl bg-silver-100 z-[1]">
          <div className="absolute top-[0px] left-[0px] rounded-23xl bg-silver-100 w-full h-full hidden" />
          <div className="absolute top-[0px] left-[0px] rounded-23xl bg-silver-100 w-full h-full z-[1]" />
          <img
            className="absolute top-[0px] left-[0px] rounded-23xl w-full h-full object-cover z-[2]"
            loading="lazy"
            alt=""
            src="/image1@2x.png"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[15px] max-w-full">
        <h3 className="m-0 relative text-inherit tracking-[0.1em] font-semibold font-[inherit] z-[1] mq450:text-lgi">
          Analytics Overview
        </h3>
        <div className="self-stretch flex flex-row items-end justify-start gap-[27px] max-w-full text-xs text-darkslategray-300 mq975:flex-wrap">
          <div className="w-[504px] flex flex-col items-start justify-start gap-9 min-w-[504px] max-w-full mq700:gap-[18px] mq700:min-w-full mq975:flex-1">
            <div className="self-stretch flex flex-row items-start justify-start gap-7 mq700:flex-wrap">
              <ValueSubComponents
                subtract="/subtract.svg"
                totalAssetValue="Total Asset Value"
                balanceSeparator="$12,366.56"
              />
              <ValueSubComponents
                subtract="/subtract-1.svg"
                totalAssetValue="Wallet balance"
                propMinWidth="111px"
                balanceSeparator="$123.456"
              />
            </div>
            <div className="self-stretch rounded-11xl bg-light-black border-border-linear border-[1px] border-solid box-border flex flex-col items-end justify-start pt-6 pb-14 pl-[18px] pr-[23px] gap-2.5 max-w-full z-[1] text-sm text-silver-100">
              <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[5px] pr-[7px] box-border max-w-full text-lg text-aliceblue-100">
                <div className="flex-1 flex flex-row items-start justify-start gap-[65px] max-w-full mq700:flex-wrap mq450:gap-8">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[13px] min-w-[122px]">
                    <div className="relative tracking-[0.1em] font-medium">
                      Portfolio Overview
                    </div>
                    <div className="h-[39px] flex flex-row items-start justify-start gap-[7px] text-sm text-silver-100">
                      <div className="h-[40.2px] w-[40.2px] relative rounded-[19.66px] bg-gray1-1600 border-cards-transparent-stroke border-[1.1px] border-solid box-border" />
                      <div className="flex flex-col items-start justify-start gap-1">
                        <div className="relative font-medium inline-block min-w-[79px]">
                          Apartments
                        </div>
                        <div className="relative text-xs font-light inline-block min-w-[60px] whitespace-nowrap">
                          $12,366.56
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-row items-end justify-start gap-[7px] min-w-[128px] text-sm text-goldenrod-200">
                    <img
                      className="h-[38px] w-[38px] relative rounded-19xl object-contain"
                      loading="lazy"
                      alt=""
                      src="/image-21@2x.png"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start gap-[19px]">
                      <div className="self-stretch flex flex-row items-start justify-end">
                        <a className="[text-decoration:underline] relative tracking-[0.1em] font-medium text-[inherit] inline-block min-w-[61px]">
                          View All
                        </a>
                      </div>
                      <div className="flex flex-col items-start justify-start gap-1 text-silver-100">
                        <div className="relative font-medium">
                          Infrastructure Projects
                        </div>
                        <div className="relative text-xs font-light inline-block min-w-[60px] whitespace-nowrap">
                          $12,366.56
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-px relative border-gray1-1500 border-t-[1px] border-solid box-border z-[1]" />
              <div className="self-stretch flex flex-row items-start justify-start pt-0 px-[5px] pb-1 relative">
                <div className="h-[39px] w-[175px] flex flex-row items-start justify-start gap-[7px]">
                  <div className="h-10 w-10 relative rounded-[17.59px] bg-gray1-1600 border-cards-transparent-stroke border-[1px] border-solid box-border" />
                  <div className="flex-1 flex flex-col items-start justify-start gap-1">
                    <div className="self-stretch relative font-medium">
                      Investment Funds
                    </div>
                    <div className="relative text-xs font-light inline-block min-w-[60px] whitespace-nowrap">
                      $12,366.56
                    </div>
                  </div>
                </div>
                <div className="h-64 w-px absolute !m-[0] right-[227px] bottom-[-151px] border-gray1-1500 border-r-[1px] border-solid box-border" />
              </div>
              <div className="self-stretch h-1 flex flex-row items-start justify-start pt-0 px-0 pb-[3px] box-border max-w-full">
                <div className="self-stretch flex-1 relative border-gray1-1500 border-t-[1px] border-solid box-border max-w-full z-[1]" />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-[5px]">
                <div className="h-[39px] flex flex-row items-start justify-start gap-[7px]">
                  <div className="h-[40.2px] w-[40.2px] relative rounded-[19.66px] bg-gray1-1600 border-cards-transparent-stroke border-[1.1px] border-solid box-border" />
                  <div className="flex flex-col items-start justify-start gap-1">
                    <div className="relative font-medium">
                      Intellectual Property (IP)
                    </div>
                    <div className="relative text-xs font-light inline-block min-w-[60px] whitespace-nowrap">
                      $12,366.56
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-px flex flex-row items-start justify-end py-0 pl-0 pr-[5px] box-border max-w-full">
                <div className="self-stretch flex-1 relative border-gray1-1500 border-t-[1px] border-solid box-border max-w-full z-[1]" />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-[5px]">
                <div className="h-[39px] flex flex-row items-start justify-start gap-[7px]">
                  <div className="h-10 w-10 relative rounded-[17.59px] bg-gray1-1600 border-cards-transparent-stroke border-[1px] border-solid box-border" />
                  <div className="flex flex-col items-start justify-start gap-1">
                    <div className="relative font-medium inline-block min-w-[103px]">
                      Music Royalties
                    </div>
                    <div className="relative text-xs font-light inline-block min-w-[60px] whitespace-nowrap">
                      $12,366.56
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-11xl bg-light-black flex flex-col items-start justify-start pt-[42.5px] pb-[28.6px] pl-[41px] pr-10 box-border gap-[53.6px] min-w-[356px] max-w-full z-[1] text-5xl text-shades-white mq700:gap-[27px] mq700:pt-7 mq700:pb-5 mq700:box-border mq700:min-w-full">
            <div className="flex flex-row items-start justify-start py-0 px-px">
              <div className="h-[25.9px] rounded-11xl flex flex-row items-start justify-start py-0 pl-0 pr-5 box-border mq975:flex-1">
                <h3 className="m-0 relative text-inherit font-bold font-[inherit] mq450:text-lgi">
                  Sales Performance
                </h3>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-end justify-start gap-[21.1px] max-w-full text-3xs">
              <div className="self-stretch flex flex-col items-end justify-start gap-[6.2px] shrink-0 [debug_commit:0448091] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-start gap-[24.2px] shrink-0 [debug_commit:0448091] max-w-full mq700:flex-wrap">
                  <div className="flex flex-col items-start justify-start gap-[7px]">
                    <div className="w-[45.8px] h-[217px] relative rounded-11xl bg-whitesmoke-200">
                      <div className="absolute top-[0px] left-[0px] rounded-11xl bg-whitesmoke-200 w-full h-full hidden" />
                      <div className="absolute top-[147.4px] left-[0px] rounded-11xl bg-amber-600 w-[45.8px] h-[69.6px] z-[1]" />
                    </div>
                    <div className="flex flex-row items-start justify-start py-0 pl-[11px] pr-[17px]">
                      <div className="relative font-medium inline-block min-w-[17px]">
                        Jan
                      </div>
                    </div>
                  </div>
                  <div className="h-[216.9px] w-[45.9px] relative rounded-11xl bg-whitesmoke-200">
                    <div className="absolute top-[0px] left-[0px] rounded-11xl bg-whitesmoke-200 w-full h-full hidden" />
                    <div className="absolute top-[73.1px] left-[0.1px] rounded-11xl bg-amber-600 w-[45.8px] h-[143.8px] z-[1]" />
                  </div>
                  <div className="flex-1 flex flex-row items-start justify-start gap-[24.3px] min-w-[212px] max-w-full mq450:flex-wrap">
                    <div className="flex flex-col items-start justify-start gap-[7.1px]">
                      <div className="w-[45.8px] h-[216.9px] relative rounded-11xl bg-whitesmoke-200">
                        <div className="absolute top-[0px] left-[0px] rounded-11xl bg-whitesmoke-200 w-full h-full hidden" />
                        <div className="absolute top-[115.3px] left-[0px] rounded-11xl bg-amber-600 w-[45.8px] h-[101.6px] z-[1]" />
                      </div>
                      <div className="flex flex-row items-start justify-start py-0 pl-2.5 pr-[17px]">
                        <div className="relative font-medium inline-block min-w-[18px]">
                          Mar
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-end justify-start gap-[7px] min-w-[166px] text-xs text-gray1-300">
                      <div className="self-stretch flex flex-col items-start justify-start pt-3 px-1.5 pb-[151px] box-border relative min-h-[217px]">
                        <div className="w-[45.8px] h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] rounded-11xl bg-whitesmoke-200">
                          <div className="absolute top-[0px] left-[0px] rounded-11xl bg-whitesmoke-200 w-full h-full hidden" />
                          <div className="absolute top-[128.3px] left-[0px] rounded-11xl bg-amber-600 w-[45.8px] h-[88.7px] z-[1]" />
                        </div>
                        <div className="w-[239px] flex flex-row items-start justify-start relative">
                          <div className="h-[216.9px] w-[45.8px] absolute !m-[0] right-[59.9px] bottom-[-150.9px] rounded-11xl bg-whitesmoke-200">
                            <div className="absolute top-[0px] left-[0px] rounded-11xl bg-whitesmoke-200 w-full h-full hidden" />
                            <div className="absolute top-[104.6px] left-[0px] rounded-11xl bg-amber-600 w-[45.8px] h-[112.3px] z-[1]" />
                          </div>
                          <div className="h-[216.9px] w-[45.8px] absolute !m-[0] bottom-[-150.9px] left-[-6.8px] rounded-11xl bg-whitesmoke-200">
                            <div className="absolute top-[0px] left-[0px] rounded-11xl bg-whitesmoke-200 w-full h-full hidden" />
                            <div className="absolute top-[25.4px] left-[0px] rounded-11xl bg-amber-600 w-[45.8px] h-[191.5px] z-[1]" />
                          </div>
                          <div className="h-[216.9px] w-[45.8px] absolute !m-[0] bottom-[-150.9px] left-[63.2px] rounded-11xl bg-whitesmoke-200">
                            <div className="absolute top-[0px] left-[0px] rounded-11xl bg-whitesmoke-200 w-full h-full hidden" />
                            <div className="absolute top-[88.2px] left-[0px] rounded-11xl bg-amber-600 w-[45.8px] h-[128.7px] z-[1]" />
                          </div>
                          <div className="flex-1 shadow-[0px_0px_2px_rgba(0,_0,_0,_0.25)] rounded-11xl bg-shades-white flex flex-row items-start justify-start pt-2.5 px-[11px] pb-[9px] gap-[10.6px] z-[2] mq450:flex-wrap">
                            <div className="h-[53px] w-[237.9px] relative shadow-[0px_0px_2px_rgba(0,_0,_0,_0.25)] rounded-11xl bg-shades-white hidden" />
                            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                              <div className="w-[34px] h-[33px] relative rounded-11xl overflow-hidden shrink-0 z-[2]">
                                <img
                                  className="absolute top-[2.8px] left-[2.9px] w-[28.3px] h-[27.5px] z-[1]"
                                  loading="lazy"
                                  alt=""
                                  src="/vector-10.svg"
                                />
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start gap-px">
                              <b className="relative inline-block min-w-[51px] z-[1]">
                                20 views
                              </b>
                              <div className="relative text-3xs inline-block min-w-[87px] z-[1]">
                                Monday, April 22nd
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[192.3px] flex flex-row items-start justify-end py-0 px-[19px] box-border text-3xs text-shades-white">
                        <div className="flex-1 flex flex-row items-start justify-between gap-5">
                          <div className="relative font-medium inline-block min-w-[20px]">
                            May
                          </div>
                          <div className="relative font-medium inline-block min-w-[14px]">
                            Jul
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[27px] pr-6 box-border max-w-full text-xl">
                  <div className="flex-1 rounded-11xl flex flex-row items-start justify-center pt-[6.8px] px-5 pb-[6.9px] box-border gap-[5px] shrink-0 [debug_commit:0448091] max-w-full mq700:flex-wrap">
                    <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                      <b className="relative inline-block min-w-[43px] mq450:text-base">
                        30%
                      </b>
                    </div>
                    <div className="relative text-xs">
                      <p className="m-0">Your sales performance is 30%</p>
                      <p className="m-0">better compare to last month</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[77px] pr-[75px] mq450:pl-[38px] mq450:pr-[37px] mq450:box-border">
                <button className="cursor-pointer [border:none] py-[18.7px] px-5 bg-lemonchiffon flex-1 rounded-11xl flex flex-row items-start justify-center shrink-0 [debug_commit:0448091] hover:bg-wheat">
                  <b className="relative text-sm inline-block font-manrope text-amber-600 text-left min-w-[48px]">
                    Details
                  </b>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

MainContent.propTypes = {
  className: PropTypes.string,
};

export default MainContent;
