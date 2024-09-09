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
    const [PropertyOwner, setPropertyOwner] = useState({});
    const [loading, setLoading] = useState(false);

    const isAuthenticated = window.Authent.isAuthenticated;

    const fetchPropertyOwner = useCallback(async () => {
        try {
            setLoading(true);
            setPropertyOwner(await getPropertyOwnerProfileByPrincipal().then(async (res) => {
                console.log(res);
                return res.ok;
            }));
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    });

    useEffect(() => {
        fetchPropertyOwner();
    }
    , []);

    return (
        <>
        <Notification />
        {isAuthenticated ? (
            !loading ? (
                PropertyOwner?.name ? (
                    <>
                                  <Nav className="justify-content-end pt-3 pb-5 mr-4">
                <Nav.Item>
                  <Wallet />
                </Nav.Item>
              </Nav>
              <main>
                <PropertyOwnerDashboard PropertyOwner={PropertyOwner} />
              </main>
                    </>
                ) : (
                    <CreatePropertyOwnerProfile fetchPropertyOwner={fetchPropertyOwner} />
                )
            ) : (
                <Loader />
                )

            ) : (
                <cover login={login}/>
            )}
        </>
    );
};

export default PropertyOwner;

