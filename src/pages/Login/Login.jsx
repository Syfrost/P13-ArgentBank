import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import "./Login.scss";
import {updateToken, updateUser} from "../../store/reducers/UserSlice.js";
import {addAccount} from "../../store/reducers/AccountSlice.js";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {loading, error, token} = useSelector(state => state.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if(token !== null) {
            navigate('/account');
        }
    }, [token, navigate]);

    const handleLoginEvent= async (e) => {
        e.preventDefault();
        const userCredentials= {
            email, password
        }

        const response = await fetch('http://localhost:3001/api/v1/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userCredentials)
        });
        const data = await response.json();

        if(response.ok) {
            dispatch(updateToken(data.body.token))
            console.log('token', data.body.token)

            const userResponse = await fetch('http://localhost:3001/api/v1/user/profile', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${data.body.token}`
                },
            })
            const userData = await userResponse.json();
            console.log('yolo', userData)
            dispatch(updateUser(userData.body))
            dispatch(addAccount({ //DEBUG VALEUR EXEMPLE
                name: 'Argent Bank Checking',
                total: '$2,082.79',
                type: 'Available Balance',
                transactions: 5
            }));
            dispatch(addAccount({ //DEBUG VALEUR EXEMPLE
                name: 'Argent Bank Savings',
                total: '$10,928.42',
                type: 'Available Balance',
                transactions: 10
            }));
            dispatch(addAccount({ //DEBUG VALEUR EXEMPLE
                name: 'Argent Credit Card',
                total: '$184.30',
                type: 'Current Balance',
                transactions: 3
            }));
        }

    }

    return (
        <>
            <div className={'login'}>
                <form className={'form-group'} onSubmit={handleLoginEvent}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Votre email" onChange={(e)=>setEmail(e.target.value)} required/>
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" id="password" name="password" placeholder="Votre mot de passe" onChange={(e)=>setPassword(e.target.value)} required/>
                    <button type="submit">{loading?'Loading...':'Login'}</button>
                    {error&&(
                        <div className={'alert alert-danger'} role='alert'>{error}</div>
                    )}
                </form>
            </div>
        </>
    )
}