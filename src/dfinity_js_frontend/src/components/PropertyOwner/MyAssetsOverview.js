import React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Asset from "./Asset";
import PropTypes from "prop-types";
import { Img } from "../../components/Img";
import * as Images from "../../assets/images";

const MyAssetsOverview = ({ className = "" }) => {
  const navigate = useNavigate();

  const onFilterDropContainerClick = useCallback(() => {
    navigate("/offerings");
  }, [navigate]);

  return (
    <section
      className={`self-stretch rounded-11xl bg-gray1-1000 overflow-hidden flex flex-col items-start justify-start pt-[33px] px-[27px] pb-[41px] box-border relative gap-[22px] max-w-full text-left text-xl text-shades-white font-manrope mq450:pt-[21px] mq450:pb-[27px] mq450:box-border ${className}`}
    >
      <div className="w-14 h-1.5 absolute !m-[0] top-[5px] left-[calc(50%_-_28px)] rounded-81xl bg-gray1-600" />
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-3 box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq700:flex-wrap">
          <div className="flex flex-col items-start justify-start pt-[5.5px] px-0 pb-0">
            <div className="relative tracking-[0.1em] font-medium inline-block min-w-[115px] mq450:text-base">
              My Assets
            </div>
          </div>
          <div
            className="w-[238px] rounded-tl-11xl rounded-tr-8xs rounded-br-11xl rounded-bl-8xs border-cards-transparent-stroke border-[1px] border-solid box-border flex flex-row items-start justify-start pt-[7px] px-9 pb-2 cursor-pointer text-sm"
            onClick={onFilterDropContainerClick}
          >
            <div className="flex-1 relative tracking-[0.1em] font-medium">
              View all Offerings
            </div>
            <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
              <Img
                className="w-4 h-4 relative object-cover"
                alt=""
                src={Images.imgFrame_10}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start pt-0 pb-[11px] pl-0 pr-1 gap-x-9 gap-y-[35px] text-xs mq700:gap-[17px]">
        <Asset />
        <Asset />
        <Asset />
        <Asset />
        <Asset />
      </div>
    </section>
  );
};

MyAssetsOverview.propTypes = {
  className: PropTypes.string,
};

export default MyAssetsOverview;
