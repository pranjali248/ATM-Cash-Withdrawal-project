import React from 'react';
import './Home.styles.css';

function HomePage () {

    let data = sessionStorage.getItem('myData');
    data = JSON.parse(data);
    let balance = sessionStorage.getItem('balance');
        return (
            <div className='home-card'>
                <div className="card">
                    <div className="card-inner">
                        <div className="card-header">
                        Account Details
                        </div>
                        <div className="card-body">
                            <div className="card-text">
                            <ul className="list-group list-group-horizontal">
                                <li className="list-group-item">Account Number:</li>
                                <li className="list-group-item">{data.accountNumber}</li>
                            </ul>
                            <ul className="list-group list-group-horizontal">
                                <li className="list-group-item">Username:</li>
                                <li className="list-group-item">{data.username}</li>
                            </ul>
                            <ul className="list-group list-group-horizontal">
                                <li className="list-group-item">Account Balance</li>
                                <li className="list-group-item">{balance}</li>
                            </ul>
                            </div>
                            <a href="/deposit" className="btn">Deposit Cash</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    
}

export default HomePage;
