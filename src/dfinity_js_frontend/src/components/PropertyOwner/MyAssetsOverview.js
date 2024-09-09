import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Asset from "./Asset";
import PropTypes from "prop-types";
import { Img } from "../../components/Img";
import * as Images from "../../assets/images";
import AddAsset from "../PropertyOwner/Asset/ListAsset";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyAssetsOverview = ({ className = "", propertyOwner }) => {
  const { id } = propertyOwner;

  const [assets, setAssets] = useState([]);
  const [activeModal, setActiveModal] = useState(null); // State for modal visibility
  const navigate = useNavigate();

  const onFilterDropContainerClick = useCallback(() => {
    navigate("/offerings");
  }, [navigate]);

  // Function to save the asset
  const saveAsset = async (assetPayload) => {
    try {
      const response = await createAsset(assetPayload);

      if (response.ok) {
        toast.success("Asset added successfully");
        // Update the assets list after successful save (optional)
        setAssets((prevAssets) => [...prevAssets, assetPayload]);
      } else if (response.Err) {
        console.error("Error listing asset:", response.Err);
        toast.error(`Error listing an asset: ${response.Err}`);
      } else {
        console.error("Unexpected response format:", response);
        toast.error("Error listing an asset.");
      }
    } catch (error) {
      console.error("Error listing asset:", error);
      toast.error("Error listing an asset.");
    }
  };

  // Function to open modal
  const openModal = () => {
    setActiveModal("asset");
  };

  // Function to close modal
  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <section
      className={`self-stretch rounded-11xl bg-gray1-1000 overflow-hidden flex flex-col items-start justify-start pt-[33px] px-[27px] pb-[41px] box-border relative gap-[22px] max-w-full text-left text-xl text-shades-white font-manrope mq450:pt-[21px] mq450:pb-[27px] mq450:box-border ${className}`}
    >
      <div className="w-14 h-1.5 absolute !m-[0] top-[5px] left-[calc(50%_-_28px)] rounded-81xl bg-gray1-600" />
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-3 box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq700:flex-wrap">
          <div className="flex flex-col items-start justify-start pt-[5.5px] px-0 pb-0">
            <div className="relative tracking-[0.1em] font-medium inline-block min-w-[115px] mq450:text-base cursor-pointer hover:text-blue-500 hover:scale-105 transition-all duration-300">
              My Assets
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[5.5px] px-0 pb-0">
            <div
              className="relative tracking-[0.1em] font-medium inline-block min-w-[115px] mq450:text-base cursor-pointer hover:text-blue-500 hover:scale-105 transition-all duration-300"
              onClick={openModal} // Trigger modal opening
            >
              Add Assets
            </div>
          </div>
          <div
            className="w-[238px] rounded-tl-11xl rounded-tr-8xs rounded-br-11xl rounded-bl-8xs border-cards-transparent-stroke border-[1px] border-solid box-border flex flex-row items-start justify-start pt-[7px] px-9 pb-2 cursor-pointer text-sm hover:bg-gray-100 hover:scale-105 transition-all duration-300"
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
        <Asset title="Asset 1" location="Location 1" totalValue="1000" />
        <Asset title="Asset 2" location="Location 2" totalValue="2000" />
        <Asset title="Asset 3" location="Location 3" totalValue="3000" />
        <Asset title="Asset 4" location="Location 4" totalValue="4000" />
        <Asset title="Asset 5" location="Location 5" totalValue="5000" />
      </div>

      {/* Add Asset Modal */}
      <AddAsset
        save={saveAsset}
        userId={id}
        show={activeModal === "asset"}
        handleClose={closeModal}
      />
    </section>
  );
};

MyAssetsOverview.propTypes = {
  className: PropTypes.string,
};

export default MyAssetsOverview;
