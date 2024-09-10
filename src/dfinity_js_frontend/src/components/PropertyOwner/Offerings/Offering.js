import React from "react";
import PropTypes from "prop-types";

const Offering = ({
  assetId,
  pricePerToken,
  availableTokens,
  startDate,
  status,
  className = "",
}) => {
  // Helper function to format numbers with commas
  const formatNumber = (number) => {
    return number.toLocaleString();
  };

  return (
    <div
      className={`self-stretch rounded-t-xl rounded-b-11xl bg-light-black border-cards-transparent-stroke border-[1px] border-solid flex flex-row items-start justify-start pt-[31px] px-8 pb-2 text-sm text-shades-white ${className}`}
    >
      <div className="flex flex-col items-start justify-start gap-2">
        <div className="flex flex-col items-start justify-start gap-1">
          <div className="relative tracking-[0.1em] font-semibold inline-block min-w-[77px]">
            Asset ID: {assetId}
          </div>
          <div className="relative tracking-[0.1em] font-light inline-block min-w-[77px]">
            Price per Token: {formatNumber(pricePerToken)} ICP
          </div>
          <div className="relative tracking-[0.1em] font-light inline-block min-w-[77px]">
            Available Tokens: {formatNumber(availableTokens)}
          </div>
          <div className="relative tracking-[0.1em] font-light inline-block min-w-[77px]">
            Start Date: {startDate}
          </div>
          <div className="relative tracking-[0.1em] font-light inline-block min-w-[77px]">
            Status: {status}
          </div>
        </div>
      </div>
    </div>
  );
};

Offering.propTypes = {
  assetId: PropTypes.string.isRequired,
  pricePerToken: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  availableTokens: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  startDate: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Offering;
