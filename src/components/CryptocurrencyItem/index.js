// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {item} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = item
  console.log(euroValue)

  return (
    <li className="list-item-container">
      <div className="l-cont">
        <img src={currencyLogo} alt={currencyName} className="img-1-li" />
        <p className="name">{currencyName}</p>
      </div>
      <p className="par-1">{usdValue}</p>
      <p className="name">{euroValue}</p>
    </li>
  )
}

export default CryptocurrencyItem
