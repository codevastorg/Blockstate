import React, { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SideBarNav from "../../components/PropertyOwner/SideBarNav";
import BalanceOVerview from "../../components/PropertyOwner/BalanceOVerview";
import Row from "../../components/PropertyOwner/Row";
import {
  getInvestmentsByPropertyOwner,
  getAllOfferings,
} from "../../utils/propertyTokenization";
import { Img } from "../../components/Img";
import * as Images from "../../assets/images";

const Wallet = () => {
  const [investments, setInvestments] = useState([0]);
  const [offerings, setOfferings] = useState([]);
  const navigate = useNavigate();

  const onVectorClick = useCallback(() => {
    navigate("/portfolio");
  }, [navigate]);

  const onMarketplaceContainerClick = useCallback(() => {
    navigate("/marketplace");
  }, [navigate]);

  const onVectorClick1 = useCallback(() => {
    navigate("/documents");
  }, [navigate]);

  // Function to get all offerings
  useEffect(() => {
    async function fetchOfferings() {
      try {
        const response = await getAllOfferings();
        if (response?.Ok && Array.isArray(response.Ok)) {
          console.log("Offerings:", response.Ok);
          setOfferings(response.Ok);
        } else {
          console.error(
            "Error fetching offerings:",
            response?.Err || "Unexpected response"
          );
        }
      } catch (error) {
        console.error("Error fetching offerings:", error);
        toast.error("Error fetching offerings.");
      } finally {
      }
    }

    fetchOfferings();
  }, []);

  // Function to get investments by property owner
  const propertyOwnerId = offerings.map((offering) => offering.propertyOwnerId);
  const fetchInvestments = useCallback(async () => {
    try {
      const investments = await getInvestmentsByPropertyOwner(propertyOwnerId);
      console.log("Investments:", investments.ok);
      setInvestments(investments.ok);
    } catch (error) {
      console.error("Error getting investments:", error);
    }
  }, []);

  useEffect(() => {
    fetchInvestments();
  }, []);

  return (
    <div className="w-full relative bg-gray1-400 flex flex-row items-start justify-start pt-[19px] pb-[73px] pl-[39px] pr-[33px] box-border gap-[38px] leading-[normal] tracking-[normal] mq800:gap-[19px]">
      <div className="w-[227px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border mq1125:hidden">
        <SideBarNav
          vector={Images.imgVector11}
          onVectorClick={onVectorClick}
          onMarketplaceContainerClick={onMarketplaceContainerClick}
          onVectorClick1={onVectorClick1}
        />
      </div>
      <main className="flex-1 rounded-23xl bg-gray1-1000 overflow-hidden flex flex-col items-start justify-start pt-[54px] pb-[73px] pl-[31px] pr-[30px] box-border gap-[37px] max-w-[calc(100%_-_265px)] mq800:gap-[18px] mq800:pt-[23px] mq800:pb-[31px] mq800:box-border mq1125:pt-[35px] mq1125:pb-[47px] mq1125:box-border mq1125:max-w-full">
        <section className="w-[1419px] flex flex-row items-start justify-between max-w-full gap-5 text-left text-sm text-gold font-manrope mq1300:flex-wrap">
          <div className="h-[191px] w-[717px] relative shadow-[0px_9px_22px_rgba(0,_0,_0,_0.12)] rounded-11xl [background:linear-gradient(258.35deg,_#b469ff_0.01%,_#8555c1)] max-w-full z-[1]">
            <Img
              className="absolute top-[0px] left-[calc(50%_-_358.5px)] rounded-11xl w-full h-full hidden"
              alt=""
              src={Images.imgBackground2}
            />
            <div className="absolute top-[0px] left-[calc(50%_-_358.5px)] shadow-[0px_4px_24px_rgba(0,_0,_0,_0.25)] rounded-11xl [background:linear-gradient(258.22deg,_#fff,_#f8f8ff_0.01%,_#f8f8ff)] w-full h-full overflow-hidden z-[1]">
              <Img
                className="absolute top-[-196px] left-[calc(50%_-_483.3px)] w-[1501.5px] h-[535.7px] object-contain"
                alt=""
                src={Images.imgWaveElements}
              />
              <div className="absolute top-[140px] left-[55px] tracking-[0.2em] font-semibold inline-block w-[308.8px] z-[2]">
                444 221 224 ***
              </div>
              <Img
                className="absolute top-[135px] left-[547.8px] w-[103.6px] h-[30px] z-[2]"
                loading="lazy"
                alt=""
                src={Images.imgLogo}
              />
              <div className="absolute top-[55px] left-[52.9px] text-9xl font-semibold text-shades-white inline-block w-[317.3px] whitespace-nowrap z-[2] mq450:text-3xl">
                $45.500,12
              </div>
              <a className="[text-decoration:none] absolute top-[34px] left-[52.9px] text-gray1-1900 inline-block w-[173.4px] z-[2]">
                Main Wallet
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
            <button className="cursor-pointer [border:none] py-[21px] px-[51px] bg-amber-600 rounded-[70px] flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-darkgoldenrod-200 mq450:pl-5 mq450:pr-5 mq450:box-border">
              <a className="[text-decoration:none] h-[27px] relative text-xl font-semibold font-manrope text-gray1-1000 text-right inline-block">
                + Connect Wallet
              </a>
            </button>
          </div>
        </section>
        <section className="self-stretch flex flex-row items-start justify-start gap-[21px] max-w-full text-left text-xl text-shades-white font-manrope mq1300:flex-wrap">
          <BalanceOVerview />
          <div className="h-[734px] flex-1 relative min-w-[478px] max-w-full mq800:h-auto mq800:min-h-[734] mq800:min-w-full">
            <div className="absolute top-[0px] left-[0px] shadow-[0px_12px_23px_rgba(62,_73,_84,_0.04)] rounded-11xl bg-light-black w-full flex flex-col items-end justify-start pt-[30px] px-2 pb-[41px] box-border gap-[39px] max-w-full z-[1] mq800:gap-[19px]">
              <div className="w-[736px] h-[704px] relative shadow-[0px_12px_23px_rgba(62,_73,_84,_0.04)] rounded-11xl bg-light-black hidden max-w-full" />
              <div className="w-[709px] flex flex-row items-start justify-end py-0 px-7 box-border max-w-full">
                <div className="flex-1 flex flex-row items-end justify-between max-w-full gap-5 mq800:flex-wrap">
                  <div className="flex flex-col items-start justify-start">
                    <a className="[text-decoration:none] h-[54px] relative font-medium text-[inherit] inline-block shrink-0 [debug_commit:0448091] z-[2] mq450:text-base">
                      <p className="m-0">Wallet Activity</p>
                    </a>
                    <div className="flex flex-row items-start justify-start py-0 pl-px pr-0 mt-[-17px] text-xs">
                      <div className="relative shrink-0 [debug_commit:0448091] z-[3]">
                        Lorem ipsum dolor sit amet, consectetur
                      </div>
                    </div>
                  </div>
                  <div className="w-[253px] flex flex-col items-start justify-end pt-0 px-0 pb-px box-border text-sm">
                    <div className="self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
                      <div className="flex flex-col items-start justify-start pt-3.5 px-0 pb-0">
                        <div className="relative font-medium z-[2]">
                          Monthly
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-3.5 px-0 pb-0">
                        <a className="[text-decoration:none] relative font-medium text-[inherit] z-[2]">
                          Weekly
                        </a>
                      </div>
                      <button className="cursor-pointer [border:none] pt-3.5 px-[25px] pb-[15px] bg-amber-600 w-[94px] rounded-32xl flex flex-row items-start justify-start box-border z-[2] hover:bg-darkgoldenrod-200">
                        <div className="h-12 w-[94px] relative rounded-32xl bg-amber-600 hidden" />
                        <div className="relative text-sm font-medium font-manrope text-gray1-1000 text-left z-[1]">
                          Today
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start max-w-full text-base">
                <div className="self-stretch shadow-[0px_0px_10px_rgba(223,_195,_43,_0.4)_inset] rounded-11xl bg-light-black flex flex-col items-start justify-start pt-[13px] pb-0 pl-0 pr-1.5 box-border gap-[13px] max-w-full z-[3]">
                  <div className="self-stretch h-[90px] relative shadow-[0px_0px_10px_rgba(223,_195,_43,_0.4)_inset] rounded-11xl bg-light-black hidden" />
                  <div className="w-[686px] flex flex-row items-start justify-start py-0 px-[30px] box-border max-w-full">
                    <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq800:flex-wrap">
                      <div className="flex flex-row items-start justify-start py-0 pl-0 pr-[22px] gap-5 mq450:flex-wrap">
                        <div className="w-[63px] rounded-sm border-goldenrod-500 border-[4px] border-solid box-border flex flex-row items-start justify-start py-[15px] px-[25px] z-[1]">
                          <div className="h-[63px] w-[63px] relative rounded-sm border-goldenrod-500 border-[4px] border-solid box-border hidden" />
                          <Img
                            className="h-6 w-[11.6px] relative object-contain z-[1]"
                            loading="lazy"
                            alt=""
                            src={Images.imgVector_101}
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start pt-5 px-0 pb-0">
                          <div className="h-[22px] relative font-semibold inline-block z-[1]">
                            Withdraw
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-5 px-0 pb-0">
                        <div className="relative whitespace-nowrap z-[1]">
                          06:24:45 AM
                        </div>
                      </div>
                      <div className="w-[76px] flex flex-col items-start justify-start pt-5 pb-0 pl-0 pr-5 box-border">
                        <div className="relative font-medium z-[1]">-$542</div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-5 px-0 pb-0 text-right text-darkgray-300">
                        <div className="relative font-medium z-[1]">
                          Pending
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-px relative rounded-12xs bg-shades-white border-goldenrod-600 border-[1px] border-solid box-border z-[1]" />
                </div>
                <div className="self-stretch rounded-12xs bg-light-black border-shades-white border-[1px] border-solid box-border flex flex-row items-start justify-between pt-[11px] pb-3 pl-[30px] pr-[46px] max-w-full gap-5 z-[2] mq800:flex-wrap mq800:pr-[23px] mq800:box-border">
                  <div className="h-[90px] w-[713px] relative rounded-12xs bg-light-black border-shades-white border-[1px] border-solid box-border hidden max-w-full" />
                  <div className="h-px w-[713px] relative rounded-12xs bg-shades-white border-goldenrod-600 border-[1px] border-solid box-border hidden max-w-full" />
                  <div className="w-[187px] flex flex-row items-start justify-start py-0 pl-0 pr-[57px] box-border gap-[19px] text-black">
                    <div className="flex-1 rounded-sm border-goldenrod-500 border-[4px] border-solid flex flex-row items-start justify-start py-[15px] px-[25px] z-[1]">
                      <div className="h-[63px] w-[63px] relative rounded-sm border-goldenrod-500 border-[4px] border-solid box-border hidden" />
                      <Img
                        className="h-6 w-[11.6px] relative object-contain z-[1]"
                        loading="lazy"
                        alt=""
                        src={Images.imgVector_111}
                      />
                    </div>
                    <div className="w-12 flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border">
                      <div className="self-stretch h-[22px] relative">
                        <div className="absolute top-[0px] left-[0px] font-semibold inline-block w-full h-full z-[1]">
                          Topup
                        </div>
                        <div className="absolute top-[0px] left-[0px] font-semibold text-shades-white inline-block w-full h-full z-[2]">
                          Topup
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-5 px-0 pb-0">
                    <div className="relative whitespace-nowrap z-[1]">
                      06:24:45 AM
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-5 pb-0 pl-0 pr-5">
                    <div className="relative font-medium z-[1]">+$5,553</div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-5 px-0 pb-0 text-right text-limegreen-200">
                    <div className="relative font-medium z-[1]">Completed</div>
                  </div>
                </div>
                <Row
                  row02Padding="11px 51px 12px 30px"
                  row02Border="1px solid #fff"
                  backgroundBorder="1px solid #fff"
                  propBackgroundColor="#fff"
                  frameDivWidth="unset"
                  icBuyFlex="unset"
                  icBuyWidth="63px"
                  vector={Images.imgVector_101}
                  topup="Wihtdraw"
                  topupHeight="22px"
                  topupDisplay="inline-block"
                  frameDivWidth1="66px"
                  prop="-$912"
                  completed="Canceled"
                  propColor="#ff3e3e"
                />
                <Row
                  row02Padding="11px 45px 12px 30px"
                  row02Border="1px solid #fff"
                  backgroundBorder="1px solid #fff"
                  propBackgroundColor="#fff"
                  frameDivWidth="187px"
                  icBuyFlex="1"
                  icBuyWidth="unset"
                  vector={Images.imgVector_111}
                  topup="Topup"
                  topupHeight="unset"
                  topupDisplay="unset"
                  frameDivWidth1="82px"
                  prop="+$7,762"
                  completed="Completed"
                  propColor="#2bc155"
                />
                <Row
                  vector={Images.imgVector_111}
                  topup="Topup"
                  prop="+$5,553"
                  completed="Completed"
                />
                <Row
                  row02Padding="11px 51px 12px 30px"
                  row02Border="1px solid rgba(223, 195, 43, 0.5)"
                  backgroundBorder="1px solid rgba(223, 195, 43, 0.5)"
                  propBackgroundColor="rgba(223, 195, 43, 0.5)"
                  frameDivWidth="unset"
                  icBuyFlex="unset"
                  icBuyWidth="63px"
                  vector={Images.imgVector_101}
                  topup="Withdraw"
                  topupHeight="22px"
                  topupDisplay="inline-block"
                  frameDivWidth1="66px"
                  prop="-$912"
                  completed="Canceled"
                  propColor="#ff3e3e"
                />
              </div>
            </div>
            <div className="absolute top-[684px] left-[352px] shadow-[0px_4px_19px_rgba(0,_0,_0,_0.25)] rounded-31xl bg-aliceblue-200 w-[50px] h-[50px] z-[2]">
              <div className="absolute top-[0px] left-[calc(50%_-_25px)] shadow-[0px_4px_19px_rgba(0,_0,_0,_0.25)] rounded-31xl bg-aliceblue-200 w-full h-full hidden" />
              <Img
                className="absolute top-[5px] left-[calc(50%_-_20px)] w-10 h-10 overflow-hidden object-contain z-[1]"
                loading="lazy"
                alt=""
                src={Images.imgIcChevron2}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Wallet;
