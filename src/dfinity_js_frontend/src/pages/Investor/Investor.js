import React, { useCallback, useEffect, useState } from "react";
import { getInvestorProfileByPrincipal } from "../../utils/propertyTokenization";
import { Notification } from "../../components/utils/Notifications";
import Wallet from "../../components/Wallet";
import InvestorDashboard from "./InvestorDashboard";
import CreateInvestorProfile from "../../components/Investor/CreateInvestorProfile";
import Loader from "../../components/utils/Loader";
import Cover from "../../components/utils/Cover";
import { login } from "../../utils/auth";
import { Nav } from "react-bootstrap";

const Investor = () => {
  const [investor, setInvestor] = useState({});
  const [loading, setLoading] = useState(false);

  const isAuthenticated = window.auth.isAuthenticated;

  const fetchInvestor = useCallback(async () => {
    try {
      setLoading(true);
      const res = await getInvestorProfileByPrincipal();
      if (res.Ok) {
        console.log(res.Ok); // Log the entire profile data for debugging
        setInvestor(res.Ok);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, []); // Make sure to include dependencies if necessary

  useEffect(() => {
    fetchInvestor();
  }, []);

  return (
    <>
      <Notification />
      {isAuthenticated ? (
        !loading ? (
          investor?.name ? (
            <>
              <main>
                <InvestorDashboard investor={investor} />
              </main>
            </>
          ) : (
            <CreateInvestorProfile fetchInvestor={fetchInvestor} />
          )
        ) : (
          <Loader />
        )
      ) : (
        <Cover login={login} />
      )}
    </>
  );
};

export default Investor;
