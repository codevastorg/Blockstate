import React from "react";
import PropTypes from "prop-types";
import { Modal, Button } from "react-bootstrap";

const AssetDetailsModal = ({ show, handleClose, asset }) => {
  if (!asset) return null;

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{asset.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p><strong>Location:</strong> {asset.location}</p>
        <p><strong>Total Value:</strong> {asset.totalValue}</p>
        <p><strong>Description:</strong> {asset.description}</p>
        {/* Add any other asset details you want to display */}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

AssetDetailsModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  asset: PropTypes.object, // The asset to display
};

export default AssetDetailsModal;
