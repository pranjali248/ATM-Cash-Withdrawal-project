import React, { useState } from 'react';
import './Navbar.styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

function DashboardPage () {
    const [show,setShow] = useState(false)
    return (       
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <a className="navbar-brand" href="/">ABC Bank</a>
            <button className="navbar-toggler" onClick={()=>setShow(!show)} type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className={`collapse navbar-collapse ${show?"show":""}`} id="navbarToggler">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/deposit'>Deposit</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/withdraw'>Withdraw</Link>
                    </li>
                </ul>              
            </div>
            </nav>
        </div>
        
    )
}

export default DashboardPage;
