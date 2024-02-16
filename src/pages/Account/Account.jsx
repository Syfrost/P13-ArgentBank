import React, { useEffect } from "react";
import "./Account.scss";
import {useSelector, useDispatch} from "react-redux";
import EditProfile from "../../components/EditProfile/EditProfile.jsx";
import ItemBankAccount from "../../components/ItemBankAccount/ItemBankAccount.jsx";

export default function Account() {
    const {token, firstName, lastName, email} = useSelector(state => state.user);
    const accounts = useSelector(state => state.userBankAccount);

    return (
        <>
            {token ? (
                <div className={'home'}>
                    <h1>Welcome back<br/>{firstName} {lastName}!</h1>
                    <h2>Vous êtes connecté en tant que {email}</h2>
                    <EditProfile/>
                    {accounts.map((account, index) => (
                        <ItemBankAccount key={index} account={account} />
                    ))}
                </div>
            ) : (
                <div className={'home'}>
                    <h1>Bonjour</h1>
                    <h2>Vous n'êtes pas connecté</h2>
                </div>
            )}
        </>
    )
}