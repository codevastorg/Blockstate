import React from "react";
import { useCallback } from "react";
import SubContainer from "./SubContainer";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const AddListing = ({ className = "", onClose }) => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div
      className={`w-[1400px] relative [backdrop-filter:blur(14px)] rounded-11xl bg-gray1-1300 overflow-hidden flex flex-col items-start justify-start pt-[81px] px-[51px] pb-[111px] box-border gap-[60px] leading-[normal] tracking-[normal] max-w-full max-h-full mq750:gap-[30px] mq750:pl-[25px] mq750:pr-[25px] mq750:box-border mq450:gap-[15px] ${className}`}
    >
      <section className="w-[1039px] flex flex-col items-start justify-start gap-2.5 max-w-full text-left text-19xl text-shades-white font-manrope">
        <div className="self-stretch flex flex-col items-start justify-start gap-1.5 max-w-full">
          <div className="w-[54.7px] h-6 relative">
            <img
              className="absolute top-[0px] left-[0px] w-6 h-6 overflow-hidden"
              loading="lazy"
              alt=""
              src="/frame-3186.svg"
            />
            <img
              className="absolute top-[4.8px] left-[28.8px] w-[14.4px] h-[14.4px] overflow-hidden"
              loading="lazy"
              alt=""
              src="/frame-3187.svg"
            />
            <img
              className="absolute top-[8.6px] left-[48px] w-[6.7px] h-[6.7px] overflow-hidden"
              loading="lazy"
              alt=""
              src="/frame-3188.svg"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-2.5 pr-0 box-border max-w-full">
            <h1 className="m-0 flex-1 relative text-inherit leading-[150%] font-semibold font-[inherit] inline-block max-w-full mq1050:text-11xl mq1050:leading-[46px] mq450:text-[23px] mq450:leading-[34px]">
              Let's Make it Happen
            </h1>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-2.5 pr-0 box-border max-w-full text-base text-grey-60">
          <div className="flex-1 relative leading-[150%] font-medium inline-block max-w-full">
            Ready to take the first step toward your dream property? Fill out
            the form below, and our real estate wizards will work their magic to
            find your perfect match. Don't wait; let's embark on this exciting
            journey together.
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-start py-0 pl-2.5 pr-[9px] box-border max-w-full">
        <form className="m-0 flex-1 rounded-11xl border-goldenrod-100 border-[1px] border-solid box-border flex flex-col items-start justify-start py-12 pl-[50px] pr-12 gap-[30px] max-w-full lg:pl-[25px] lg:pr-6 lg:box-border mq750:gap-[15px] mq750:pt-[31px] mq750:pb-[31px] mq750:box-border">
          <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start py-0 px-0 gap-[30px]">
            <div className="flex-1 flex flex-col items-start justify-start gap-3.5 min-w-[204px] max-w-[272px]">
              <div className="self-stretch relative text-base leading-[150%] font-semibold font-manrope text-shades-white text-left">
                First Name
              </div>
              <div className="self-stretch rounded-md border-grey-15 border-[1px] border-solid flex flex-row items-center justify-start py-3.5 px-[19px]">
                <input
                  className="w-full [border:none] [outline:none] font-medium font-manrope text-sm bg-[transparent] h-5 flex-1 relative leading-[20px] text-grey-40 text-left inline-block min-w-[139px] p-0"
                  placeholder="Enter First Name"
                  type="text"
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-3.5 min-w-[204px] max-w-[272px]">
              <div className="self-stretch relative text-base leading-[150%] font-semibold font-manrope text-shades-white text-left">
                Last Name
              </div>
              <div className="self-stretch rounded-md border-grey-15 border-[1px] border-solid flex flex-row items-center justify-start py-3.5 px-[19px]">
                <input
                  className="w-full [border:none] [outline:none] font-medium font-manrope text-sm bg-[transparent] h-5 flex-1 relative leading-[20px] text-grey-40 text-left inline-block min-w-[139px] p-0"
                  placeholder="Enter Last Name"
                  type="text"
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-3.5 min-w-[204px] max-w-[272px]">
              <div className="self-stretch relative text-base leading-[150%] font-semibold font-manrope text-shades-white text-left">
                Email
              </div>
              <div className="self-stretch rounded-md border-grey-15 border-[1px] border-solid flex flex-row items-center justify-start py-3.5 px-[19px]">
                <input
                  className="w-full [border:none] [outline:none] font-medium font-manrope text-sm bg-[transparent] h-5 flex-1 relative leading-[20px] text-grey-40 text-left inline-block min-w-[139px] p-0"
                  placeholder="Enter your Email"
                  type="text"
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-3.5 min-w-[204px] max-w-[272px]">
              <div className="self-stretch relative text-base leading-[150%] font-semibold font-manrope text-shades-white text-left">
                Phone
              </div>
              <div className="self-stretch rounded-md border-grey-15 border-[1px] border-solid flex flex-row items-center justify-start py-3.5 px-[19px]">
                <input
                  className="w-full [border:none] [outline:none] font-medium font-manrope text-sm bg-[transparent] h-5 flex-1 relative leading-[20px] text-grey-40 text-left inline-block min-w-[139px] p-0"
                  placeholder="Enter Phone Number"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start py-0 px-0 gap-[30px]">
            <SubContainer
              heading="Preferred Location"
              text="Select Location"
              icon="/icon11.svg"
            />
            <SubContainer
              propMinWidth="204px"
              heading="Property Type"
              text="Select Property Type"
              propTextDecoration="none"
              propDisplay="unset"
              icon="/icon11.svg"
              propMinHeight="20px"
            />
            <SubContainer
              propMinWidth="204px"
              heading="No. of Bathrooms"
              text="Select no. of Bedrooms"
              propTextDecoration="unset"
              propDisplay="unset"
              icon="/icon11.svg"
              propMinHeight="20px"
            />
            <SubContainer
              propMinWidth="204px"
              heading="No. of Bedrooms"
              text="Select no. of Bedrooms"
              propTextDecoration="unset"
              propDisplay="unset"
              icon="/icon11.svg"
              propMinHeight="20px"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start gap-[30px] max-w-full">
            <SubContainer
              propMinWidth="374px"
              heading="Budget"
              text="Select Budget"
              propTextDecoration="unset"
              propDisplay="inline-block"
              icon="/icon-41.svg"
              propMinHeight="unset"
            />
            <div className="flex-1 flex flex-col items-start justify-start gap-3.5 min-w-[374px] max-w-full mq750:min-w-full">
              <div className="self-stretch relative text-base leading-[150%] font-semibold font-manrope text-shades-white text-left">
                Preferred Contact Method
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-4 mq750:flex-wrap">
                <div className="flex-1 rounded-md border-grey-15 border-[1px] border-solid box-border flex flex-row items-start justify-start py-3.5 pl-5 pr-[18px] gap-1.5 min-w-[181px] shrink-0 [debug_commit:0448091] mq450:flex-wrap">
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                    alt=""
                    src="/icon-51.svg"
                  />
                  <input
                    className="w-[calc(100%_-_58px)] [border:none] [outline:none] font-medium font-manrope text-sm bg-[transparent] h-5 flex-1 relative leading-[20px] text-grey-40 text-left inline-block min-w-[128px] p-0"
                    placeholder="Enter Your Number"
                    type="text"
                  />
                  <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                    <div className="w-2.5 h-2.5 relative rounded-[50%] bg-purple-60" />
                  </div>
                </div>
                <div className="flex-1 rounded-md border-grey-15 border-[1px] border-solid box-border flex flex-row items-start justify-start py-3.5 pl-5 pr-[18px] gap-1.5 min-w-[181px] shrink-0 [debug_commit:0448091] mq450:flex-wrap">
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                    alt=""
                    src="/icon-61.svg"
                  />
                  <input
                    className="w-[calc(100%_-_68px)] [border:none] [outline:none] font-medium font-manrope text-sm bg-[transparent] h-5 flex-1 relative leading-[20px] text-grey-40 text-left inline-block min-w-[128px] p-0"
                    placeholder="Enter Your Email"
                    type="text"
                  />
                  <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                    <div className="w-2.5 h-2.5 relative rounded-[50%] border-purple-60 border-[0px] border-solid box-border" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-4 max-w-full">
            <div className="self-stretch relative text-base leading-[150%] font-semibold font-manrope text-shades-white text-left">
              Message
            </div>
            <div className="self-stretch h-[122px] rounded-md border-grey-15 border-[1px] border-solid box-border flex flex-row items-start justify-start py-4 px-[19px] max-w-full">
              <input
                className="w-full [border:none] [outline:none] font-medium font-manrope text-sm bg-[transparent] h-5 flex-1 relative leading-[20px] text-grey-40 text-left inline-block min-w-[250px] max-w-full p-0"
                placeholder="Enter your Message here.."
                type="text"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-1.5 max-w-full">
            <div className="flex flex-col items-start justify-start pt-3.5 px-0 pb-0">
              <input
                className="m-0 w-6 h-6 relative rounded border-grey-15 border-[1px] border-solid box-border"
                type="checkbox"
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-3.5 pb-0 pl-0 pr-5 box-border min-w-[616px] max-w-full mq1050:min-w-full">
              <div className="w-[903px] relative text-base leading-[150%] font-medium font-manrope text-grey-60 text-left inline-block max-w-full">
                {`I agree with `}
                <span className="[text-decoration:underline]">
                  Terms of Use
                </span>
                {` and `}
                <span className="[text-decoration:underline]">
                  Privacy Policy
                </span>
              </div>
            </div>
            <button
              className="cursor-pointer [border:none] py-3.5 px-[34px] bg-amber-600 rounded-md flex flex-row items-start justify-start whitespace-nowrap hover:bg-darkgoldenrod-200"
              onClick={onButtonClick}
            >
              <div className="relative text-sm leading-[24px] font-medium font-manrope text-black text-left inline-block min-w-[128px]">
                Send Your Message
              </div>
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

AddListing.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default AddListing;
