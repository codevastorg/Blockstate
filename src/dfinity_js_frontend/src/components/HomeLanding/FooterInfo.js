import React from "react";
import PropTypes from "prop-types";
import { Img } from "../../components/Img";
import * as Images from "../../assets/images";

const FooterInfo = ({ className = "" }) => {
  return (
    <div
      className={`w-[1240px] flex flex-col items-end justify-start gap-[26px] max-w-full text-right text-base text-shades-white font-manrope ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-end gap-6 z-[2] mq450:flex-wrap mq450:justify-center">
        <div className="flex flex-row items-start justify-start relative gap-2.5">
          <div className="h-10 w-10 relative rounded-[50%] bg-shades-off-white" />
          <Img
            className="h-6 w-6 absolute !m-[0] top-[calc(50%_-_12px)] left-[calc(50%_-_12px)] rounded overflow-hidden shrink-0 z-[1]"
            loading="lazy"
            alt=""
            src={Images.imgFacebook}
          />
        </div>
        <div className="flex flex-row items-start justify-start relative gap-2.5">
          <div className="h-10 w-10 relative rounded-[50%] bg-shades-off-white" />
          <Img
            className="h-6 w-6 absolute !m-[0] top-[calc(50%_-_12px)] left-[calc(50%_-_12px)] overflow-hidden shrink-0 z-[1]"
            loading="lazy"
            alt=""
            src={Images.imgLinkedIn}
          />
        </div>
        <div className="flex flex-row items-start justify-start relative gap-2.5">
          <div className="h-10 w-10 relative rounded-[50%] bg-shades-off-white" />
          <Img
            className="h-6 w-6 absolute !m-[0] top-[calc(50%_-_12px)] left-[calc(50%_-_12px)] overflow-hidden shrink-0 z-[1]"
            alt=""
            src={Images.imgYouTube}
          />
        </div>
        <div className="flex flex-row items-start justify-start relative gap-2.5">
          <div className="h-10 w-10 relative rounded-[50%] bg-shades-off-white" />
          <Img
            className="h-6 w-6 absolute !m-[0] top-[calc(50%_-_12px)] left-[calc(50%_-_12px)] overflow-hidden shrink-0 z-[1]"
            alt=""
            src={Images.imgInstagram}
          />
        </div>
      </div>
      <div className="relative leading-[24px] inline-block max-w-full z-[2]">
        <span className="font-medium">{`© 2024 `}</span>
        <b>Equixtoken Capital</b>
        <span className="font-medium">. All rights reserved.</span>
      </div>
    </div>
  );
};

FooterInfo.propTypes = {
  className: PropTypes.string,
};

export default FooterInfo;
