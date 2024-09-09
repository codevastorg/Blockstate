import React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import MainContent from "../../components/PropertyOwner/MainContent";
import MyAssetsOverview from "../../components/PropertyOwner/MyAssetsOverview";
import { Img } from "../../components/Img";
import * as Images from "../../assets/images";

const OwnerDashboard = ({ propertyOwner }) => {
  const {
    id,
    name,
    email,
    phoneNumber,
    propertiesOwned,
    joinedAt,
  } = propertyOwner;
  const navigate = useNavigate();

  const onVectorClick = useCallback(() => {
    navigate("/portfolio?canisterId=br5f7-7uaaa-aaaaa-qaaca-cai");
  }, [navigate]);

  const onVectorClick1 = useCallback(() => {
    navigate("/documents");
  }, [navigate]);

  const onAnalyticsContainerClick = useCallback(() => {
    navigate("/investor-dashboard");
  }, [navigate]);

  return (
    <div className="w-full relative bg-gray1-400 overflow-hidden flex flex-row items-start justify-start pt-[18px] pb-[49px] pl-[19px] pr-4 box-border gap-7 leading-[normal] tracking-[normal] mq975:pl-7 mq975:pr-7 mq975:box-border">
      <div className="w-[227px] flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border mq975:hidden">
        <nav className="m-0 self-stretch flex flex-col items-end justify-start gap-[30px] text-left text-5xl text-shades-white font-manrope">
          <div className="self-stretch flex flex-row items-start justify-end py-0 px-px">
            <div className="flex-1 flex flex-col items-end justify-start gap-[23px]">
              <div className="self-stretch flex flex-row items-start justify-end py-0 pl-3 pr-2.5">
                <div className="flex-1 flex flex-row items-start justify-start gap-[11px]">
                  <Img
                    className="h-[38px] w-[38px] relative rounded object-cover min-h-[38px]"
                    loading="lazy"
                    alt=""
                    src={Images.imgRectangle1}
                  />
                  <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                    <a className="[text-decoration:none] relative tracking-[0.1em] font-semibold text-[inherit] mq450:text-lgi">
                      BlockState
                    </a>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-mini border-gray1-2200 border-[1px] border-solid flex flex-row items-start justify-between py-0.5 pl-[45px] pr-9 gap-5 text-base">
                <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                  <div className="relative font-medium inline-block min-w-[96px]">
                    Asset Owner
                  </div>
                </div>
                <div className="h-8 w-4 relative">
                  <Img
                    className="absolute top-[0px] left-[0px] w-4 h-4 object-cover"
                    loading="lazy"
                    alt=""
                    src={Images.imgTypeOptions}
                  />
                  <Img
                    className="absolute top-[16px] left-[0px] w-4 h-4 object-cover"
                    loading="lazy"
                    alt=""
                    src={Images.imgFrame_11}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-end py-0 px-[9px] text-base">
            <div className="h-[504px] flex-1 relative">
              <Img
                className="absolute top-[15px] left-[13.2px] w-[8.5px] h-[8.5px]"
                loading="lazy"
                alt=""
                src={Images.imgVector_1}
              />
              <div className="absolute top-[0px] left-[0px] w-full flex flex-col items-start justify-start gap-[9px] h-full z-[1]">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-row items-start justify-start">
                  <div className="flex-1 flex flex-row items-start justify-start pt-[9.4px] px-[35px] pb-[11px] relative gap-0.5">
                    <Img
                      className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src={Images.imgVector_1}
                    />
                    <Img
                      className="h-[23.7px] w-[28.3px] relative object-contain z-[1]"
                      alt=""
                      src={Images.imgIconlyBoldCategory1}
                    />
                    <div className="flex flex-col items-start justify-start pt-[5.6px] px-0 pb-0">
                      <a className="[text-decoration:none] relative text-base font-medium font-manrope text-shades-white text-left inline-block [text-shadow:1px_0_0_rgba(255,_255,_255,_0.05),_0_1px_0_rgba(255,_255,_255,_0.05),_-1px_0_0_rgba(255,_255,_255,_0.05),_0_-1px_0_rgba(255,_255,_255,_0.05)] min-w-[70px] z-[1]">
                        Overview
                      </a>
                    </div>
                  </div>
                </button>
                <div className="self-stretch flex flex-row items-start justify-start top-[0] z-[99] sticky">
                  <div className="flex-1 flex flex-row items-start justify-start pt-[9px] px-[38px] pb-[11px] relative gap-1">
                    <Img
                      className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full cursor-pointer"
                      alt=""
                      src={Images.imgVector_2}
                      onClick={onVectorClick}
                    />
                    <Img
                      className="h-6 w-6 relative overflow-hidden shrink-0 z-[1]"
                      loading="lazy"
                      alt=""
                      src={Images.imgFrame_2}
                    />
                    <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                      <a className="[text-decoration:none] relative font-bold text-[inherit] inline-block [text-shadow:1px_0_0_rgba(255,_255,_255,_0.05),_0_1px_0_rgba(255,_255,_255,_0.05),_-1px_0_0_rgba(255,_255,_255,_0.05),_0_-1px_0_rgba(255,_255,_255,_0.05)] min-w-[68px] z-[1]">
                        Portfolio
                      </a>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="flex-1 flex flex-row items-start justify-start pt-[9px] px-[38px] pb-[11px] relative gap-1">
                    <Img
                      className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src={Images.imgVector_2}
                    />
                    <Img
                      className="h-6 w-6 relative object-contain z-[1]"
                      loading="lazy"
                      alt=""
                      src={Images.imgFrame_31}
                    />
                    <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                      <b className="relative inline-block [text-shadow:1px_0_0_rgba(255,_255,_255,_0.05),_0_1px_0_rgba(255,_255,_255,_0.05),_-1px_0_0_rgba(255,_255,_255,_0.05),_0_-1px_0_rgba(255,_255,_255,_0.05)] min-w-[97px] z-[1]">
                        Marketplace
                      </b>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="flex-1 flex flex-row items-start justify-start pt-[9px] px-[38px] pb-[11px] relative gap-1">
                    <Img
                      className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full cursor-pointer"
                      alt=""
                      src={Images.imgVector_2}
                      onClick={onVectorClick1}
                    />
                    <Img
                      className="h-6 w-6 relative object-contain z-[1]"
                      loading="lazy"
                      alt=""
                      src={Images.imgIconlyBoldDocument1}
                    />
                    <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                      <b className="relative inline-block [text-shadow:1px_0_0_rgba(255,_255,_255,_0.05),_0_1px_0_rgba(255,_255,_255,_0.05),_-1px_0_0_rgba(255,_255,_255,_0.05),_0_-1px_0_rgba(255,_255,_255,_0.05)] min-w-[90px] z-[1]">
                        Documents
                      </b>
                    </div>
                  </div>
                </div>
                <div
                  className="self-stretch flex flex-row items-start justify-start cursor-pointer"
                  onClick={onAnalyticsContainerClick}
                >
                  <div className="flex-1 flex flex-row items-start justify-start pt-[9px] px-[38px] pb-[11px] relative gap-1">
                    <Img
                      className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src={Images.imgVector_2}
                    />
                    <Img
                      className="h-6 w-6 relative object-contain z-[1]"
                      loading="lazy"
                      alt=""
                      src={Images.imgFrame_41}
                    />
                    <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                      <b className="relative inline-block [text-shadow:1px_0_0_rgba(255,_255,_255,_0.05),_0_1px_0_rgba(255,_255,_255,_0.05),_-1px_0_0_rgba(255,_255,_255,_0.05),_0_-1px_0_rgba(255,_255,_255,_0.05)] min-w-[74px] z-[1]">
                        Analytics
                      </b>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="flex-1 flex flex-row items-start justify-start pt-[9px] px-[38px] pb-[11px] relative gap-1">
                    <Img
                      className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src={Images.imgVector_2}
                    />
                    <Img
                      className="h-6 w-6 relative object-contain z-[1]"
                      loading="lazy"
                      alt=""
                      src={Images.imgFrame_51}
                    />
                    <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                      <b className="relative inline-block [text-shadow:1px_0_0_rgba(255,_255,_255,_0.05),_0_1px_0_rgba(255,_255,_255,_0.05),_-1px_0_0_rgba(255,_255,_255,_0.05),_0_-1px_0_rgba(255,_255,_255,_0.05)] min-w-[64px] z-[1]">
                        Support
                      </b>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="flex-1 flex flex-row items-start justify-start pt-[9px] px-[38px] pb-[11px] relative gap-1">
                    <Img
                      className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src={Images.imgVector_2}
                    />
                    <Img
                      className="h-6 w-6 relative overflow-hidden shrink-0 z-[1]"
                      loading="lazy"
                      alt=""
                      src={Images.imgFrame_6}
                    />
                    <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                      <b className="relative inline-block [text-shadow:1px_0_0_rgba(255,_255,_255,_0.05),_0_1px_0_rgba(255,_255,_255,_0.05),_-1px_0_0_rgba(255,_255,_255,_0.05),_0_-1px_0_rgba(255,_255,_255,_0.05)] min-w-[50px] z-[1]">
                        Wallet
                      </b>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="flex-1 flex flex-row items-start justify-start pt-[9px] px-[38px] pb-[11px] relative gap-1">
                    <Img
                      className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src={Images.imgVector_2}
                    />
                    <Img
                      className="h-6 w-6 relative object-contain z-[1]"
                      loading="lazy"
                      alt=""
                      src={Images.imgFrame_71}
                    />
                    <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                      <b className="relative inline-block [text-shadow:1px_0_0_rgba(255,_255,_255,_0.05),_0_1px_0_rgba(255,_255,_255,_0.05),_-1px_0_0_rgba(255,_255,_255,_0.05),_0_-1px_0_rgba(255,_255,_255,_0.05)] min-w-[69px] z-[1]">
                        Tokenize
                      </b>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="flex-1 flex flex-row items-start justify-start pt-[9px] px-[38px] pb-[11px] relative gap-1">
                    <Img
                      className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src={Images.imgVector_2}
                    />
                    <Img
                      className="h-6 w-6 relative object-contain z-[1]"
                      loading="lazy"
                      alt=""
                      src={Images.imgIconlyBoldSetting1}
                    />
                    <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                      <b className="relative inline-block [text-shadow:1px_0_0_rgba(255,_255,_255,_0.05),_0_1px_0_rgba(255,_255,_255,_0.05),_-1px_0_0_rgba(255,_255,_255,_0.05),_0_-1px_0_rgba(255,_255,_255,_0.05)] min-w-[67px] z-[1]">
                        Settings
                      </b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-3xl border-gray1-2300 border-[1px] border-solid flex flex-row items-end justify-start py-2 px-[9px] gap-1 text-xs">
            <div className="h-[43px] w-[45px] relative rounded-23xl bg-silver-100">
              <div className="absolute top-[0px] left-[0px] rounded-23xl bg-silver-100 w-full h-full hidden" />
              <div className="absolute top-[0px] left-[0px] rounded-23xl bg-silver-100 w-full h-full z-[1]" />
              <Img
                className="absolute top-[0px] left-[0px] rounded-23xl w-full h-full object-cover z-[2]"
                loading="lazy"
                alt=""
                src={Images.imgImage1}
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-1.5">
              <div className="self-stretch flex flex-col items-start justify-start gap-px">
                <div className="self-stretch relative font-semibold">
                  {name}
                </div>
                <div className="relative text-3xs text-gainsboro-500 inline-block min-w-[127px]">
                  0x1a2B3c4D5e6F7g8H9i0J
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[13.1px]">
              <Img
                className="w-[17.3px] h-[16.7px] relative object-cover"
                loading="lazy"
                alt=""
                src={Images.imgGroup1}
              />
            </div>
          </div>
        </nav>
      </div>
      <main className="flex-1 flex flex-col items-start justify-start gap-7 max-w-[calc(100%_-_255px)] mq975:max-w-full">
        <MainContent propertyOwner={name} />
        <MyAssetsOverview />
      </main>
    </div>
  );
};

export default OwnerDashboard;
