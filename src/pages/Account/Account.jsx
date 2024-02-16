import React from "react";
import "./Account.scss";
import {useSelector} from "react-redux";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import EditProfile from "../../components/EditProfile/EditProfile.jsx";

export default function Account() {
    const {token, firstName, lastName, email} = useSelector(state => state.user);

    return (
        <>
            {token ? (
                <div className={'home'}>
                    <h1>Welcome back<br/>{firstName} {lastName}!</h1>
                    <h2>Vous êtes connecté en tant que {email}</h2>
                    <EditProfile/>
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