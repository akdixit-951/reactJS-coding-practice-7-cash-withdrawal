import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {
    accountBalance: 2000,
  }

  updateBalance = value => {
    const {accountBalance} = this.state

    const condition1 = accountBalance >= 500
    const condition2 =
      value < 500 && accountBalance >= 200 && accountBalance < 500
    const condition3 =
      value < 200 && accountBalance >= 100 && accountBalance < 200
    const condition4 =
      value < 100 && accountBalance >= 50 && accountBalance < 100

    if (condition1 || condition2 || condition3 || condition4) {
      this.setState(prevBalance => ({
        accountBalance: prevBalance.accountBalance - value,
      }))
    }
  }

  render() {
    const {accountBalance} = this.state
    const {denominationsList} = this.props
    const name = 'Akash Dixit'
    const nameInitial = name.slice(0, 1)

    return (
      <div className="app-container">
        <div className="cash-withdrawal-container">
          <div className="user-details-container">
            <div className="initial-container">
              <p className="initial">{nameInitial}</p>
            </div>
            <p className="name">{name}</p>
          </div>
          <div className="balance-container">
            <p className="your-balance">Your Balance</p>
            <p className="balance">
              {accountBalance}
              <br />
              <span className="currency">In Rupees</span>
            </p>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denominations-list">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                key={eachDenomination.id}
                denominationsDetails={eachDenomination}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
