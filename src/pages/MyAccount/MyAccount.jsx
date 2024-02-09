import React from "react";
import "./MyAccount.scss";
import {useSelector} from "react-redux";

export default function Home() {
    const user = useSelector(state => state.user?.user?.body);

    return (
        <>
            {user?(
                <div className={'home'}>
                    <h1>Bonjour {user.firstName} {user.lastName}</h1>
                    <h2>Vous êtes connecté en tant que {user.email}</h2>
                </div>
            ):(
                <div className={'home'}>
                    <h1>Bonjour</h1>
                    <h2>Vous n'êtes pas connecté</h2>
                </div>
            )}
        </>
    )
}