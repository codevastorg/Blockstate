import React, { useCallback, useEffect, useState } from "react";
import { balance as principalBalance } from "../utils/ledger";

const balance = () => {
    const isAuthenticated = window.auth.isAuthenticated;

    const symbol = "ICP";

    const [balance, setBalance] = useState("0");

    const getBalance = useCallback(async () => {
        if (isAuthenticated) {
            setBalance(await principalBalance());
        }
    });

    useEffect(() => {
        getBalance();
    }, [getBalance]);

    if (isAuthenticated) {
        return (
            <>
                <div>
                    {balance} <span> {symbol}</span>
                </div>
            </>
        );
    }

    return null;
}

export default balance;