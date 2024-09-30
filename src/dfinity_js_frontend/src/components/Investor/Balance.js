import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Img } from "../../components/Img";
import * as Images from "../../assets/images";
import Balance from "../../components/Balance";

const InvestorBalance = ({ className = "", investorId }) => {

  return (
    <div
      className={`flex-[0.8779] shadow-[6px_6px_54px_rgba(0,_0,_0,_0.05)] rounded-11xl bg-light-black flex flex-col items-start justify-start p-4 box-border gap-7 min-w-[196px] z-[1] text-left text-base text-gray1-2000 font-manrope mq450:flex-1 ${className}`}
    >
      <div className="w-[262px] h-[161px] relative shadow-[6px_6px_54px_rgba(0,_0,_0,_0.05)] rounded-11xl bg-light-black hidden" />
      <div className="self-stretch flex flex-row items-start justify-start gap-8 mq450:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start gap-4 min-w-[90px]">
          <a className="[text-decoration:none] relative font-semibold text-[inherit] mix-blend-normal z-[1]">
            Total Balance
          </a>
          <a className="[text-decoration:none] relative text-9xl tracking-[1px] font-bold text-shades-white inline-block min-w-[87px] z-[1] mq450:text-3xl">
            < Balance />
          </a>
        </div>
        <Img
          className="h-[60px] w-[60px] relative object-contain z-[1]"
          loading="lazy"
          alt=""
          src={Images.imgIcon1}
        />
      </div>
      <div className="flex flex-row items-start justify-start gap-2 text-lightseagreen">
        <input
          className="m-0 h-6 w-6 relative min-h-[24px] z-[1]"
          type="checkbox"
        />
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
          <div className="relative font-semibold z-[1]">
            <span>1.3%</span>
            <span className="text-shades-white"> Up from past week</span>
          </div>
        </div>
      </div>
    </div>
  );
};

InvestorBalance.propTypes = {
  className: PropTypes.string,
  investorId: PropTypes.string.isRequired,
};

export default InvestorBalance;
