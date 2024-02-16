import React, {useEffect} from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import LoginForm from "../../components/LoginForm/LoginForm.jsx";

export default function Login() {
    const { token } = useSelector(state => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        if(token !== null) {
            navigate('/account');
        }
    }, [token, navigate]);

    return (
        <>
            <div className={'login'}>
                <LoginForm/>
            </div>
        </>
    )
}