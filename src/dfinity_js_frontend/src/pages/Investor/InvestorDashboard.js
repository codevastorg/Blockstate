import React from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent3 from "../../components/Investor/FrameComponent3";
import FrameComponent2 from "../../components/Investor/FrameComponent2";
import OrderReport from "../../components/Investor/OrderReport";
import { Img } from "../../components/Img";
import * as Images from "../../assets/images";

const InvestorDashboard = ({ investor }) => {
  const { id, name, email, phoneNumber, propertiesOwned, joinedAt } = investor;

  return (
    <div className="w-full relative bg-gray1-400 flex flex-row items-start justify-start pt-[30px] px-[39px] pb-12 box-border gap-[58px] leading-[normal] tracking-[normal] mq825:gap-[29px] mq1575:flex-wrap">
      <FrameComponent3 investor={investor} />
      <main className="w-[1287px] rounded-26xl bg-gray1-1000 flex flex-col items-start justify-start pt-12 px-[61px] pb-[37px] box-border gap-[51px] max-w-full mq1275:pt-[31px] mq1275:px-[30px] mq1275:pb-6 mq1275:box-border mq825:gap-[25px] mq825:pt-5 mq825:pb-5 mq825:box-border">
        <section className="w-[860px] flex flex-row items-start justify-start py-0 px-3 box-border max-w-full">
          <FrameComponent2 />
        </section>
        <section className="w-[1138px] rounded-11xl bg-light-black flex flex-col items-start justify-start pt-8 px-8 pb-[58px] box-border gap-12 max-w-full z-[1] text-left text-5xl text-shades-white font-manrope mq450:pt-[21px] mq450:pb-[38px] mq450:box-border mq825:gap-6">
          <div className="self-stretch flex flex-row items-start justify-between gap-5 mq825:flex-wrap">
            <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
              <h2 className="m-0 relative text-inherit leading-[20px] font-bold font-[inherit] mq450:text-lgi mq450:leading-[16px]">
                Investment Performance
              </h2>
            </div>
            <div className="rounded-11xl bg-gray1-100 border-lightgray-100 border-[0.6px] border-solid flex flex-row items-start justify-start py-2 px-[15px] gap-[15px] text-right text-xs text-black">
              <div className="h-7 w-[104px] relative rounded-11xl bg-gray1-100 border-lightgray-100 border-[0.6px] border-solid box-border hidden" />
              <div className="relative leading-[10px] font-semibold inline-block min-w-[47px] z-[1]">
                October
              </div>
              <div className="h-2.5 w-2.5 relative z-[1]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-11xl" />
                <Img
                  className="absolute h-3/5 w-full top-[20%] right-[0%] bottom-[20%] left-[0%] rounded-11xl max-w-full overflow-hidden max-h-full z-[1]"
                  alt=""
                  src={Images.imgShape}
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-end justify-start gap-6 max-w-full text-xs">
            <div className="self-stretch flex flex-row items-start justify-start gap-11 max-w-full mq1275:flex-wrap mq825:gap-[22px]">
              <div className="flex flex-col items-start justify-start gap-[50px]">
                <div className="relative leading-[9px] font-semibold inline-block min-w-[32px]">
                  100%
                </div>
                <div className="relative leading-[9px] font-semibold inline-block min-w-[26px]">
                  80%
                </div>
                <div className="relative leading-[9px] font-semibold inline-block min-w-[26px]">
                  60%
                </div>
                <div className="relative leading-[9px] font-semibold inline-block min-w-[26px]">
                  40%
                </div>
                <div className="relative leading-[9px] font-semibold inline-block min-w-[26px]">
                  20%
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border min-w-[649px] max-w-full mq1275:min-w-full">
                <div className="self-stretch flex flex-row items-start justify-start pt-[7px] px-60 pb-[204.5px] relative mq450:pl-5 mq450:pr-5 mq450:box-border mq825:pl-[120px] mq825:pr-[120px] mq825:box-border">
                  <Img
                    className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full mix-blend-normal"
                    alt=""
                    src={Images.imgLine}
                  />
                  <Img
                    className="h-[195.4px] w-full absolute !m-[0] right-[0px] bottom-[-4px] left-[0px] max-w-full overflow-hidden z-[1]"
                    loading="lazy"
                    alt=""
                    src={Images.imgGraph}
                  />
                  <div className="h-[25.5px] w-20 relative">
                    <Img
                      className="absolute top-[0px] left-[0px] rounded-11xl w-full h-full z-[1]"
                      loading="lazy"
                      alt=""
                      src={Images.imgCombinedShape}
                    />
                    <b className="absolute top-[2px] left-[10px] inline-block min-w-[64px] z-[2]">
                      64,3664.77
                    </b>
                  </div>
                  <Img
                    className="h-[205px] w-[938px] absolute !m-[0] bottom-[-5px] left-[-3px] z-[2]"
                    alt=""
                    src="Images.ImgPoint"
                  />
                </div>
              </div>
            </div>
            <div className="w-[1035px] flex flex-row items-start justify-end py-0 px-[37px] box-border max-w-full text-center">
              <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq825:flex-wrap">
                <div className="relative leading-[9px] font-semibold inline-block min-w-[14px] mq825:w-full mq825:h-3.5">
                  5k
                </div>
                <div className="relative leading-[9px] font-semibold inline-block min-w-[20px]">
                  10k
                </div>
                <div className="relative leading-[9px] font-semibold inline-block min-w-[19px]">
                  15k
                </div>
                <div className="relative leading-[9px] font-semibold inline-block min-w-[22px]">
                  20k
                </div>
                <div className="relative leading-[9px] font-semibold inline-block min-w-[21px]">
                  25k
                </div>
                <div className="relative leading-[9px] font-semibold inline-block min-w-[21px]">
                  30k
                </div>
                <div className="relative leading-[9px] font-semibold inline-block min-w-[21px]">
                  35k
                </div>
                <div className="relative leading-[9px] font-semibold inline-block min-w-[22px]">
                  40k
                </div>
                <div className="relative leading-[9px] font-semibold inline-block min-w-[21px]">
                  45k
                </div>
                <div className="relative leading-[9px] font-semibold inline-block min-w-[21px]">
                  50k
                </div>
                <div className="relative leading-[9px] font-semibold inline-block min-w-[21px]">
                  55k
                </div>
                <div className="relative leading-[9px] font-semibold inline-block min-w-[22px]">
                  60k
                </div>
              </div>
            </div>
          </div>
        </section>
        <OrderReport />
      </main>
    </div>
  );
};

export default InvestorDashboard;
