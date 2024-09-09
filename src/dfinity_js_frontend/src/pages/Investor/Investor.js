import React, { useCallback, useEffect, useState } from "react";
import { getInvestorProfileByPrincipal } from "utils/donorFund";
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

  const isAuthenticated = window.Authent.isAuthenticated;

  const fetchInvestor = useCallback(async () => {
    try {
      setLoading(true);
      setInvestor(
        await getInvestorProfileByPrincipal().then(async (res) => {
          console.log(res);
          return res.ok;
        })
      );
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  });

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
              <Nav className="justify-content-end pt-3 pb-5 mr-4">
                <Nav.Item>
                  <Wallet />
                </Nav.Item>
              </Nav>
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
