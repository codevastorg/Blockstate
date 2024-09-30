import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  getAllOfferings,
  makeInvestment,
  leaseOffering, // Assuming you have a function for leasing offerings
} from "../../utils/propertyTokenization";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Img } from "../../components/Img";
import * as Images from "../../assets/images";
import PayInvestmentButton from "./PayInvestment";
import { Modal, Button, Form, Spinner } from "react-bootstrap";

const OrderReport = ({ className = "", investorId }) => {
  const [offerings, setOfferings] = useState([]);
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state
  const [showModal, setShowModal] = useState(false); // Modal visibility state
  const [selectedOffering, setSelectedOffering] = useState(null);
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [leaseDuration, setLeaseDuration] = useState(""); // Lease duration state
  const [isProcessing, setIsProcessing] = useState(false); // Spinner state
  const [actionType, setActionType] = useState(""); // Track if it's investment or leasing

  useEffect(() => {
    async function fetchOfferings() {
      setLoading(true); // Set loading to true when fetch begins
      try {
        const response = await getAllOfferings();
        console.log("offerings Fetched:", response);
        if (response?.Ok && Array.isArray(response.Ok)) {
          setOfferings(response.Ok); // Ensure response.Ok is an array
        } else {
          console.error(
            "Error fetching offerings:",
            response?.Err || "Unexpected response"
          );
          setError("Error fetching offerings.");
        }
      } catch (error) {
        console.error("Error fetching offerings:", error);
        setError("Error fetching offerings. Please try again later.");
      } finally {
        setLoading(false); // Set loading to false after fetch completes
      }
    }

    fetchOfferings(); // Call the fetch function
  }, []);

  // Function to handle investment payment
  const handleInvestment = async (offeringId, investmentAmount, propertyOwnerId) => {
    const amountPayable = BigInt(investmentAmount);
    if (!amountPayable || amountPayable <= 0) {
      toast.error("Please enter a valid amount to invest.");
      return;
    }
    setIsProcessing(true);
    try {
      await makeInvestment({
        investorId,
        propertyOwnerId,
        offeringId,
        amountPayable,
      });
      toast.success("Investment successful");
    } catch (err) {
      console.error("Error:", err);
      toast.error("Payment failed. Please check if the wallet is funded.");
    } finally {
      setIsProcessing(false);
    }
    setShowModal(false);
  };

  // Function to handle leasing action
  const handleLease = async (offeringId, leaseDuration, propertyOwnerId) => {
    if (!leaseDuration || leaseDuration <= 0) {
      toast.error("Please enter a valid lease duration.");
      return;
    }
    setIsProcessing(true);
    try {
      await leaseOffering({
        investorId,
        propertyOwnerId,
        offeringId,
        leaseDuration,
      });
      toast.success("Leasing successful");
    } catch (err) {
      console.error("Error:", err);
      toast.error("Leasing failed. Please check the details.");
    } finally {
      setIsProcessing(false);
    }
    setShowModal(false);
  };

  // Show the modal and set the selected offering for the user to invest or lease
  const openActionModal = (offering, type) => {
    setSelectedOffering(offering);
    setActionType(type);
    setShowModal(true);
  };

  // Close the modal
  const handleClose = () => {
    setShowModal(false);
    setInvestmentAmount(""); // Reset the investment amount
    setLeaseDuration(""); // Reset the lease duration
  };

  return (
    <section className={`... ${className}`}>
      {/* Existing structure for rendering offerings */}
      <div className="w-[891.2px] flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-1.5 max-w-full">
          {loading ? (
            <div>Loading offerings...</div>
          ) : error ? (
            <div>{error}</div>
          ) : offerings.length > 0 ? (
            offerings.map((offering, index) => (
              <div key={index} className="...">
                <div className="w-[102px]">
                  <PayInvestmentButton
                    invest={() => openActionModal(offering, "invest")}
                  />
                </div>
                <div className="w-[102px]">
                  <Button
                    variant="primary"
                    onClick={() => openActionModal(offering, "lease")}
                  >
                    Lease Offering
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <p>No offerings found</p>
          )}
        </div>
      </div>

      {/* Modal for investment or leasing */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {actionType === "invest" ? "💸 Enter Investment Amount" : "🏢 Lease Offering"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {actionType === "invest" ? (
            <>
              <p>How much would you like to invest?</p>
              <Form.Control
                type="number"
                value={investmentAmount}
                onChange={(e) => setInvestmentAmount(e.target.value)}
                placeholder="Enter amount"
              />
            </>
          ) : (
            <>
              <p>Enter lease duration (in months):</p>
              <Form.Control
                type="number"
                value={leaseDuration}
                onChange={(e) => setLeaseDuration(e.target.value)}
                placeholder="Enter lease duration"
              />
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() =>
              actionType === "invest"
                ? handleInvestment(selectedOffering?.offeringId, investmentAmount, selectedOffering?.propertyOwnerId)
                : handleLease(selectedOffering?.offeringId, leaseDuration, selectedOffering?.propertyOwnerId)
            }
            disabled={isProcessing}
          >
            {isProcessing ? <Spinner animation="border" /> : actionType === "invest" ? "Invest" : "Lease"}
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

OrderReport.propTypes = {
  className: PropTypes.string,
  investorId: PropTypes.string.isRequired,
};

export default OrderReport;
