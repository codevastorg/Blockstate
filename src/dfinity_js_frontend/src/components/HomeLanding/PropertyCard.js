import React from "react";
import { useMemo } from "react";
import PropTypes from "prop-types";
import { Img } from "../../components/Img";
import * as Images from "../../assets/images";

const PropertyCard = ({
  className = "",
  propFlex,
  propMinWidth,
  propBorderRadius,
  rectangle34624569,
  propBorderRadius1,
  propBorderRadius2,
  prop,
  propColor,
  semiDetachedHouse,
  southfieldRoadOxfordOX4,
  prop1,
  semiFurnished,
  propMinWidth1,
  propBackgroundColor,
  propBorderRadius3,
  carousels,
  forSale,
  propMinWidth2,
  tagsDisabled,
}) => {
  const propertyCard1Style = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propFlex, propMinWidth]);

  const cardRectangle1Style = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
    };
  }, [propBorderRadius]);

  const rectangleIconStyle = useMemo(() => {
    return {
      borderRadius: propBorderRadius1,
    };
  }, [propBorderRadius1]);

  const infoFeatures1Style = useMemo(() => {
    return {
      borderRadius: propBorderRadius2,
    };
  }, [propBorderRadius2]);

  const div1Style = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const semiFurnished1Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const tags1Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      borderRadius: propBorderRadius3,
    };
  }, [propBackgroundColor, propBorderRadius3]);

  const forSale1Style = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  return (
    <div
      className={`flex-1 shadow-[0px_0px_1px_rgba(12,_26,_75,_0.24),_0px_3px_8px_-1px_rgba(50,_50,_71,_0.05)] rounded-11xl bg-light-black border-border-linear border-[1px] border-solid box-border overflow-hidden flex flex-col items-center justify-center pt-0 px-0 pb-3.5 relative gap-4 min-w-[372px] min-h-[380px] max-h-[484px] max-w-full text-left text-base text-aliceblue-100 font-manrope ${className}`}
      style={propertyCard1Style}
    >
      <div
        className="self-stretch h-[292px] flex flex-col items-center justify-center min-w-[300px] min-h-[208px]"
        style={cardRectangle1Style}
      >
        <img
          className="self-stretch flex-1 relative rounded-11xl max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src={rectangle34624569}
          style={rectangleIconStyle}
        />
      </div>
      <div
        className="self-stretch rounded-11xl flex flex-col items-center justify-center py-0 px-4 gap-4"
        style={infoFeatures1Style}
      >
        <div className="self-stretch flex flex-col items-start justify-center relative gap-1">
          <div
            className="self-stretch relative text-5xl leading-[32px] font-semibold whitespace-nowrap mq450:text-lgi mq450:leading-[26px]"
            style={div1Style}
          >
            {prop}
          </div>
          <div className="w-[129px] absolute !m-[0] top-[4px] right-[-0.3px] leading-[24px] text-shades-grey text-right hidden z-[1]">
            Est. Value: £7,250
          </div>
          <div className="self-stretch relative leading-[24px] font-semibold text-goldenrod-200 overflow-hidden text-ellipsis whitespace-nowrap">
            {semiDetachedHouse}
          </div>
          <div className="self-stretch relative leading-[24px] text-gray1-1900 overflow-hidden text-ellipsis whitespace-nowrap">
            {southfieldRoadOxfordOX4}
          </div>
        </div>
        <div className="self-stretch rounded-xl bg-shades-black border-light-black border-[1px] border-solid flex flex-row items-center justify-between py-3.5 px-4 gap-5 text-sm text-shades-white mq450:flex-wrap">
          <div className="flex flex-row items-center justify-center gap-1">
            <img className="h-6 w-6 relative" alt="" src={Images.imgBed} />
            <div className="relative leading-[20px] inline-block min-w-[8px]">
              {prop1}
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-1">
            <input className="m-0 h-6 w-6 relative" type="checkbox" />
            <div className="relative leading-[20px] inline-block min-w-[8px]">
              2
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-1">
            <img className="h-6 w-6 relative" alt="" src={Images.imgChairs} />
            <div
              className="relative leading-[20px] inline-block min-w-[100px]"
              style={semiFurnished1Style}
            >
              {semiFurnished}
            </div>
          </div>
        </div>
      </div>
      <button
        className="cursor-pointer [border:none] py-1 pl-1 pr-2 bg-darkgray-100 !m-[0] absolute top-[27px] left-[0px] rounded-11xl flex flex-row items-center justify-center gap-1 whitespace-nowrap z-[1] hover:bg-gray1-200"
        style={tags1Style}
        disabled={tagsDisabled}
      >
        <img className="h-3 w-3 relative" alt="" src={carousels} />
        <b
          className="relative text-xs leading-[18px] inline-block font-manrope text-shades-black text-left min-w-[77px]"
          style={forSale1Style}
        >
          {forSale}
        </b>
      </button>
    </div>
  );
};

PropertyCard.propTypes = {
  className: PropTypes.string,
  rectangle34624569: PropTypes.string,
  prop: PropTypes.string,
  semiDetachedHouse: PropTypes.string,
  southfieldRoadOxfordOX4: PropTypes.string,
  prop1: PropTypes.string,
  semiFurnished: PropTypes.string,
  carousels: PropTypes.string,
  forSale: PropTypes.string,
  tagsDisabled: PropTypes.bool,

  /** Style props */
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propBorderRadius: PropTypes.any,
  propBorderRadius1: PropTypes.any,
  propBorderRadius2: PropTypes.any,
  propColor: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propBackgroundColor: PropTypes.any,
  propBorderRadius3: PropTypes.any,
  propMinWidth2: PropTypes.any,
};

export default PropertyCard;
