import './index.css'

const AppointmentItem = props => {
  // eslint-disable-next-line no-unused-vars
  const {details, changeFavImg} = props
  const {id, name, date, isFav} = details
  const weekDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const changeFav = () => {
    changeFavImg(id)
  }

  const activeImg = isFav
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const d = new Date(date)
  const day = weekDays[d.getDay()]
  const monthName = months[d.getMonth()]
  const year = d.getFullYear()
  const dayInNum = d.getDate()
  return (
    <li className="list">
      <div>
        <p className="nameHead">{name}</p>
        <p className="dateHead">
          Date: {dayInNum} {monthName} {year}, {day}
        </p>
      </div>
      <div>
        <button
          data-testid="star"
          onClick={changeFav}
          className="btn3"
          type="button"
        >
          <img src={activeImg} alt="star" />
        </button>
      </div>
    </li>
  )
}

export default AppointmentItem
