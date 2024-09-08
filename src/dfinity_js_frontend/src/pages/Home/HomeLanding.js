import React from "react";
import Page from "../../components/HomeLanding/Page";
import PropertyCard1 from "../../components/HomeLanding/PropertyCard1";
import PropertyCard from "../../components/HomeLanding/PropertyCard";
import FooterInfo from "../../components/Footer/FooterInfo";
import { Img } from "../../components/Img";
import * as Images from "../../assets/images";

const HomeLanding = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray1-400 pt-5 px-0 pb-0 box-border gap-14 leading-[normal] tracking-[normal]">
      <main className="w-[1422.5px] flex flex-row items-start justify-center py-0 px-7 box-border max-w-full">
        <section className="flex-1 flex flex-col items-center justify-center gap-[68px] max-w-full text-center text-29xl text-aliceblue-100 font-manrope mq750:gap-[34px] mq450:gap-[17px]">
          <Page />
          <div className="self-stretch flex flex-row items-center justify-center py-0 pl-1 pr-0 box-border max-w-full">
            <div className="flex-1 rounded-23xl bg-gray1-1000 overflow-hidden flex flex-col items-center justify-start pt-[42px] pb-[72px] pl-[59px] pr-[61px] box-border gap-[62px] max-w-full lg:pt-[27px] lg:pb-[47px] lg:pl-[29px] lg:pr-[30px] lg:box-border mq750:gap-[31px] mq750:pb-5 mq750:box-border mq1050:pt-5 mq1050:pb-[31px] mq1050:box-border mq450:gap-[15px]">
              <div className="self-stretch flex flex-row items-start justify-end pt-0 pb-1.5 pl-0 pr-0.5 box-border max-w-full">
                <div className="flex-1 flex flex-row items-start justify-start flex-wrap content-start gap-2.5 max-w-full">
                  <h1 className="m-0 flex-1 relative text-inherit leading-[56px] font-semibold font-[inherit] inline-block min-w-[201px] max-w-full mq1050:text-19xl mq1050:leading-[45px] mq450:text-10xl mq450:leading-[34px]">
                    Residential
                  </h1>
                  <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 text-lg text-shades-white">
                    <div className="rounded-xl border-amber-100 border-[1.5px] border-solid flex flex-row items-start justify-start py-2.5 pl-3.5 pr-2.5 gap-0.5">
                      <div className="relative leading-[26px]">
                        <span>{`Sort order: `}</span>
                        <span className="font-medium">Anytime</span>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                        <Img
                          className="w-6 h-6 relative"
                          alt=""
                          src={Images.imgAngledown2}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-end justify-start gap-[63px] max-w-full mq750:gap-[31px] mq450:gap-4">
                <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-x-10 gap-y-[30px] min-h-[1008px] max-w-full">
                  <PropertyCard1
                    cardBackground={Images.imgCardBackground}
                    prop="£22,250"
                    penthouse="Penthouse"
                    manchesterCity="Manchester city"
                    bedroomPlaceholder="3"
                    bathroomPlaceholder="2"
                    carousels={Images.imgCarousels}
                    forSale="Sold Out"
                  />
                  <PropertyCard
                    rectangle34624569={Images.imgRectangle_34624569_1}
                    prop="£654,250"
                    semiDetachedHouse="Semi detached house"
                    southfieldRoadOxfordOX4="Southfield Road, Oxford OX4"
                    prop1="3"
                    semiFurnished="Semi-furnished"
                    carousels={Images.imgCarousels_1}
                    forSale="Coming soon"
                  />
                  <PropertyCard1
                    propFlex="1"
                    propMinWidth="372px"
                    propBorderRadius="30px"
                    propAlignSelf="stretch"
                    propWidth="unset"
                    cardBackground={Images.imgRectangle_34624569_2}
                    propBorderRadius1="12px"
                    propBorderRadius2="unset"
                    prop="£926,250"
                    propColor="#fff"
                    penthouse="Bungalow"
                    manchesterCity="Leeds city center"
                    propBorder="1px solid rgba(230, 232, 239, 0.1)"
                    bedroomPlaceholder="3"
                    bathroomPlaceholder="2"
                    propMinWidth1="100px"
                    propFontWeight="unset"
                    propBackgroundColor="#000"
                    propBorderRadius3="0px 12px 12px 0px"
                    carousels={Images.imgCarousels_2}
                    forSale="Live"
                    propColor1="#fff"
                    propMinWidth2="24px"
                    propFontWeight1="unset"
                    propTextDecoration="unset"
                  />
                  <PropertyCard1
                    propFlex="1"
                    propMinWidth="372px"
                    propBorderRadius="unset"
                    propAlignSelf="stretch"
                    propWidth="unset"
                    cardBackground={Images.imgCardBackground}
                    propBorderRadius1="30px"
                    propBorderRadius2="unset"
                    prop="£22,250"
                    propColor="#fff"
                    penthouse="Penthouse"
                    manchesterCity="Manchester city"
                    propBorder="1px solid rgba(255, 255, 255, 0.4)"
                    bedroomPlaceholder="3"
                    bathroomPlaceholder="2"
                    propMinWidth1="106px"
                    propFontWeight="unset"
                    propBackgroundColor="#000"
                    propBorderRadius3="0px 12px 12px 0px"
                    carousels={Images.imgCarousels_2}
                    forSale="Live"
                    propColor1="#fff"
                    propMinWidth2="24px"
                    propFontWeight1="unset"
                    propTextDecoration="unset"
                  />
                  <PropertyCard1
                    propFlex="1"
                    propMinWidth="372px"
                    propBorderRadius="unset"
                    propAlignSelf="stretch"
                    propWidth="unset"
                    cardBackground={Images.imgRectangle_34624569_1 }
                    propBorderRadius1="30px"
                    propBorderRadius2="30px"
                    prop="£654,250"
                    propColor="#fff"
                    penthouse="Semi detached house"
                    manchesterCity="Southfield Road, Oxford OX4"
                    propBorder="1px solid rgba(230, 232, 239, 0.1)"
                    bedroomPlaceholder="3"
                    bathroomPlaceholder="2"
                    propMinWidth1="100px"
                    propFontWeight="unset"
                    propBackgroundColor="#000"
                    propBorderRadius3="30px"
                    carousels={Images.imgCarousels_2}
                    forSale="Live"
                    propColor1="#fff"
                    propMinWidth2="24px"
                    propFontWeight1="unset"
                    propTextDecoration="unset"
                  />
                  <PropertyCard
                    propFlex="1"
                    propMinWidth="372px"
                    propBorderRadius="30px"
                    rectangle34624569={Images.imgRectangle_34624569_2 }
                    propBorderRadius1="12px"
                    propBorderRadius2="unset"
                    prop="£926,250"
                    propColor="#fff"
                    semiDetachedHouse="Bungalow"
                    southfieldRoadOxfordOX4="Leeds city center"
                    prop1="3"
                    semiFurnished="Semi-furnished"
                    propMinWidth1="100px"
                    propBackgroundColor="#b6af9d"
                    propBorderRadius3="30px"
                    carousels={Images.imgCarousels_1}
                    forSale="Coming soon"
                    propMinWidth2="77px"
                  />
                </div>
                <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-2.5 max-w-full">
                  <h1 className="m-0 flex-1 relative text-inherit leading-[56px] font-semibold font-[inherit] inline-block min-w-[216px] max-w-full mq1050:text-19xl mq1050:leading-[45px] mq450:text-10xl mq450:leading-[34px]">
                    Commercial
                  </h1>
                  <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 text-lg text-shades-white">
                    <div className="rounded-xl border-amber-100 border-[1.5px] border-solid flex flex-row items-start justify-start py-2.5 pl-3.5 pr-2.5 gap-0.5">
                      <div className="relative leading-[26px]">
                        <span>{`Sort order: `}</span>
                        <span className="font-medium">Anytime</span>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                        <Img
                          className="w-6 h-6 relative"
                          alt=""
                          src={Images.imgAngledown2}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[21px] box-border max-w-full">
                <div className="flex-1 grid flex-row items-start justify-start gap-[31px] max-w-full grid-cols-[repeat(3,_minmax(295px,_1fr))] mq750:gap-[15px] mq750:grid-cols-[minmax(295px,_1fr)] mq1050:justify-center mq1050:grid-cols-[repeat(2,_minmax(295px,_511px))]">
                  <PropertyCard1
                    propFlex="unset"
                    propMinWidth="300px"
                    propBorderRadius="unset"
                    propAlignSelf="stretch"
                    propWidth="unset"
                    cardBackground={Images.imgRectangle_34624569_6}
                    propBorderRadius1="30px"
                    propBorderRadius2="unset"
                    prop="£107,250"
                    propColor="#fff"
                    penthouse="Bungalow"
                    manchesterCity="Leeds city center"
                    propBorder="1px solid rgba(230, 232, 239, 0.1)"
                    bedroomPlaceholder="4"
                    bathroomPlaceholder="4"
                    propMinWidth1="100px"
                    propFontWeight="unset"
                    propBackgroundColor="#000"
                    propBorderRadius3="0px 12px 12px 0px"
                    carousels={Images.imgCarousels_2}
                    forSale="Live"
                    propColor1="#fff"
                    propMinWidth2="24px"
                    propFontWeight1="unset"
                    propTextDecoration="unset"
                  />
                  <PropertyCard
                    propFlex="unset"
                    propMinWidth="300px"
                    propBorderRadius="unset"
                    rectangle34624569={Images.imgRectangle_34624569_7}
                    propBorderRadius1="30px"
                    propBorderRadius2="unset"
                    prop="£829,250"
                    propColor="#fff"
                    semiDetachedHouse="Penthouse"
                    southfieldRoadOxfordOX4="Manchester city"
                    prop1="1"
                    semiFurnished="Unfurnished"
                    propMinWidth1="81px"
                    propBackgroundColor="#e8ae00"
                    propBorderRadius3="0px 12px 12px 0px"
                    carousels={Images.imgCarousels}
                    forSale="Sold out"
                    propMinWidth2="49px"
                    tagsDisabled
                  />
                  <PropertyCard1
                    propFlex="unset"
                    propMinWidth="300px"
                    propBorderRadius="unset"
                    propAlignSelf="stretch"
                    propWidth="unset"
                    cardBackground={Images.imgRectangle_34624569_8}
                    propBorderRadius1="30px"
                    propBorderRadius2="unset"
                    prop="£100,250"
                    propColor="#fff"
                    penthouse="Semi detached house"
                    manchesterCity="Southfield Road, Oxford OX4"
                    propBorder="1px solid rgba(230, 232, 239, 0.1)"
                    bedroomPlaceholder="3"
                    bathroomPlaceholder="2"
                    propMinWidth1="100px"
                    propFontWeight="unset"
                    propBackgroundColor="#000"
                    propBorderRadius3="0px 12px 12px 0px"
                    carousels={Images.imgCarousels_2}
                    forSale="Live"
                    propColor1="#fff"
                    propMinWidth2="24px"
                    propFontWeight1="unset"
                    propTextDecoration="unset"
                  />
                </div>
              </div>
              <div className="w-[120px] flex flex-row items-start justify-start gap-2">
                <div className="flex-1 [filter:drop-shadow(0px_20px_24px_rgba(255,_235,_176,_0.04))_drop-shadow(0px_8px_11px_rgba(45,_54,_67,_0.04))] rounded-xl border-amber-600 border-[1.5px] border-solid flex flex-row items-center justify-center p-3.5 opacity-[0.2]">
                  <Img
                    className="h-6 w-6 relative"
                    alt=""
                    src={Images.imgAngleleft}
                  />
                </div>
                <div className="flex-1 [filter:drop-shadow(0px_20px_24px_rgba(255,_235,_176,_0.04))_drop-shadow(0px_8px_11px_rgba(45,_54,_67,_0.04))] rounded-xl border-amber-600 border-[1.5px] border-solid flex flex-row items-center justify-center p-3.5">
                  <Img
                    className="h-6 w-6 relative"
                    alt=""
                    src={Images.imgAngleright}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="self-stretch h-[361px] overflow-hidden shrink-0 flex flex-col items-start justify-start relative gap-2.5 max-w-full z-[1] text-left text-lg text-gray-300 font-body-copy-b4-medium mq750:h-auto">
        <Img
          className="w-[1569px] h-[535px] absolute !m-[0] top-[-135px] left-[-65px] overflow-hidden shrink-0"
          alt=""
          src={Images.imgBuildingIllustration1}
        />
        <div className="mt-[-135px] self-stretch flex flex-col items-center justify-start pt-[259.5px] px-5 pb-[90.5px] box-border relative gap-[55px] shrink-0 [debug_commit:0448091] max-w-full mq750:gap-[27px] mq750:pt-[169px] mq750:pb-[59px] mq750:box-border">
          <div className="w-[1440px] h-[181px] hidden flex-col items-center justify-center pt-[100px] px-0 pb-14 box-border relative max-w-full z-[0] mq750:h-auto mq750:min-h-[181]">
            <div className="w-[710px] !m-[0] absolute top-[-176px] left-[calc(50%_-_355px)] shadow-[0px_20px_24px_-4px_rgba(255,_235,_176,_0.04),_0px_8px_11px_-4px_rgba(45,_54,_67,_0.04)] rounded-xl bg-shades-white hidden flex-col items-start justify-start p-4 box-border max-w-full z-[0]">
              <div className="self-stretch rounded-xl border-amber-100 border-[1.5px] border-solid box-border flex flex-row items-center justify-start py-0 pl-[13px] pr-0 gap-2.5 max-w-full mq750:flex-wrap mq750:pt-[13px] mq750:pr-[13px] mq750:pb-[13px] mq750:box-border">
                <div className="flex-1 flex flex-row items-center justify-start min-w-[230px] max-w-full">
                  <div className="h-[26px] relative leading-[26px] flex items-center">{`Subscribe to our newsletter `}</div>
                  <div className="h-[22.5px] w-[0.5px] relative border-gray-200 border-r-[0.5px] border-solid box-border opacity-[0]" />
                </div>
                <div className="h-[50px] rounded-xl bg-amber-600 flex flex-row items-center justify-center py-3 px-4 box-border gap-2 text-center text-shades-black">
                  <div className="self-stretch relative leading-[26px] font-medium flex items-center justify-center">
                    Subscribe
                  </div>
                  <Img
                    className="h-6 w-6 relative"
                    alt=""
                    src={Images.imgAngleright1}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[544px] absolute !m-[0] right-[0px] bottom-[-48px] left-[0px] bg-shades-black z-[1]" />
          <div className="w-[1242px] h-px relative border-gray-400 border-t-[1px] border-solid box-border max-w-full z-[2]" />
          <FooterInfo />
        </div>
      </footer>
    </div>
  );
};

export default HomeLanding;
