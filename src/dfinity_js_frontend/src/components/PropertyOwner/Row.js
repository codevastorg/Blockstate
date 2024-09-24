import React from "react";
import { useMemo } from "react";
import PropTypes from "prop-types";

const Row = ({
  className = "",
  row02Padding,
  row02Border,
  backgroundBorder,
  propBackgroundColor,
  frameDivWidth,
  icBuyFlex,
  icBuyWidth,
  vector,
  topup,
  topupHeight,
  topupDisplay,
  frameDivWidth1,
  prop,
  completed,
  propColor,
}) => {
  const row02Style = useMemo(() => {
    return {
      padding: row02Padding,
      border: row02Border,
    };
  }, [row02Padding, row02Border]);

  const backgroundStyle = useMemo(() => {
    return {
      border: backgroundBorder,
    };
  }, [backgroundBorder]);

  const borderBotStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const frameDiv2Style = useMemo(() => {
    return {
      width: frameDivWidth,
    };
  }, [frameDivWidth]);

  const icBuyStyle = useMemo(() => {
    return {
      flex: icBuyFlex,
      width: icBuyWidth,
    };
  }, [icBuyFlex, icBuyWidth]);

  const topupStyle = useMemo(() => {
    return {
      height: topupHeight,
      display: topupDisplay,
    };
  }, [topupHeight, topupDisplay]);

  const frameDiv3Style = useMemo(() => {
    return {
      width: frameDivWidth1,
    };
  }, [frameDivWidth1]);

  const completedStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div
      className={`self-stretch rounded-12xs bg-light-black border-shades-white border-[1px] border-solid box-border flex flex-row items-start justify-between pt-[11px] pb-3 pl-[30px] pr-[45px] max-w-full gap-5 z-[2] text-left text-base text-shades-white font-manrope mq800:flex-wrap mq800:pr-[22px] mq800:box-border ${className}`}
      style={row02Style}
    >
      <div
        className="h-[90px] w-[713px] relative rounded-12xs bg-light-black border-shades-white border-[1px] border-solid box-border hidden max-w-full"
        style={backgroundStyle}
      />
      <div
        className="h-px w-[713px] relative rounded-12xs bg-shades-white border-goldenrod-600 border-[1px] border-solid box-border hidden max-w-full"
        style={borderBotStyle}
      />
      <div
        className="w-[187px] flex flex-row items-start justify-start py-0 pl-0 pr-14 box-border gap-5"
        style={frameDiv2Style}
      >
        <div
          className="flex-1 rounded-sm border-goldenrod-500 border-[4px] border-solid flex flex-row items-start justify-start py-[15px] px-[25px] z-[1]"
          style={icBuyStyle}
        >
          <div className="h-[63px] w-[63px] relative rounded-sm border-goldenrod-500 border-[4px] border-solid box-border hidden" />
          <img
            className="h-6 w-[11.6px] relative object-contain z-[1]"
            loading="lazy"
            alt=""
            src={vector}
          />
        </div>
        <div className="flex flex-col items-start justify-start pt-5 px-0 pb-0">
          <div className="relative font-semibold z-[1]" style={topupStyle}>
            {topup}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-5 px-0 pb-0">
        <div className="relative whitespace-nowrap z-[1]">06:24:45 AM</div>
      </div>
      <div
        className="flex flex-col items-start justify-start pt-5 pb-0 pl-0 pr-5"
        style={frameDiv3Style}
      >
        <div className="relative font-medium z-[1]">{prop}</div>
      </div>
      <div className="flex flex-col items-start justify-start pt-5 px-0 pb-0 text-right text-limegreen-200">
        <div className="relative font-medium z-[1]" style={completedStyle}>
          {completed}
        </div>
      </div>
    </div>
  );
};

Row.propTypes = {
  className: PropTypes.string,
  vector: PropTypes.string,
  topup: PropTypes.string,
  prop: PropTypes.string,
  completed: PropTypes.string,

  /** Style props */
  row02Padding: PropTypes.any,
  row02Border: PropTypes.any,
  backgroundBorder: PropTypes.any,
  propBackgroundColor: PropTypes.any,
  frameDivWidth: PropTypes.any,
  icBuyFlex: PropTypes.any,
  icBuyWidth: PropTypes.any,
  topupHeight: PropTypes.any,
  topupDisplay: PropTypes.any,
  frameDivWidth1: PropTypes.any,
  propColor: PropTypes.any,
};

export default Row;
