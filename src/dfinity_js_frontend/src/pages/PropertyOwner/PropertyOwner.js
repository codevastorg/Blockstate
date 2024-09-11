import React, { useCallback, useEffect, useState } from "react";
import { getPropertyOwnerProfileByPrincipal } from "../../utils/propertyTokenization";
import { Notification } from "../../components/utils/Notifications";
import Wallet from "../../components/Wallet";
import PropertyOwnerDashboard from "./PropertyOwnerDashboard";
import CreatePropertyOwnerProfile from "../../components/PropertyOwner/CreatePropertyOwnerProfile";
import Loader from "../../components/utils/Loader";
import Cover from "../../components/utils/Cover";
import { login } from "../../utils/auth";
import { Nav } from "react-bootstrap";

const PropertyOwner = () => {
  const [propertyOwner, setPropertyOwner] = useState({});
  const [loading, setLoading] = useState(false);

  const isAuthenticated = window.auth.isAuthenticated;

  const fetchPropertyOwner = useCallback(async () => {
    try {
      setLoading(true);
      const res = await getPropertyOwnerProfileByPrincipal();
      if (res.Ok) {
        console.log(res.Ok); // Log the entire profile data for debugging
        setPropertyOwner(res.Ok);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, []); // Make sure to include dependencies if necessary

  useEffect(() => {
    fetchPropertyOwner();
  }, []);

  return (
    <>
      <Notification />
      {isAuthenticated ? (
        !loading ? (
          propertyOwner?.name ? (
            <>
              <Nav className="justify-content-end pt-3 pb-5 mr-4">
                <Nav.Item>
                  <Wallet />
                </Nav.Item>
              </Nav>

              <main>
                <PropertyOwnerDashboard propertyOwner={propertyOwner} />
              </main>
            </>
          ) : (
            <CreatePropertyOwnerProfile
              fetchPropertyOwner={fetchPropertyOwner}
            />
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

export default PropertyOwner;
