import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Asset from "./Asset";
import PropTypes from "prop-types";
import { Img } from "../../components/Img";
import * as Images from "../../assets/images";
import AddAsset from "../PropertyOwner/Asset/ListAsset";
import { createAsset, getAllAssets } from "../../utils/propertyTokenization";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyAssetsOverview = ({ className = "", propertyOwner }) => {
  const id = propertyOwner;

  const [assets, setAssets] = useState([]);
  const [activeModal, setActiveModal] = useState(null); // State for modal visibility
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  const onFilterDropContainerClick = useCallback(() => {
    navigate("/offerings");
  }, [navigate]);

  useEffect(() => {
    async function fetchAssets() {
      setLoading(true); // Set loading to true when fetch begins
      try {
        const response = await getAllAssets();
        if (response?.Ok && Array.isArray(response.Ok)) {
          setAssets(response.Ok); // Ensure response.Ok is an array
        } else {
          console.error(
            "Error fetching assets:",
            response?.Err || "Unexpected response"
          );
          toast.error("Error fetching assets.");
        }
      } catch (error) {
        console.error("Error fetching assets:", error);
        toast.error("Error fetching assets.");
      } finally {
        setLoading(false); // Set loading to false after fetch completes
      }
    }

    fetchAssets(); // Call the fetch function
  }, []);

  // Function to save the asset
  const saveAsset = async (assetPayload) => {
    try {
      const response = await createAsset(assetPayload);

      if (response?.Ok) {
        toast.success("Asset added successfully");
        const newAsset = response.Ok[0];
        setAssets((prevAssets) => [...prevAssets, newAsset]); // Add new asset to the list
      } else if (response?.Err) {
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

  // Helper function to format numbers with commas
  const formatNumber = (number) => {
    return number.toLocaleString();
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

      {/* Asset List */}
      <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start pt-0 pb-[11px] pl-0 pr-1 gap-x-9 gap-y-[35px] text-xs mq700:gap-[17px]">
        {loading ? ( // Show loading spinner while assets are being fetched
          <div>Loading assets...</div>
        ) : assets.length > 0 ? (
          assets
            .slice(-5) // Get the last 5 assets
            .map((asset, index) => {
              // Defensive check for undefined or missing id
              if (!asset || !asset.id) {
                console.error(
                  `Asset is undefined or missing id at index ${index}`,
                  asset
                );
                return null; // Skip rendering for invalid assets
              }

              return (
                <Asset
                  key={asset.id}
                  title={asset.title}
                  location={asset.location}
                  totalValue={String(asset.totalValue)}
                />
              );
            })
        ) : (
          <p>No assets available</p>
        )}
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
