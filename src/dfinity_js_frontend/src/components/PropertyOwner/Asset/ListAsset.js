import React, { useState } from "react";
import { Button, Modal, Form, FloatingLabel } from "react-bootstrap";

const AddAsset = ({ save, userId, show, handleClose }) => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [totalValue, setTotalValue] = useState("");

  // Check if all form fields are filled
  const isFormFilled = () => {
    return title && location && imageUrl && description && totalValue;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isFormFilled()) {
      // Create the asset payload based on the form data
      const assetPayload = {
        userId,
        title,
        location,
        imageUrl,
        description,
        totalValue: parseFloat(totalValue),
      };

      // Save the asset
      save(assetPayload);
      handleClose(); // Close the modal after saving

      // Clear the form fields
      setTitle("");
      setLocation("");
      setImageUrl("");
      setDescription("");
      setTotalValue("");
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton className="bg-amber-600 text-white">
          <Modal.Title>List a New Asset</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-4">
          <Form onSubmit={handleSubmit}>
            <FloatingLabel
              controlId="floatingTitle"
              label="Asset Title"
              className="mb-4"
            >
              <Form.Control
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="rounded-3 shadow-sm"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingLocation"
              label="Location"
              className="mb-4"
            >
              <Form.Control
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="rounded-3 shadow-sm"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingImageUrl"
              label="Image URL"
              className="mb-4"
            >
              <Form.Control
                type="text"
                placeholder="Image URL"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="rounded-3 shadow-sm"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingDescription"
              label="Description"
              className="mb-4"
            >
              <Form.Control
                as="textarea"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="rounded-3 shadow-sm"
                style={{ height: "100px" }}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingTotalValue"
              label="Total Value"
              className="mb-4"
            >
              <Form.Control
                type="number"
                placeholder="Total Value"
                value={totalValue}
                onChange={(e) => setTotalValue(e.target.value)}
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
                onClick={handleSubmit}
                className="shadow-sm"
              >
                Add Asset
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddAsset;
