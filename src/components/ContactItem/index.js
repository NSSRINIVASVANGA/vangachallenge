import './index.css'

const ContactItem = props => {
  const {dayDetails} = props
  const {date, time, dayNo} = dayDetails

  return (
    <li className="table-row">
      <div className="table-cell">
        <h1>Day-{dayNo}</h1>
        <p className="date">{date}</p>
      </div>
      <div className="table-cell mobile-no-column">
        <p className="mobile-no-value date">{time}</p>
      </div>
    </li>
  )
}

export default ContactItem
