// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {isLoading: true, currencyList: []}

  componentDidMount() {
    this.getCurrencyData()
  }

  getCurrencyData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    const updatedData = data.map(e => ({
      currencyLogo: e.currency_logo,
      currencyName: e.currency_name,
      euroValue: e.euro_value,
      usdValue: e.usd_value,
      id: e.id,
    }))
    this.setState({currencyList: updatedData})

    this.setState({isLoading: false})

    console.log(updatedData)
  }

  render() {
    const {isLoading, currencyList} = this.state
    return (
      <div className="bg-container">
        {isLoading ? (
          <div className="loader-cont">
            <Loader type="Rings" color="pink" height={80} width={80} />
          </div>
        ) : (
          <div className="card-1">
            <h1 className="head-1">Cryptocurrency Tracker</h1>
            <div className="img-cont">
              <img
                src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
                alt="cryptocurrency"
                className="img-1"
              />
            </div>
            <div className="main-list-container">
              <div className="bg-1">
                <p className="para-1">Coin Type</p>
                <div className="inner-bg-1">
                  <p className="para-2">USD</p>
                  <p className="para-1">EURO</p>
                </div>
              </div>
              <ul>
                {currencyList.map(e => (
                  <CryptocurrencyItem key={e.id} item={e} />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
