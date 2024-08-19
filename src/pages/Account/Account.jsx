import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import EditProfile from "../../components/EditProfile/EditProfile.jsx";
import ItemBankAccount from "../../components/ItemBankAccount/ItemBankAccount.jsx";
import "./Account.scss";

export default function Account() {
    const { token, firstName, lastName } = useSelector(state => state.user);
    const accounts = useSelector(state => state.userBankAccount);
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate('/');
        }
    }, [token, navigate]);

    return (
        <>
            {token ? (
                <div className={'home'}>
                    <h1>Welcome back<br/>{firstName} {lastName}!</h1>
                    <EditProfile />
                    {accounts.map((account, index) => (
                        <ItemBankAccount key={index} account={account} />
                    ))}
                </div>
            ) : null}
        </>
    );
}