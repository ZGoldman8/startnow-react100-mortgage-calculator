import React from 'react';

export default class App extends React.Component {
  // your Javascript goes here
  constructor(prop) {
    super(prop)
    this.state = {
      balance: "",
      rate: "",
      term: "",
      monthly: ""
    }
    this.balanceChange = this.balanceChange.bind(this)
    this.rateChange = this.rateChange.bind(this)
    this.termChange = this.termChange.bind(this)
    this.calculate = this.calculate.bind(this)
  }

  balanceChange (event) {
    this.setState({balance: event.target.value}, function () {console.log(this.state)})
  }

  rateChange (event) {
    this.setState({rate: event.target.value}, function () {console.log(this.state)})
  }

  termChange (event) {
    this.setState({term: event.target.value}, function () {console.log(this.state)})
  }

  calculate() {
    var n = this.state.term * 12;
    var r= this.state.rate / 100 / 12;
    var numerator = (r * Math.pow((1 + r), n));
    var denominator = Math.pow((1+r), n) - 1;
    var monthly = ((numerator / denominator) * this.state.balance).toFixed(2);
    this.setState({monthly: "$" + monthly + " is your payment."})
  }

  render() {
    return (
      <div className='container' className="form-horizontal">
        <h3>Mortgage Calculator</h3>
        <hr />
        <p />Loan Balance <input name='balance' type='number' onChange={this.balanceChange} value={this.state.balance} />
        <p />Interest Rate % <input name='rate' type='number' step='0.01' onChange={this.rateChange} value={this.state.rate} />
        <p />Loan Term <select name='term' onChange={this.termChange} value={this.state.term}>
          <option />
          <option value='15'>15</option>
          <option value='30'>30</option>
        </select>
        <p /><button name='submit' onClick={this.calculate} className="btn btn-primary">Calculate</button><br />
        <div name='output' className="form-group-lg" id="output">
          <h4><p className="container">{this.state.monthly}</p></h4>
        </div>
      </div>
    );
  }
}
