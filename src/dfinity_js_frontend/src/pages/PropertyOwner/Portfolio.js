import react from "react";
import SideBarNav from "../../components/PropertyOwner/SideBarNav";
import AssetsPortfolio from "../../components/PropertyOwner/AssetsPortfolio";

const Portfolio = () => {
  return (
    <div className="w-full relative bg-gray1-400 flex flex-row items-start justify-start pt-[30px] pb-[108px] pl-[30px] pr-[23px] box-border gap-[30px] leading-[normal] tracking-[normal] mq750:gap-[15px]">
      <SideBarNav
        frameNavAlignSelf="unset"
        frameNavWidth="227px"
        frameDivPadding="0px 10px 0px 12px"
        frameDivFlex="1"
        assetOwnerDisplay="inline-block"
        assetOwnerMinWidth="96px"
        vector="/vector1.svg"
        vectorIconLeft="18.2px"
        overviewDisplay="inline-block"
        overviewMinWidth="70px"
        portfolioDisplay="inline-block"
        portfolioMinWidth="68px"
        marketplaceDisplay="inline-block"
        marketplaceMinWidth="97px"
        documentsHeight="unset"
        documentsMinWidth="90px"
        analyticsDisplay="inline-block"
        analyticsMinWidth="74px"
        supportDisplay="inline-block"
        supportMinWidth="64px"
        walletDisplay="inline-block"
        walletMinWidth="50px"
        tokenizeDisplay="inline-block"
        tokenizeMinWidth="69px"
        settingsDisplay="inline-block"
        settingsMinWidth="67px"
        x1a2B3c4D5e6F7g8H9i0JDisplay="inline-block"
        x1a2B3c4D5e6F7g8H9i0JMinWidth="127px"
      />
      <main className="flex-1 rounded-23xl bg-gray1-1000 overflow-hidden flex flex-col items-start justify-start pt-10 px-[55px] pb-[39px] box-border gap-[23.7px] max-w-[calc(100%_-_257px)] text-left text-9xl text-shades-white font-manrope mq1025:max-w-full mq750:pt-5 mq750:pb-5 mq750:box-border mq1125:pt-[26px] mq1125:px-[27px] mq1125:pb-[25px] mq1125:box-border">
        <div className="flex flex-col items-start justify-start gap-1">
          <h1 className="m-0 relative text-inherit leading-[140%] font-semibold font-[inherit] inline-block min-w-[116px] mq450:text-3xl mq450:leading-[31px]">
            Portfolio
          </h1>
          <div className="relative text-base leading-[140%] text-text-light">
            Thursday 2 May, 2024
          </div>
        </div>
        <img
          className="w-[646px] relative max-h-full max-w-full"
          loading="lazy"
          alt=""
          src="/divider1.svg"
        />
        <div className="w-[555px] rounded-23xl bg-light-black flex flex-col items-center justify-start pt-6 px-5 pb-10 box-border gap-8 max-w-full text-xl mq450:gap-4">
          <div className="w-[372px] flex flex-col items-center justify-center pt-0 px-0 pb-0 box-border gap-4 max-w-full">
            <div className="w-[318px] flex flex-row items-center justify-between gap-5">
              <h3 className="m-0 relative text-inherit leading-[140%] font-semibold font-[inherit] mq450:text-base mq450:leading-[22px]">
                Asset Allocation
              </h3>
              <div className="w-[98px] rounded-lg bg-amber-600 border-darkslategray-200 border-[1px] border-solid box-border flex flex-row items-center justify-start py-1.5 px-[13px] gap-2.5 text-sm text-shades-black">
                <img
                  className="h-5 w-5 relative min-h-[20px]"
                  alt=""
                  src="/iconoutlinearrowiosdown.svg"
                />
                <div className="relative leading-[130%] font-medium inline-block min-w-[40px]">
                  Today
                </div>
              </div>
            </div>
            <img
              className="self-stretch relative max-w-full overflow-hidden max-h-full"
              alt=""
              src="/divider-1.svg"
            />
          </div>
          <div className="flex flex-row items-start justify-start py-0 pl-[31px] pr-8 box-border max-w-full text-sm">
            <div className="flex flex-row items-start justify-start gap-[27px] mq750:flex-wrap">
              <img
                className="h-44 w-44 relative mq750:flex-1"
                loading="lazy"
                alt=""
                src="/circle.svg"
              />
              <div className="flex flex-col items-start justify-start pt-[16.5px] px-0 pb-0 box-border min-w-[106px] mq750:flex-1">
                <div className="flex flex-col items-start justify-start gap-4">
                  <div className="flex flex-col items-start justify-start gap-px">
                    <div className="flex flex-row items-start justify-start gap-[9px]">
                      <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                        <div className="w-[18px] h-[18px] relative rounded-[50%] bg-amber-600" />
                      </div>
                      <div className="relative leading-[130%] font-medium inline-block min-w-[32px]">
                        Land
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start py-0 pl-[27px] pr-0 text-xs text-text-light">
                      <div className="relative leading-[17px] inline-block min-w-[76px]">
                        200 Investors
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-px">
                    <div className="flex flex-row items-start justify-start gap-[9px]">
                      <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                        <div className="w-[18px] h-[18px] relative rounded-[50%] bg-accents-orange" />
                      </div>
                      <div className="relative leading-[130%] font-medium inline-block min-w-[79px]">
                        Apartments
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start py-0 pl-[27px] pr-[7px] text-xs text-text-light">
                      <div className="relative leading-[17px] inline-block min-w-[72px]">
                        122 Investors
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-px">
                    <div className="flex flex-row items-start justify-start gap-[9px]">
                      <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                        <div className="w-[18px] h-[18px] relative rounded-[50%] bg-accents-blue" />
                      </div>
                      <div className="relative leading-[130%] font-medium inline-block min-w-[52px]">
                        Condos
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start py-0 pl-[27px] pr-0 text-xs text-text-light">
                      <div className="relative leading-[17px] inline-block min-w-[75px]">
                        264 Investors
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AssetsPortfolio />
      </main>
    </div>
  );
};

export default Portfolio;
