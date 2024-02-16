import React from 'react';
import { Link } from 'react-router-dom';
import './ItemBankAccount.scss';

function ItemBankAccount({ account }) {
    return (
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{account.name} (x{account.transactions})</h3>
                <p className="account-amount">{account.total}</p>
                <p className="account-amount-description">{account.type}</p>
            </div>
            <div className="account-content-wrapper cta">
                <Link to="./#">
                    <button className="transaction-button">View transactions</button>
                </Link>
            </div>
        </section>
    );
}

export default ItemBankAccount;