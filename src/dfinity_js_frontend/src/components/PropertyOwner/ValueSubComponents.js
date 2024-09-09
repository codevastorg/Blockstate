import React, { useState } from "react";
import { useMemo } from "react";
import PropTypes from "prop-types";

const ValueSubComponents = ({
  className = "",
  subtract,
  totalAssetValue,
  propMinWidth,
  balanceSeparator,
}) => {
  const totalAssetValueStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start pt-3 pb-[15px] pl-6 pr-5 box-border relative gap-2 min-w-[155px] text-left text-xs text-darkslategray-300 font-manrope ${className}`}
    >
      <img
        className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[1]"
        alt=""
        src={subtract}
      />
      <div className="rounded-md bg-gray1-2100 flex flex-row items-start justify-start p-1 z-[2]">
        <div className="relative font-medium inline-block min-w-[35px]">
          +2.3%
        </div>
      </div>
      <div
        className="relative text-base font-medium text-dimgray inline-block min-w-[129px] z-[2]"
        style={totalAssetValueStyle}
      >
        {totalAssetValue}
      </div>
      <div className="relative text-11xl tracking-[0.1em] font-semibold text-gray1-700 whitespace-nowrap z-[2] mq975:text-5xl mq450:text-lg">
        {balanceSeparator}
      </div>
    </div>
  );
};

ValueSubComponents.propTypes = {
  className: PropTypes.string,
  subtract: PropTypes.string,
  totalAssetValue: PropTypes.string,
  balanceSeparator: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
};

export default ValueSubComponents;
