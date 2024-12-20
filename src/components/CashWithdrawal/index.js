// Write your code here
import {Component} from 'react'

import './index.css'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {money: 2000}

  cutMoney = value => {
    const {money} = this.state
    this.setState({money: money - value})
  }
  render() {
    const {denominationsList} = this.props
    const {money} = this.state

    return (
      <div className="container">
        <div className="card">
          <div className="profile-card">
            <p className="profile-icon">S</p>
            <h1 className="profile-name">Sarah Williams</h1>
          </div>
          <div className="balance-card">
            <div>
              <p className="your-balance">Your Balance</p>
            </div>
            <div>
              <p className="balance">{money}</p>
              <p className="your-balance-count">In Rupees</p>
            </div>
          </div>
          <div className="Withdraw-amount-card">
            <p className="withdraw">Withdraw</p>
            <p className="choose-amount">CHOOSE SUM (IN RUPEES) </p>
            <div className="list-container">
              <ul className="list-card">
                {denominationsList.map(eachItem => (
                  <DenominationItem
                    eachItem={eachItem}
                    cutMoney={this.cutMoney}
                    key={eachItem.id}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
