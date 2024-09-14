import React, { useState, useEffect } from "react";
import { Button, Modal, Form, FloatingLabel } from "react-bootstrap";
import { getAllOfferings, getAllAssets } from "../../../utils/propertyTokenization";

const OfferingPayload = (assetId, propertyOwnerId) => ({
  assetId,
  propertyOwnerId,
});

const AddOffering = ({
  save,
  initialAssetId = "",
  show,
  handleClose,
  propertyOwnerId,
}) => {
  const [assetId, setAssetId] = useState(initialAssetId); // Manage assetId state
  const [offerings, setOfferings] = useState([]);
  const [assets, setAssets] = useState([]); // State to hold fetched assets
  const [loading, setLoading] = useState(false); // Loading state

  // Fetch offerings and assets when the component mounts
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
      } finally {
        setLoading(false);
      }
    }

    async function fetchAssets() {
      setLoading(true);
      try {
        const response = await getAllAssets();
        if (response?.Ok && Array.isArray(response.Ok)) {
          setAssets(response.Ok); // Set the fetched assets
        } else {
          console.error(
            "Error fetching assets:",
            response?.Err || "Unexpected response"
          );
        }
      } catch (error) {
        console.error("Error fetching assets:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchOfferings();
    fetchAssets();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (assetId) {
      const offeringPayload = OfferingPayload(assetId, propertyOwnerId);
      save(offeringPayload);
      handleClose(); // Close the modal after saving
    } else {
      alert("Asset ID is missing.");
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton className="bg-amber-600 text-white">
          <Modal.Title>Create a New Offering</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-4">
          <Form onSubmit={handleSubmit}>
            {/* Dropdown to select asset ID */}
            <FloatingLabel controlId="floatingSelectAsset" label="Select Asset" className="mb-4">
              <Form.Select
                value={assetId}
                onChange={(e) => setAssetId(e.target.value)} // Update the assetId state
                className="rounded-3 shadow-sm"
                disabled={loading} // Disable dropdown while loading
              >
                <option value="">Select an Asset</option>
                {/* Map through the fetched assets to populate dropdown */}
                {assets.map((asset) => (
                  <option key={asset.id} value={asset.id}>
                    {asset.title} - {asset.location}
                  </option>
                ))}
              </Form.Select>
            </FloatingLabel>

            <div className="d-flex justify-content-end">
              <Button variant="secondary" onClick={handleClose} className="me-2">
                Cancel
              </Button>
              <Button
                style={{ backgroundColor: "#D97706", borderColor: "#D97706" }}
                type="submit"
                className="shadow-sm"
              >
                Create Offering
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddOffering;
