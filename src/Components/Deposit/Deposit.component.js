import React from 'react';
import './Deposit.styles.css';

class DepositPage extends React.Component {

    constructor(){
        super();
        this.state = {
            balance: 0,
            amount: 0,
            message: ""
        }
    }

    componentDidMount(){
        let balance = sessionStorage.getItem('balance');
        this.setState({
            balance : balance
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState ({ balance: parseInt(this.state.amount) + parseInt(this.state.balance)},()=>{
            const balance = this.state.balance
            sessionStorage.setItem('balance', balance)
            this.setState({ message: "Cash deposited successfully !!!!!!"})
        })
       
    }

    handleChange = (event) => {
        this.setState({ 
            amount: event.target.value
        })
    }

    render() {
        return (
            <div className="deposit-form shadow p-3 mb-5 rounded">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-inner">
                        <h2>Cash Deposit</h2>
                    <div className="form-group row">
                        <label htmlFor="inputEmail3" className="col-sm-12 col-form-label" >Balance:</label>                       
                        <div className="col-sm-12">
                            <input type="text" className="form-control" placeholder="Balance" readOnly value={this.state.balance}/>                           
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword3" className="col-sm-12 col-form-label">Amount to be Deposited:</label>
                        <div className="col-sm-12">
                            <input 
                                type="number" 
                                className="form-control" 
                                id="inputPassword3" 
                                placeholder="Amount" 
                                step="10"  
                                required
                                onChange={this.handleChange}/>
                        </div>
                    </div>                                                       
                    <div className="form-group row">
                        <input type="submit" value="Submit"/>
                    </div>
                    <div className="message">
                        {this.state.message}
                    </div>
                    </div>    
                </form>                                    
            </div>
        )
    }
}

export default DepositPage;