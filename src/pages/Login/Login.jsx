import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import "./Login.scss";
import {loginUser} from "../../store/reducers/UserSlice";
import {getUserProfile} from "../../store/reducers/UserSlice";
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {loading, error} = useSelector(state => state.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLoginEvent= (e) => {
        e.preventDefault();
        let userCredentials= {
            email, password
        }
        dispatch(loginUser(userCredentials)).then((result)=>{
            if(result.payload){
                setEmail('');
                setPassword('');
                //navigate('/myaccount');
                dispatch(getUserProfile(result.payload.body.token)).then((result) => {
                    if(result.payload){
                        navigate('/myaccount');
                    }
                })
            }
        })
    }
    return (
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
    )
}