import React from 'react';
import './Withdrawal-form.styles.css';
import ReceiptPage from '../Withdrawal-view/Withdrawal-view.component';

class WithdrawalPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            balance : 0,
            amount: 0,
            denomination: 2000,
            error: "",
            show: true,
            res: null
        }
    };

    componentDidMount(){
        let balance = sessionStorage.getItem('balance');
        this.setState({
            balance : balance
        })
    }

    closeModalHandler = () => {
        this.setState({ show:false })
    }

    handleChange = (event) => {
        this.setState({ amount: event.target.value })
    }

    handleSelectChange = (event) => {
        this.setState({ denomination: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (parseInt(this.state.balance) < parseInt(this.state.amount)) {
            this.setState({ error: "Insufficient Balance !!!!" })
        } else {           
            this.setState({ balance: parseInt(this.state.balance) - parseInt(this.state.amount)},() => {
                let res = this.conditionalWithdrawal(parseInt(this.state.amount),parseInt(this.state.denomination))
                this.setState({ show: false, res: res})
                sessionStorage.setItem('balance', this.state.balance)
            })
        } 
    }

    conditionalWithdrawal = (value,deno) => {
        let coins = [2000, 500, 200, 100, 50, 20, 10]
        let n = coins.length
        let result = {}
        let ind = coins.indexOf(deno)
        let i = ind
        while (i <= n-1 ){
            while(value >= coins[i]){
                value -= coins[i]
                typeof result[coins[i]] === 'undefined' ? result[coins[i]] = 1 : result[coins[i]]++;
            }
            i += 1
        }
        return result
    }

    render() {
        return (
            <div className="withdrawal-form shadow p-3 mb-5 rounded row">
                { this.state.show ?  
                <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-inner">
                        <h2>Cash Withdrawal</h2>
                    <div className="form-group row">
                        <label htmlFor="inputEmail3" className="col-sm-12 col-form-label" >Balance:</label>                       
                        <div className="col-sm-12">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Balance" 
                                readOnly 
                                value={this.state.balance}/>                           
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword3" className="col-sm-12 col-form-label">Amount to be Withdrawn:</label>
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
                        <label className="col-sm-12 col-form-label" htmlFor="inlineFormCustomSelect">Denomination:</label>
                        <div className="col-sm-12">
                            <select className="mr-sm-8" id="inlineFormCustomSelect" onChange={this.handleSelectChange}>
                                <option value="">Choose...</option>
                                <option value="2000">2000</option>
                                <option value="500">500</option>
                                <option value="200">200</option>
                                <option value="100">100</option>
                                <option value="50">50</option>
                                <option value="20">20</option>
                                <option value="10">10</option>
                            </select>
                        </div>
                    </div>                                   
                    <div className="form-group row">
                        <input type="submit" value="Submit"/>
                    </div>
                    <div className="error">
                        {this.state.error}
                    </div>
                    </div>    
                </form>  
                </div>
                : <ReceiptPage {...this.state}/>}              
            </div>    
        )
    }
}

export default WithdrawalPage;