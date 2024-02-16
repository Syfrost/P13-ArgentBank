import { FormEvent, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCircle} from '@fortawesome/free-solid-svg-icons'
import {updateToken, updateUser} from "../../store/reducers/UserSlice.js";
import {addAccount} from "../../store/reducers/AccountSlice.js";
import './LoginForm.scss';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const { loading, error, token } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if(token !== null) {
            navigate('/account');
        }
    }, [token, navigate]);

    const handleLoginEvent = async (e) => {
        e.preventDefault();
        const userCredentials = {
            email: email,
            password: password
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
    };

    return (
        <section className="sign-in-content">
            <FontAwesomeIcon className={"sign-in-icon"} icon={faUserCircle} />
            <h1>Sign In</h1>
            <form onSubmit={handleLoginEvent}>
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="input-remember">
                    <input
                        type="checkbox"
                        id="remember-me"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <button type="submit" className="sign-in-button">Sign In</button>
            </form>
        </section>
    );
}

export default LoginForm;