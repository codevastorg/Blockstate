import PropTypes from "prop-types";

const TokenizationRequest = ({ className = "", onClose }) => {
  return (
    <div
      className={`w-[557px] relative shadow-[0px_4px_50px_rgba(0,_0,_0,_0.05)] rounded-11xl bg-gray1-1000 border-goldenrod-400 border-[1px] border-solid box-border flex flex-col items-start justify-start py-[58px] px-[59px] gap-8 leading-[normal] tracking-[normal] max-w-full max-h-full overflow-auto text-left text-11xl text-aliceblue-100 font-manrope mq450:gap-4 mq450:pl-5 mq450:pr-5 mq450:box-border ${className}`}
    >
      <div className="flex flex-row items-start justify-start pt-0 px-0 pb-2.5">
        <h1 className="m-0 relative text-inherit font-bold font-[inherit]">
          Tokenization Request
        </h1>
      </div>
      <form className="m-0 self-stretch flex flex-col items-start justify-start gap-2.5 max-w-full">
        <div className="relative text-base font-semibold font-manrope text-shades-white text-left inline-block min-w-[122px]">
          Request Details
        </div>
        <div className="self-stretch flex flex-row items-end justify-start flex-wrap content-end gap-2.5">
          <div className="flex-1 flex flex-col items-start justify-start gap-1.5 min-w-[138px]">
            <div className="self-stretch flex flex-row items-center justify-start gap-1">
              <img
                className="h-3.5 w-3.5 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/lefticon.svg"
              />
              <b className="relative text-xs inline-block font-manrope text-aliceblue-100 text-left min-w-[57px]">
                Full Name
              </b>
            </div>
            <div className="self-stretch shadow-[0px_2px_4px_rgba(66,_80,_102,_0.1)] rounded-mini bg-light-black border-darkslategray-500 border-[1px] border-solid overflow-hidden flex flex-col items-start justify-center py-2.5 px-[11px]">
              <input
                className="w-full [border:none] [outline:none] bg-[transparent] self-stretch h-[19px] flex flex-row items-center justify-start font-manrope font-bold text-sm text-shades-white min-w-[114px]"
                placeholder="John"
                type="text"
              />
            </div>
            <div className="self-stretch h-3.5 hidden flex-row items-start justify-start gap-1">
              <img
                className="h-3.5 w-3.5 relative overflow-hidden shrink-0 min-h-[14px]"
                alt=""
                src="/lefticon1.svg"
              />
              <b className="h-4 flex-1 relative text-xs inline-block font-manrope text-mediumseagreen text-left max-w-[153%] shrink-0">
                Response
              </b>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-1.5 min-w-[138px]">
            <div className="self-stretch flex flex-row items-center justify-start gap-1">
              <img
                className="h-3.5 w-3.5 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/lefticon.svg"
              />
              <b className="relative text-xs inline-block font-manrope text-gainsboro-200 text-left min-w-[42px]">
                User ID
              </b>
            </div>
            <div className="self-stretch shadow-[0px_2px_4px_rgba(66,_80,_102,_0.1)] rounded-mini bg-light-black border-darkslategray-500 border-[1px] border-solid overflow-hidden flex flex-col items-start justify-center py-2.5 px-[11px]">
              <input
                className="w-full [border:none] [outline:none] bg-[transparent] self-stretch h-[19px] flex flex-row items-center justify-start font-manrope font-bold text-sm text-shades-white min-w-[114px]"
                placeholder="Doe"
                type="text"
              />
            </div>
            <div className="self-stretch h-3.5 hidden flex-row items-start justify-start gap-1">
              <img
                className="h-3.5 w-3.5 relative overflow-hidden shrink-0 min-h-[14px]"
                alt=""
                src="/lefticon1.svg"
              />
              <b className="h-4 flex-1 relative text-xs inline-block font-manrope text-mediumseagreen text-left max-w-[153%] shrink-0">
                Response
              </b>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-1.5 max-w-full">
          <div className="self-stretch flex flex-row items-center justify-start gap-1">
            <img
              className="h-3.5 w-3.5 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/lefticon.svg"
            />
            <b className="relative text-xs inline-block font-manrope text-aliceblue-100 text-left min-w-[52px]">
              Wallet ID
            </b>
          </div>
          <div className="self-stretch shadow-[0px_2px_4px_rgba(66,_80,_102,_0.1)] rounded-mini bg-light-black border-darkslategray-500 border-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-center py-2.5 px-[11px] max-w-full">
            <div className="self-stretch flex flex-row items-center justify-start flex-wrap content-center gap-2 max-w-full">
              <img
                className="h-4 w-4 relative object-contain mq450:w-full"
                alt=""
                src="/wallet@2x.png"
              />
              <b className="flex-1 relative text-sm inline-block font-manrope text-shades-white text-left min-w-[83px] max-w-full">
                Connect Wallet
              </b>
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0"
                alt=""
                src="/righticon.svg"
              />
            </div>
          </div>
          <div className="w-[343px] h-3.5 hidden flex-row items-start justify-start gap-1 max-w-full">
            <img
              className="h-3.5 w-3.5 relative overflow-hidden shrink-0 min-h-[14px]"
              alt=""
              src="/lefticon1.svg"
            />
            <b className="h-4 flex-1 relative text-xs inline-block font-manrope text-mediumseagreen text-left max-w-[calc(100%_-_18px)]">
              Response
            </b>
          </div>
        </div>
      </form>
      <section className="self-stretch flex flex-col items-start justify-start gap-2.5 max-w-full text-left text-xs text-aliceblue-100 font-manrope">
        <div className="relative text-base font-semibold text-shades-white inline-block min-w-[103px]">
          Token Details
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-1.5 max-w-full">
          <div className="self-stretch flex flex-row items-center justify-start gap-1">
            <img
              className="h-3.5 w-3.5 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/lefticon.svg"
            />
            <b className="relative inline-block min-w-[34px]">Name</b>
          </div>
          <div className="self-stretch shadow-[0px_2px_4px_rgba(66,_80,_102,_0.1)] rounded-mini bg-light-black border-darkslategray-500 border-[1px] border-solid overflow-hidden flex flex-col items-start justify-center py-2.5 px-[11px]">
            <input
              className="w-full [border:none] [outline:none] bg-[transparent] self-stretch h-[19px] flex flex-row items-center justify-start font-manrope font-bold text-sm text-gray1-1800 min-w-[248px]"
              placeholder="Token name"
              type="text"
            />
          </div>
          <div className="w-[343px] h-3.5 hidden flex-row items-start justify-start gap-1 max-w-full text-mediumseagreen">
            <img
              className="h-3.5 w-3.5 relative overflow-hidden shrink-0 min-h-[14px]"
              alt=""
              src="/lefticon1.svg"
            />
            <b className="h-4 flex-1 relative inline-block max-w-[calc(100%_-_18px)]">
              Response
            </b>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-1.5 max-w-full">
          <div className="self-stretch flex flex-row items-center justify-start py-0 pl-0 pr-[312px] mq450:pr-5 mq450:box-border">
            <img
              className="h-3.5 w-3.5 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/lefticon.svg"
            />
            <b className="relative inline-block min-w-[111px]">
              Describe your case
            </b>
          </div>
          <textarea
            className="border-darkslategray-500 border-[1px] border-solid bg-light-black h-[104px] w-auto [outline:none] self-stretch shadow-[0px_2px_4px_rgba(66,_80,_102,_0.1)] rounded-mini box-border overflow-hidden shrink-0 flex flex-col items-start justify-start p-3 font-manrope font-bold text-sm text-gray1-1800"
            placeholder="Tell us about your use case..."
            rows={5}
            cols={22}
          />
          <div className="w-[343px] h-3.5 hidden flex-row items-start justify-start gap-1 max-w-full text-mediumseagreen">
            <img
              className="h-3.5 w-3.5 relative overflow-hidden shrink-0 min-h-[14px]"
              alt=""
              src="/lefticon1.svg"
            />
            <b className="h-4 flex-1 relative inline-block max-w-[calc(100%_-_18px)]">
              Response
            </b>
          </div>
        </div>
      </section>
      <img
        className="w-3.5 h-3.5 relative overflow-hidden shrink-0 hidden"
        alt=""
        src="/lefticon.svg"
      />
      <div className="w-[343px] h-3.5 hidden flex-row items-start justify-start gap-1 max-w-full text-xs text-mediumseagreen">
        <img
          className="h-3.5 w-3.5 relative overflow-hidden shrink-0 min-h-[14px]"
          alt=""
          src="/lefticon1.svg"
        />
        <b className="h-4 flex-1 relative inline-block max-w-[calc(100%_-_18px)]">
          Response
        </b>
      </div>
      <section className="self-stretch flex flex-col items-start justify-start gap-8 max-w-full text-left text-xs text-aliceblue-100 font-manrope mq450:gap-4">
        <div className="self-stretch flex flex-col items-start justify-start gap-1.5 max-w-full">
          <b className="relative inline-block min-w-[85px]">Phone number</b>
          <div className="self-stretch shadow-[0px_2px_4px_rgba(66,_80,_102,_0.1)] rounded-mini bg-light-black border-darkslategray-500 border-[1px] border-solid box-border overflow-hidden flex flex-row items-start justify-start py-2.5 px-[11px] max-w-full text-sm text-shades-white">
            <div className="flex-1 flex flex-row items-start justify-start flex-wrap content-start gap-2 max-w-full">
              <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                <img
                  className="w-4 h-4 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/lefticon-7.svg"
                />
              </div>
              <b className="relative inline-block min-w-[33px] whitespace-nowrap">
                +370
              </b>
              <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                <img
                  className="w-4 h-4 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/righticon.svg"
                />
              </div>
              <div className="h-[19px] w-px relative bg-gainsboro-400 mq450:w-full mq450:h-px" />
              <b className="flex-1 relative inline-block text-gray1-1400 min-w-[78px]">
                Phone number
              </b>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-2.5 max-w-full text-shades-white">
          <div className="relative text-base font-semibold inline-block min-w-[118px]">
            Asset Overview
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-1.5 max-w-full text-aliceblue-100">
            <div className="self-stretch flex flex-row items-center justify-start gap-1">
              <img
                className="h-3.5 w-3.5 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/lefticon.svg"
              />
              <b className="relative inline-block min-w-[63px]">Asset type</b>
            </div>
            <div className="self-stretch shadow-[0px_2px_4px_rgba(66,_80,_102,_0.1)] rounded-mini bg-light-black border-darkslategray-500 border-[1px] border-solid overflow-hidden flex flex-col items-start justify-center py-2.5 px-[11px]">
              <input
                className="w-full [border:none] [outline:none] bg-[transparent] self-stretch h-[19px] flex flex-row items-center justify-start font-manrope font-bold text-sm text-gray1-1800 min-w-[248px]"
                placeholder="Asset Type"
                type="text"
              />
            </div>
            <div className="w-[343px] h-3.5 hidden flex-row items-start justify-start gap-1 max-w-full text-mediumseagreen">
              <img
                className="h-3.5 w-3.5 relative overflow-hidden shrink-0 min-h-[14px]"
                alt=""
                src="/lefticon1.svg"
              />
              <b className="h-4 flex-1 relative inline-block max-w-[calc(100%_-_18px)]">
                Response
              </b>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-2.5 text-black">
            <div className="flex-1 flex flex-col items-start justify-start gap-1.5 min-w-[138px]">
              <div className="self-stretch h-3.5 hidden flex-row items-center justify-start py-0 pl-0 pr-3 box-border gap-1">
                <img
                  className="h-3.5 w-3.5 relative overflow-hidden shrink-0 hidden min-h-[14px]"
                  alt=""
                  src="/lefticon.svg"
                />
                <b className="relative">Credit card information</b>
              </div>
              <div className="self-stretch shadow-[0px_2px_4px_rgba(66,_80,_102,_0.1)] rounded-mini bg-light-black border-darkslategray-500 border-[1px] border-solid overflow-hidden flex flex-col items-start justify-center py-2.5 px-[11px]">
                <input
                  className="w-full [border:none] [outline:none] bg-[transparent] self-stretch h-[19px] flex flex-row items-center justify-start font-manrope font-bold text-sm text-gray1-1800 min-w-[114px]"
                  placeholder="MM / YY"
                  type="text"
                />
              </div>
              <div className="self-stretch h-3.5 hidden flex-row items-start justify-start gap-1 text-mediumseagreen">
                <img
                  className="h-3.5 w-3.5 relative overflow-hidden shrink-0 min-h-[14px]"
                  alt=""
                  src="/lefticon1.svg"
                />
                <b className="h-4 flex-1 relative inline-block max-w-[153%] shrink-0">
                  Response
                </b>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-1.5 min-w-[138px]">
              <div className="self-stretch h-3.5 hidden flex-row items-center justify-start py-0 pl-0 pr-3 box-border gap-1">
                <img
                  className="h-3.5 w-3.5 relative overflow-hidden shrink-0 hidden min-h-[14px]"
                  alt=""
                  src="/lefticon.svg"
                />
                <b className="relative">Credit card information</b>
              </div>
              <div className="self-stretch shadow-[0px_2px_4px_rgba(66,_80,_102,_0.1)] rounded-mini bg-light-black border-darkslategray-500 border-[1px] border-solid overflow-hidden flex flex-col items-start justify-center py-2.5 px-[11px]">
                <input
                  className="w-full [border:none] [outline:none] bg-[transparent] self-stretch h-[19px] flex flex-row items-center justify-start font-manrope font-bold text-sm text-gray1-1800 min-w-[114px]"
                  placeholder="CCV"
                  type="text"
                />
              </div>
              <div className="self-stretch h-3.5 hidden flex-row items-start justify-start gap-1 text-mediumseagreen">
                <img
                  className="h-3.5 w-3.5 relative overflow-hidden shrink-0 min-h-[14px]"
                  alt=""
                  src="/lefticon1.svg"
                />
                <b className="h-4 flex-1 relative inline-block max-w-[153%] shrink-0">
                  Response
                </b>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch h-[203px] flex flex-col items-start justify-start pt-0 px-0 pb-2.5 box-border gap-[7px] text-left text-base text-shades-white font-manrope">
        <div className="relative font-semibold">Asset Documentation</div>
        <b className="relative text-xs text-aliceblue-100">
          Upload Asset Deed Documentation
        </b>
        <div className="self-stretch flex-1 flex flex-row items-start justify-center pt-[38.1px] px-5 pb-[38px] relative text-center text-xl text-slategray-100">
          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-lg bg-light-black border-goldenrod-100 border-[2px] border-dashed box-border" />
          <h3 className="m-0 w-[190px] relative text-inherit font-bold font-[inherit] flex items-center shrink-0 z-[1] mq450:text-base">
            <span className="w-full">
              <span>{`Drag & drop your files here or `}</span>
              <span className="[text-decoration:underline] text-goldenrod-100">
                browse
              </span>
            </span>
          </h3>
        </div>
      </section>
      <button className="cursor-pointer border-black border-[1px] border-solid py-2.5 px-[23px] bg-[transparent] rounded-xl [background:linear-gradient(264.34deg,_#dfc32b,_#000)] overflow-hidden flex flex-row items-start justify-start gap-2">
        <img
          className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
          alt=""
          src="/lefticon2.svg"
        />
        <b className="relative text-sm inline-block font-manrope text-shades-white text-left min-w-[50px]">
          Submit
        </b>
        <img
          className="h-4 w-4 relative overflow-hidden shrink-0"
          alt=""
          src="/righticon-2.svg"
        />
      </button>
    </div>
  );
};

TokenizationRequest.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default TokenizationRequest;
