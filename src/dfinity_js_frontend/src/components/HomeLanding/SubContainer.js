import React from "react";
import { useMemo } from "react";
import PropTypes from "prop-types";

const SubContainer = ({
  className = "",
  propMinWidth,
  heading,
  text,
  propTextDecoration,
  propDisplay,
  icon,
  propMinHeight,
}) => {
  const subContainerStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const textStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
      display: propDisplay,
    };
  }, [propTextDecoration, propDisplay]);

  const iconStyle = useMemo(() => {
    return {
      minHeight: propMinHeight,
    };
  }, [propMinHeight]);

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-3.5 min-w-[204px] max-w-[272px] text-left text-base text-shades-white font-manrope ${className}`}
      style={subContainerStyle}
    >
      <div className="self-stretch relative leading-[150%] font-semibold">
        {heading}
      </div>
      <div className="self-stretch rounded-md border-grey-15 border-[1px] border-solid flex flex-row items-center justify-start py-3.5 px-[19px] gap-3 whitespace-nowrap text-sm text-grey-40">
        <div
          className="flex-1 relative leading-[20px] font-medium"
          style={textStyle}
        >
          {text}
        </div>
        <img
          className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
          alt=""
          src={icon}
          style={iconStyle}
        />
      </div>
    </div>
  );
};

SubContainer.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
  propTextDecoration: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinHeight: PropTypes.any,
};

export default SubContainer;
