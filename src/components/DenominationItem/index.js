// Write your code here
import './index.css'

const DenominationItem = props => {
  const {eachItem, cutMoney, key} = props
  const {id, value} = eachItem

  const cut = () => {
    cutMoney(value)
  }

  return (
    <li className="list-item-container">
      <button className="list-item" onClick={cut}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
