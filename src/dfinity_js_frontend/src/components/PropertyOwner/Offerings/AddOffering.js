import React, { useState } from "react";
import { Button, Modal, Form, FloatingLabel } from "react-bootstrap";

// Offering payload structure
const OfferingPayload = (assetId) => ({
  assetId,
});

const AddOffering = ({ save, initialAssetId = "", show, handleClose }) => {
  const [assetId, setAssetId] = useState(initialAssetId); // Manage assetId state

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (assetId) {
      // Create the offering payload based on the assetId
      const offeringPayload = OfferingPayload(assetId);

      // Save the offering
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
            <FloatingLabel
              controlId="floatingAssetId"
              label="Asset ID"
              className="mb-4"
            >
              <Form.Control
                type="text"
                placeholder="Enter Asset ID"
                value={assetId} // Bind to the assetId state
                onChange={(e) => setAssetId(e.target.value)} // Update assetId state
                className="rounded-3 shadow-sm"
              />
            </FloatingLabel>

            <div className="d-flex justify-content-end">
              <Button
                variant="secondary"
                onClick={handleClose}
                className="me-2"
              >
                Cancel
              </Button>
              <Button
                style={{ backgroundColor: "#D97706", borderColor: "#D97706" }} // Amber-600 color
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
