import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { Img } from "../../../components/Img";
import * as Images from "../../../assets/images";
import AddOffering from "./AddOffering";
import {
  createOffering,
  getAllOfferings,
} from "../../../utils/propertyTokenization";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyOfferingsOverview = ({ className = "", propertyOwner }) => {
  const id = propertyOwner;
  const [offerings, setOfferings] = useState([]);
  const [activeModal, setActiveModal] = useState(null); // State for modal visibility
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  const onFilterDropContainerClick = useCallback(() => {
    navigate("/offerings");
  }, [navigate]);

  useEffect(() => {
    async function fetchOfferings() {
      setLoading(true);
      try {
        const response = await getAllOfferings();
        if (response?.Ok && Array.isArray(response.Ok)) {
          setOfferings(response.Ok);
        } else {
          console.error(
            "Error fetching offerings:",
            response?.Err || "Unexpected response"
          );
        }
      } catch (error) {
        console.error("Error fetching offerings:", error);
        toast.error("Error fetching offerings.");
      } finally {
        setLoading(false);
      }
    }

    fetchOfferings();
  }, []);

  const saveOffering = async (offeringPayload) => {
    try {
      const response = await createOffering(offeringPayload);

      if (response?.Ok) {
        toast.success("Offering added successfully");
        const newOffering = response.Ok[0];
        setOfferings((prevOfferings) => [...prevOfferings, newOffering]);
      } else {
        console.error("Error creating offering:", response.Err);
        toast.error(`Error creating an offering: ${response.Err}`);
      }
    } catch (error) {
      console.error("Error creating offering:", error);
      toast.error("Error creating an offering.");
    }
  };

  const openModal = () => {
    setActiveModal("offering");
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <section
      className={`self-stretch rounded-23xl bg-light-black flex flex-col items-start justify-start pt-[33px] px-[55px] pb-[9px] box-border gap-4 max-w-full text-center text-sm text-gainsboro-200 font-manrope mq1025:pl-[27px] mq1025:pr-[27px] mq1025:box-border mq750:pt-[21px] mq750:pb-5 mq750:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-between max-w-full gap-5 text-left text-xl text-shades-white mq1025:flex-wrap">
        <h3 className="m-0 w-[89.8px] relative text-inherit leading-[140%] font-semibold font-[inherit] inline-block shrink-0 mq450:text-base mq450:leading-[22px]">
          Offerings
        </h3>

        {/* Create Offering Button in the middle */}
        <button
          onClick={openModal}
          className="cursor-pointer [border:none] py-1 px-[22px] bg-amber-600 shadow-[0px_0px_1px_rgba(12,_26,_75,_0.24),_0px_3px_8px_-1px_rgba(50,_50,_71,_0.05)] rounded-xl flex flex-row items-center justify-center gap-2 hover:bg-darkgoldenrod-200"
        >
          <div className="relative text-lg leading-[26px] font-medium font-manrope text-shades-black text-center inline-block min-w-[60px]">
            Create Offering
          </div>
        </button>

        {/* Filters and Search */}
        <div className="w-[561px] shadow-[0px_20px_24px_-4px_rgba(255,_235,_176,_0.04),_0px_8px_11px_-4px_rgba(45,_54,_67,_0.04)] rounded-xl flex flex-row items-center justify-center py-[5.5px] px-2.5 box-border gap-4 opacity-[0.9] max-w-full mq750:flex-wrap">
          <div className="flex-1 rounded-xl border-amber-100 border-[1px] border-solid box-border flex flex-row items-center justify-start py-0.5 px-4 min-w-[123px]">
            <input
              className="w-[123px] [border:none] [outline:none] font-manrope text-lg bg-[transparent] h-[26px] relative leading-[26px] text-gray-300 text-left flex items-center p-0"
              placeholder="Search query..."
              type="text"
            />
          </div>
          <button className="cursor-pointer border-amber-600 border-[1.5px] border-solid py-0.5 px-3.5 bg-[transparent] w-[116px] [filter:drop-shadow(0px_0px_1px_rgba(12,_26,_75,_0.24))_drop-shadow(0px_3px_8px_rgba(50,_50,_71,_0.05))] rounded-xl box-border flex flex-row items-center justify-center gap-2 hover:bg-darkgoldenrod-300 hover:border-darkgoldenrod-200 hover:border-[1.5px] hover:border-solid hover:box-border">
            <Img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src={Images.imgFilter}
            />
            <a className="[text-decoration:none] relative text-lg leading-[26px] font-medium font-manrope text-shades-white text-center inline-block min-w-[52px]">
              Filters
            </a>
          </button>
          <button className="cursor-pointer [border:none] py-1 px-[22px] bg-amber-600 shadow-[0px_0px_1px_rgba(12,_26,_75,_0.24),_0px_3px_8px_-1px_rgba(50,_50,_71,_0.05)] rounded-xl flex flex-row items-center justify-center gap-2 hover:bg-darkgoldenrod-200">
            <Img className="h-6 w-6 relative" alt="" src={Images.imgSearch} />
            <div className="relative text-lg leading-[26px] font-medium font-manrope text-shades-black text-center inline-block min-w-[60px]">
              Search
            </div>
          </button>
        </div>
      </div>

      {/* Table Layout */}
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-1.5 max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-2 pr-[13px] box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5">
              {/* Ensure consistent widths for all columns */}
              <div className="w-[120px] flex flex-col items-start justify-start py-0 box-border">
                <div className="self-stretch relative leading-[20px] font-semibold">
                  Asset ID
                </div>
              </div>
              <div className="w-[120px] relative leading-[20px] font-semibold">
                Price per Token
              </div>
              <div className="w-[120px] flex flex-col items-start justify-start py-0 box-border">
                <div className="self-stretch relative leading-[20px] font-semibold">
                  Available Tokens
                </div>
              </div>
              <div className="w-[120px] flex flex-col items-start justify-start py-0 box-border">
                <div className="relative leading-[20px] font-semibold">
                  Status
                </div>
              </div>
              <div className="w-[120px] flex flex-col items-start justify-start py-0 box-border">
                <div className="relative leading-[20px] font-semibold">
                  Date Created
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-0 px-1">
        <div className="self-stretch flex flex-col items-start justify-start relative gap-[27px] shrink-0">
          {loading ? (
            <div className="text-center">Loading offerings...</div>
          ) : offerings.length > 0 ? (
            offerings.map((offering) => (
              <div
                key={offering.id}
                className="self-stretch flex flex-row items-start justify-between py-0 pl-0 pr-[25px] gap-5 mq1025:flex-wrap"
              >
                <div className="w-[106px] flex flex-col items-start justify-start py-0 pl-0 pr-[3px] box-border">
                  <div className="relative leading-[20px] font-semibold">
                    {offering.assetId}
                  </div>
                </div>
                <div className="w-[97px] relative leading-[20px] font-semibold">
                  ${offering.pricePerToken}
                </div>
                <div className="w-[90px] relative leading-[20px] font-semibold">
                  {offering.availableTokens}
                </div>
                <div className="w-[85px] rounded-11xl bg-mediumaquamarine flex flex-col items-center justify-center py-0.5 px-[15px] box-border text-accents-green">
                  <div className="self-stretch relative leading-[22px] font-semibold">
                    {offering.status}
                  </div>
                </div>
                <div className="relative leading-[20px] font-semibold inline-block min-w-[87px]">
                  {offering.startDate}
                </div>
              </div>
            ))
          ) : (
            <p>No offerings available</p>
          )}
        </div>
      </div>

      {/* Add Offering Modal */}
      <AddOffering
        save={saveOffering}
        userId={id}
        show={activeModal === "offering"}
        handleClose={closeModal}
      />
    </section>
  );
};

MyOfferingsOverview.propTypes = {
  className: PropTypes.string,
};

export default MyOfferingsOverview;
