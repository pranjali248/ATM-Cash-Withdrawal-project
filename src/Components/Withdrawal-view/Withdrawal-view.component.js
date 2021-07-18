import React from "react";
import "./Withdrawal-view.styles.css";

export class ViewPage extends React.Component {

  render() {
    const { amount, res } = this.props;
    return (
      <div className="table-view">
        <div className="table-inner table-responsive">
          <table className="table table-hover caption-top ">
            <caption>
              <h2>Cash Withdrawal Receipt</h2>
            </caption>
            <thead>
              <tr>
                <th scope="col">Denomination</th>
                <th scope="col">No. of Notes</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(res).map((key) => (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{res[key]}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td>Amount</td>
                <td>{amount}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

export default ViewPage;
