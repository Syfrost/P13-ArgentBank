import {NavLink} from "react-router-dom";
import './Header.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignOut, faUserCircle} from '@fortawesome/free-solid-svg-icons'
import {useDispatch, useSelector} from "react-redux";
import {updateToken, updateUser} from "../../store/reducers/UserSlice.js";
import {resetAccounts} from "../../store/reducers/AccountSlice.js";

export default function Header() {
    const {token, firstName, lastName} = useSelector(state => state.user);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(updateToken(null));
        dispatch(updateUser({
            id: '',
            email: '',
            firstName: '',
            lastName: ''
        }));
        dispatch(resetAccounts());
    }

    return (
        <>
            <header>
                <div className="header_container">
                    <NavLink to='/'>
                        <div className="header_logo">
                            <img src="/img/argentBankLogo.png" alt="Argent Bank Logo"/>
                        </div>
                    </NavLink>
                    <nav className="header_nav">
                        <ul className={"header_button"}>
                            {token === null ? (
                                <li className={"main-nav-item"}><NavLink to='/login'><FontAwesomeIcon className={"user-icon"} icon={faUserCircle} />Sign In</NavLink></li>
                            ) : (
                                <>
                                    <li className={"main-nav-item"}><NavLink to='/account'><FontAwesomeIcon className={"user-icon"} icon={faUserCircle} />{firstName}</NavLink></li>
                                    <li className={"main-nav-item"}><NavLink to='/' onClick={handleLogout}><FontAwesomeIcon className={"user-icon"} icon={faSignOut} />Sign out</NavLink></li>
                                </>
                            )}
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}