import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useMemo, useCallback } from "react";
import TokenizationRequest from "./TokenizationRequest";
import PortalPopup from "./PortalPopup";
import PropTypes from "prop-types";

const SideBarNav = ({
  className = "",
  frameNavAlignSelf,
  frameNavWidth,
  frameDivPadding,
  frameDivFlex,
  assetOwnerDisplay,
  assetOwnerMinWidth,
  vector,
  vectorIconLeft,
  overviewDisplay,
  overviewMinWidth,
  onVectorClick = null,
  portfolioDisplay,
  portfolioMinWidth,
  onMarketplaceContainerClick = null,
  marketplaceDisplay,
  marketplaceMinWidth,
  onVectorClick1 = null,
  documentsHeight,
  documentsMinWidth,
  analyticsDisplay,
  analyticsMinWidth,
  supportDisplay,
  supportMinWidth,
  walletDisplay,
  walletMinWidth,
  tokenizeDisplay,
  tokenizeMinWidth,
  settingsDisplay,
  settingsMinWidth,
  x1a2B3c4D5e6F7g8H9i0JDisplay,
  x1a2B3c4D5e6F7g8H9i0JMinWidth,
}) => {
  const [isTokenizationRequestOpen, setTokenizationRequestOpen] = useState(
    false
  );
  const frameNavStyle = useMemo(() => {
    return {
      alignSelf: frameNavAlignSelf,
      width: frameNavWidth,
    };
  }, [frameNavAlignSelf, frameNavWidth]);

  const frameDivStyle = useMemo(() => {
    return {
      padding: frameDivPadding,
    };
  }, [frameDivPadding]);

  const frameDiv1Style = useMemo(() => {
    return {
      flex: frameDivFlex,
    };
  }, [frameDivFlex]);

  const assetOwnerStyle = useMemo(() => {
    return {
      display: assetOwnerDisplay,
      minWidth: assetOwnerMinWidth,
    };
  }, [assetOwnerDisplay, assetOwnerMinWidth]);

  const vectorIconStyle = useMemo(() => {
    return {
      left: vectorIconLeft,
    };
  }, [vectorIconLeft]);

  const overviewStyle = useMemo(() => {
    return {
      display: overviewDisplay,
      minWidth: overviewMinWidth,
    };
  }, [overviewDisplay, overviewMinWidth]);

  const portfolioStyle = useMemo(() => {
    return {
      display: portfolioDisplay,
      minWidth: portfolioMinWidth,
    };
  }, [portfolioDisplay, portfolioMinWidth]);

  const marketplaceStyle = useMemo(() => {
    return {
      display: marketplaceDisplay,
      minWidth: marketplaceMinWidth,
    };
  }, [marketplaceDisplay, marketplaceMinWidth]);

  const documentsStyle = useMemo(() => {
    return {
      height: documentsHeight,
      minWidth: documentsMinWidth,
    };
  }, [documentsHeight, documentsMinWidth]);

  const analyticsStyle = useMemo(() => {
    return {
      display: analyticsDisplay,
      minWidth: analyticsMinWidth,
    };
  }, [analyticsDisplay, analyticsMinWidth]);

  const supportStyle = useMemo(() => {
    return {
      display: supportDisplay,
      minWidth: supportMinWidth,
    };
  }, [supportDisplay, supportMinWidth]);

  const walletStyle = useMemo(() => {
    return {
      display: walletDisplay,
      minWidth: walletMinWidth,
    };
  }, [walletDisplay, walletMinWidth]);

  const tokenizeStyle = useMemo(() => {
    return {
      display: tokenizeDisplay,
      minWidth: tokenizeMinWidth,
    };
  }, [tokenizeDisplay, tokenizeMinWidth]);

  const settingsStyle = useMemo(() => {
    return {
      display: settingsDisplay,
      minWidth: settingsMinWidth,
    };
  }, [settingsDisplay, settingsMinWidth]);

  const x1a2B3c4D5e6F7g8H9i0JStyle = useMemo(() => {
    return {
      display: x1a2B3c4D5e6F7g8H9i0JDisplay,
      minWidth: x1a2B3c4D5e6F7g8H9i0JMinWidth,
    };
  }, [x1a2B3c4D5e6F7g8H9i0JDisplay, x1a2B3c4D5e6F7g8H9i0JMinWidth]);

  const navigate = useNavigate();

  const openTokenizationRequest = useCallback(() => {
    setTokenizationRequestOpen(true);
  }, []);

  const closeTokenizationRequest = useCallback(() => {
    setTokenizationRequestOpen(false);
  }, []);

  const onVectorClick2 = useCallback(() => {
    navigate("/portfolio?canisterId=br5f7-7uaaa-aaaaa-qaaca-cai");
  }, [navigate]);

  const onMarketplaceContainerClick1 = useCallback(() => {
    navigate("/marketplace");
  }, [navigate]);

  const onVectorClick3 = useCallback(() => {
    navigate("/documents");
  }, [navigate]);

  return (
    <>
      <nav
        className={`m-0 self-stretch flex flex-col items-end justify-start gap-[30px] text-left text-5xl text-shades-white font-manrope ${className}`}
        style={frameNavStyle}
      >
        <div className="self-stretch flex flex-row items-start justify-end py-0 px-px">
          <div className="flex-1 flex flex-col items-start justify-start gap-[23px]">
            <div
              className="self-stretch flex flex-row items-start justify-start py-0 px-3"
              style={frameDivStyle}
            >
              <div
                className="flex flex-row items-start justify-start gap-[11px]"
                style={frameDiv1Style}
              >
                <Link to="/property-owner?canisterId=br5f7-7uaaa-aaaaa-qaaca-cai">
                <img
                  className="h-[38px] w-[38px] relative rounded object-cover min-h-[38px]"
                  loading="lazy"
                  alt=""
                  src="/rectangle1@2x.png"
                />
                </Link>
                <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <Link to="/property-owner?canisterId=br5f7-7uaaa-aaaaa-qaaca-cai">
                    <span className="[text-decoration:none] relative tracking-[0.1em] font-semibold text-[inherit] mq450:text-lgi">
                      BlockState
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-mini border-gray1-2200 border-[1px] border-solid flex flex-row items-start justify-between py-0.5 pl-[45px] pr-9 gap-5 text-base">
              <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                <div className="relative font-medium" style={assetOwnerStyle}>
                  Asset Owner
                </div>
              </div>
              <div className="h-8 w-4 relative">
                <img
                  className="absolute top-[0px] left-[0px] w-4 h-4 object-cover"
                  loading="lazy"
                  alt=""
                  src="/frame1@2x.png"
                />
                <img
                  className="absolute top-[16px] left-[0px] w-4 h-4 object-cover"
                  loading="lazy"
                  alt=""
                  src="/frame-12@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end py-0 px-[9px] text-base">
          <div className="h-[504px] flex-1 relative">
            <img
              className="absolute top-[19.4px] left-[26.5px] w-[11px] h-[8.4px]"
              alt=""
              src={vector}
              style={vectorIconStyle}
            />
            <div className="absolute top-[0px] left-[0px] w-full flex flex-col items-start justify-start gap-[9px] h-full z-[1]">
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 flex flex-row items-start justify-start pt-[9.4px] px-[35px] pb-[11px] relative gap-0.5">
                  <img
                    className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/vector-1.svg"
                  />
                  <img
                    className="h-[23.7px] w-[28.3px] relative object-contain z-[1]"
                    alt=""
                    src="/iconlyboldcategory2@2x.png"
                  />
                  <div className="flex flex-col items-start justify-start pt-[5.6px] px-0 pb-0">
                    <a
                      className="[text-decoration:none] relative text-base font-medium font-manrope text-shades-white text-left [text-shadow:1px_0_0_rgba(255,_255,_255,_0.05),_0_1px_0_rgba(255,_255,_255,_0.05),_-1px_0_0_rgba(255,_255,_255,_0.05),_0_-1px_0_rgba(255,_255,_255,_0.05)] z-[1]"
                      style={overviewStyle}
                    >
                      Overview
                    </a>
                  </div>
                </div>
              </button>
              <div className="self-stretch flex flex-row items-start justify-start top-[0] z-[99] sticky">
                <div className="flex-1 flex flex-row items-start justify-start pt-[9px] px-[38px] pb-[11px] relative gap-1">
                  <img
                    className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full cursor-pointer"
                    alt=""
                    src="/vector-2.svg"
                    onClick={onVectorClick2}
                  />
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 z-[1]"
                    loading="lazy"
                    alt=""
                    src="/frame-2.svg"
                  />
                  <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                    <a
                      className="[text-decoration:none] relative font-bold text-[inherit] [text-shadow:1px_0_0_rgba(255,_255,_255,_0.05),_0_1px_0_rgba(255,_255,_255,_0.05),_-1px_0_0_rgba(255,_255,_255,_0.05),_0_-1px_0_rgba(255,_255,_255,_0.05)] z-[1]"
                      style={portfolioStyle}
                    >
                      Portfolio
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="self-stretch flex flex-row items-start justify-start cursor-pointer"
                onClick={onMarketplaceContainerClick}
              >
                <div className="flex-1 flex flex-row items-start justify-start pt-[9px] px-[38px] pb-[11px] relative gap-1">
                  <img
                    className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/vector-2.svg"
                  />
                  <img
                    className="h-6 w-6 relative object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="/frame-31@2x.png"
                  />
                  <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                    <b
                      className="relative [text-shadow:1px_0_0_rgba(255,_255,_255,_0.05),_0_1px_0_rgba(255,_255,_255,_0.05),_-1px_0_0_rgba(255,_255,_255,_0.05),_0_-1px_0_rgba(255,_255,_255,_0.05)] z-[1]"
                      style={marketplaceStyle}
                    >
                      Marketplace
                    </b>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 flex flex-row items-start justify-start pt-[9px] px-[38px] pb-[11px] relative gap-1">
                  <img
                    className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full cursor-pointer"
                    alt=""
                    src="/vector-2.svg"
                    onClick={onVectorClick1}
                  />
                  <img
                    className="h-6 w-6 relative object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="/iconlybolddocument1@2x.png"
                  />
                  <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                    <b
                      className="h-[22px] relative inline-block [text-shadow:1px_0_0_rgba(255,_255,_255,_0.05),_0_1px_0_rgba(255,_255,_255,_0.05),_-1px_0_0_rgba(255,_255,_255,_0.05),_0_-1px_0_rgba(255,_255,_255,_0.05)] z-[1]"
                      style={documentsStyle}
                    >
                      Documents
                    </b>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 flex flex-row items-start justify-start pt-[9px] px-[38px] pb-[11px] relative gap-1">
                  <img
                    className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/vector-2.svg"
                  />
                  <img
                    className="h-6 w-6 relative object-contain z-[1]"
                    loading="lazy"
                    alt=""
                    src="/frame-42@2x.png"
                  />
                  <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                    <b
                      className="relative [text-shadow:1px_0_0_rgba(255,_255,_255,_0.05),_0_1px_0_rgba(255,_255,_255,_0.05),_-1px_0_0_rgba(255,_255,_255,_0.05),_0_-1px_0_rgba(255,_255,_255,_0.05)] z-[1]"
                      style={analyticsStyle}
                    >
                      Analytics
                    </b>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 flex flex-row items-start justify-start pt-[9px] px-[38px] pb-[11px] relative gap-1">
                  <img
                    className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/vector-2.svg"
                  />
                  <img
                    className="h-6 w-6 relative object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="/frame-51@2x.png"
                  />
                  <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                    <b
                      className="relative [text-shadow:1px_0_0_rgba(255,_255,_255,_0.05),_0_1px_0_rgba(255,_255,_255,_0.05),_-1px_0_0_rgba(255,_255,_255,_0.05),_0_-1px_0_rgba(255,_255,_255,_0.05)] z-[1]"
                      style={supportStyle}
                    >
                      Support
                    </b>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 flex flex-row items-start justify-start pt-[9px] px-[38px] pb-[11px] relative gap-1">
                  <img
                    className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/vector-2.svg"
                  />
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 z-[1]"
                    loading="lazy"
                    alt=""
                    src="/frame-6.svg"
                  />
                  <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                    <b
                      className="relative [text-shadow:1px_0_0_rgba(255,_255,_255,_0.05),_0_1px_0_rgba(255,_255,_255,_0.05),_-1px_0_0_rgba(255,_255,_255,_0.05),_0_-1px_0_rgba(255,_255,_255,_0.05)] z-[1]"
                      style={walletStyle}
                    >
                      Wallet
                    </b>
                  </div>
                </div>
              </div>
              <div
                className="self-stretch flex flex-row items-start justify-start cursor-pointer"
                onClick={openTokenizationRequest}
              >
                <div className="flex-1 flex flex-row items-start justify-start pt-[9px] px-[38px] pb-[11px] relative gap-1">
                  <img
                    className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/vector-2.svg"
                  />
                  <img
                    className="h-6 w-6 relative object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="/frame-71@2x.png"
                  />
                  <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                    <b
                      className="relative [text-shadow:1px_0_0_rgba(255,_255,_255,_0.05),_0_1px_0_rgba(255,_255,_255,_0.05),_-1px_0_0_rgba(255,_255,_255,_0.05),_0_-1px_0_rgba(255,_255,_255,_0.05)] z-[1]"
                      style={tokenizeStyle}
                    >
                      Tokenize
                    </b>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 flex flex-row items-start justify-start pt-[9px] px-[38px] pb-[11px] relative gap-1">
                  <img
                    className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/vector-2.svg"
                  />
                  <img
                    className="h-6 w-6 relative object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="/iconlyboldsetting1@2x.png"
                  />
                  <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                    <b
                      className="relative [text-shadow:1px_0_0_rgba(255,_255,_255,_0.05),_0_1px_0_rgba(255,_255,_255,_0.05),_-1px_0_0_rgba(255,_255,_255,_0.05),_0_-1px_0_rgba(255,_255,_255,_0.05)] z-[1]"
                      style={settingsStyle}
                    >
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
            <img
              className="absolute top-[0px] left-[0px] rounded-23xl w-full h-full object-cover z-[2]"
              loading="lazy"
              alt=""
              src="/image1@2x.png"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-1.5">
            <div className="self-stretch flex flex-col items-start justify-start gap-px">
              <div className="self-stretch relative font-semibold">
                Nombuso Kaluuya
              </div>
              <div
                className="relative text-3xs text-gainsboro-500"
                style={x1a2B3c4D5e6F7g8H9i0JStyle}
              >
                0x1a2B3c4D5e6F7g8H9i0J
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[13.1px]">
            <img
              className="w-[17.3px] h-[16.7px] relative object-cover"
              loading="lazy"
              alt=""
              src="/group2@2x.png"
            />
          </div>
        </div>
      </nav>
      {isTokenizationRequestOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeTokenizationRequest}
        >
          <TokenizationRequest onClose={closeTokenizationRequest} />
        </PortalPopup>
      )}
    </>
  );
};

SideBarNav.propTypes = {
  className: PropTypes.string,
  vector: PropTypes.string,

  /** Style props */
  frameNavAlignSelf: PropTypes.any,
  frameNavWidth: PropTypes.any,
  frameDivPadding: PropTypes.any,
  frameDivFlex: PropTypes.any,
  assetOwnerDisplay: PropTypes.any,
  assetOwnerMinWidth: PropTypes.any,
  vectorIconLeft: PropTypes.any,
  overviewDisplay: PropTypes.any,
  overviewMinWidth: PropTypes.any,
  portfolioDisplay: PropTypes.any,
  portfolioMinWidth: PropTypes.any,
  marketplaceDisplay: PropTypes.any,
  marketplaceMinWidth: PropTypes.any,
  documentsHeight: PropTypes.any,
  documentsMinWidth: PropTypes.any,
  analyticsDisplay: PropTypes.any,
  analyticsMinWidth: PropTypes.any,
  supportDisplay: PropTypes.any,
  supportMinWidth: PropTypes.any,
  walletDisplay: PropTypes.any,
  walletMinWidth: PropTypes.any,
  tokenizeDisplay: PropTypes.any,
  tokenizeMinWidth: PropTypes.any,
  settingsDisplay: PropTypes.any,
  settingsMinWidth: PropTypes.any,
  x1a2B3c4D5e6F7g8H9i0JDisplay: PropTypes.any,
  x1a2B3c4D5e6F7g8H9i0JMinWidth: PropTypes.any,

  /** Action props */
  onVectorClick: PropTypes.func,
  onMarketplaceContainerClick: PropTypes.func,
  onVectorClick1: PropTypes.func,
};

export default SideBarNav;
