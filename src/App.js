import './App.css';
import React from "react";
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import WithdrawalPage from './Components/Withdrawal-form/Withdrawal-form.component';
import DashboardPage from './Components/Navbar/Navbar.component';
import DepositPage from './Components/Deposit/Deposit.component';
import HomePage from './Components/Home/Home.component';

function App() {
  let user = {
    username: "Pranjali sharma",
    password: "admin123",
    accountNumber: 123456789012345678,
  }
  let balance = 0

  sessionStorage.setItem('myData',JSON.stringify(user));
  sessionStorage.setItem('balance',balance)

  return (
    <div className="App">
      <BrowserRouter>
      <DashboardPage/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/deposit' component={DepositPage}/>
          <Route exact path='/withdraw' component={WithdrawalPage}/>
        </Switch>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
