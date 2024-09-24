<Modal.Footer
          className="d-flex justify-content-between bg-light border-top-0"
          style={{ padding: "20px", borderRadius: "0 0 10px 10px" }}
        >
          <Button
            variant="outline-danger"
            onClick={handleClose}
            className="px-4 py-2 rounded-pill"
            style={{
              fontSize: "1rem",
              fontWeight: "500",
              letterSpacing: "0.5px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              transition: "all 0.2s ease-in-out",
            }}
          >
            Cancel
          </Button>

          <Button
            variant="success"
            onClick={() =>
              handleInvestment(
                selectedOffering.id,
                investmentAmount,
                selectedOffering.propertyOwnerId
              )
            }
            className="px-4 py-2 rounded-pill"
            style={{
              fontSize: "1rem",
              fontWeight: "500",
              background:
                "linear-gradient(135deg, rgba(72,177,72,1) 0%, rgba(66,155,66,1) 100%)",
              border: "none",
              color: "#fff",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          >
            Invest Now 🚀
          </Button>
        </Modal.Footer>