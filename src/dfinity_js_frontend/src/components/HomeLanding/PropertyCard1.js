import React from "react";
import { useMemo } from "react";
import PropTypes from "prop-types";
import { Img } from "../../components/Img";
import * as Images from "../../assets/images";

const PropertyCard1 = ({
  className = "",
  propFlex,
  propMinWidth,
  propBorderRadius,
  propAlignSelf,
  propWidth,
  cardBackground,
  propBorderRadius1,
  propBorderRadius2,
  prop,
  propColor,
  penthouse,
  manchesterCity,
  propBorder,
  bedroomPlaceholder,
  bathroomPlaceholder,
  propMinWidth1,
  propFontWeight,
  propBackgroundColor,
  propBorderRadius3,
  carousels,
  forSale,
  propColor1,
  propMinWidth2,
  propFontWeight1,
  propTextDecoration,
}) => {
  const propertyCardStyle = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propFlex, propMinWidth]);

  const cardRectangleStyle = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propBorderRadius, propAlignSelf, propWidth]);

  const cardBackgroundIconStyle = useMemo(() => {
    return {
      borderRadius: propBorderRadius1,
    };
  }, [propBorderRadius1]);

  const infoFeaturesStyle = useMemo(() => {
    return {
      borderRadius: propBorderRadius2,
    };
  }, [propBorderRadius2]);

  const divStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const featuresStyle = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  const semiFurnishedStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
      fontWeight: propFontWeight,
    };
  }, [propMinWidth1, propFontWeight]);

  const tagsStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      borderRadius: propBorderRadius3,
    };
  }, [propBackgroundColor, propBorderRadius3]);

  const forSaleStyle = useMemo(() => {
    return {
      color: propColor1,
      minWidth: propMinWidth2,
      fontWeight: propFontWeight1,
      textDecoration: propTextDecoration,
    };
  }, [propColor1, propMinWidth2, propFontWeight1, propTextDecoration]);

  return (
    <div
      className={`flex-1 shadow-[0px_0px_1px_rgba(12,_26,_75,_0.24),_0px_3px_8px_-1px_rgba(50,_50,_71,_0.05)] rounded-11xl bg-light-black border-border-linear border-[1px] border-solid box-border overflow-hidden flex flex-col items-center justify-center pt-0 px-0 pb-3.5 relative gap-4 min-w-[372px] min-h-[380px] max-h-[484px] max-w-full text-left text-base text-aliceblue-100 font-manrope ${className}`}
      style={propertyCardStyle}
    >
      <div
        className="self-stretch h-[292px] flex flex-col items-center justify-center min-w-[300px] min-h-[208px]"
        style={cardRectangleStyle}
      >
        <Img
          className="self-stretch flex-1 relative rounded-11xl max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src={cardBackground}
          style={cardBackgroundIconStyle}
        />
      </div>
      <div
        className="self-stretch flex flex-col items-center justify-center py-0 px-4 gap-4"
        style={infoFeaturesStyle}
      >
        <div className="self-stretch flex flex-col items-start justify-center relative gap-1">
          <div
            className="self-stretch relative text-5xl leading-[32px] font-semibold whitespace-nowrap mq450:text-lgi mq450:leading-[26px]"
            style={divStyle}
          >
            {prop}
          </div>
          <div className="w-[129px] absolute !m-[0] top-[4px] right-[-0.3px] leading-[24px] text-shades-grey text-right hidden z-[1]">
            Est. Value: £7,250
          </div>
          <div className="self-stretch relative leading-[24px] font-semibold text-goldenrod-200 overflow-hidden text-ellipsis whitespace-nowrap">
            {penthouse}
          </div>
          <div className="self-stretch relative leading-[24px] text-gray1-1900 overflow-hidden text-ellipsis whitespace-nowrap">
            {manchesterCity}
          </div>
        </div>
        <div
          className="self-stretch rounded-xl bg-shades-black border-gray1-1800 border-[1px] border-solid flex flex-row items-center justify-between py-3.5 px-4 gap-5 text-sm text-shades-white mq450:flex-wrap"
          style={featuresStyle}
        >
          <div className="flex flex-row items-center justify-center gap-1">
            <Img
              className="h-6 w-6 relative"
              loading="lazy"
              alt=""
              src={Images.imgBed}
            />
            <div className="relative leading-[20px] inline-block min-w-[8px]">
              {bedroomPlaceholder}
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-1">
            <input className="m-0 h-6 w-6 relative" type="checkbox" />
            <div className="relative leading-[20px] inline-block min-w-[8px]">
              {bathroomPlaceholder}
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-1">
            <Img
              className="h-6 w-6 relative"
              loading="lazy"
              alt=""
              src={Images.imgChairs}
            />
            <b
              className="relative leading-[20px] inline-block min-w-[106px]"
              style={semiFurnishedStyle}
            >
              Semi-furnished
            </b>
          </div>
        </div>
      </div>
      <div
        className="!m-[0] absolute top-[27px] left-[0px] rounded-tl-none rounded-tr-xl rounded-br-xl rounded-bl-none bg-amber-600 flex flex-row items-center justify-center py-1 pl-1 pr-2 gap-1 whitespace-nowrap z-[1] text-xs text-shades-black"
        style={tagsStyle}
      >
        <Img
          className="h-3 w-3 relative"
          loading="lazy"
          alt=""
          src={carousels}
        />
        <b
          className="relative leading-[18px] inline-block min-w-[51px]"
          style={forSaleStyle}
        >
          {forSale}
        </b>
      </div>
    </div>
  );
};

PropertyCard1.propTypes = {
  className: PropTypes.string,
  cardBackground: PropTypes.string,
  prop: PropTypes.string,
  penthouse: PropTypes.string,
  manchesterCity: PropTypes.string,
  bedroomPlaceholder: PropTypes.string,
  bathroomPlaceholder: PropTypes.string,
  carousels: PropTypes.string,
  forSale: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propBorderRadius: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propWidth: PropTypes.any,
  propBorderRadius1: PropTypes.any,
  propBorderRadius2: PropTypes.any,
  propColor: PropTypes.any,
  propBorder: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propFontWeight: PropTypes.any,
  propBackgroundColor: PropTypes.any,
  propBorderRadius3: PropTypes.any,
  propColor1: PropTypes.any,
  propMinWidth2: PropTypes.any,
  propFontWeight1: PropTypes.any,
  propTextDecoration: PropTypes.any,
};

export default PropertyCard1;
