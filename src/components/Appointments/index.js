import {Component} from 'react'

import {v4 as jak} from 'uuid'

import './index.css'

import AppointmentItem from '../AppointmentItem'

const lst = []

class Appointments extends Component {
  state = {
    initialList: lst,
    name: '',
    date: '',
    empty: false,
  }

  changeFavImg = favId => {
    this.setState(prevState => ({
      initialList: prevState.initialList.map(i => {
        if (i.id === favId) {
          return {...i, isFav: !i.isFav}
        }
        return i
      }),
    }))
  }

  addAppointment = event => {
    event.preventDefault()
    const {name, date} = this.state
    const newAppointment = {
      id: jak(),
      name,
      date,
      isFav: false,
    }
    this.setState(prevState => ({
      initialList: [...prevState.initialList, newAppointment],
    }))
  }

  trackName = event => {
    const nameChange = event.target.value
    this.setState({name: nameChange})
  }

  trackDate = event => {
    const dateChange = event.target.value
    this.setState({date: dateChange})
  }

  filterStar = () => {
    const {empty} = this.state
    this.setState({empty: !empty})
  }

  filterData = () => {
    const {empty, initialList} = this.state
    if (empty) {
      return initialList.filter(i => i.isFav === true)
    }
    return initialList
  }

  render() {
    const {empty} = this.state
    const isEmpty = empty ? 'addStyle' : ''
    const lstFinal = this.filterData()
    return (
      <div className="mainContainer">
        <div className="card">
          <h1 className="heading">Add Appointment</h1>
          <div className="imgDetailsDev">
            <form>
              <label className="para" htmlFor="inputId">
                Title
              </label>
              <br />
              <input
                onChange={this.trackName}
                className="input"
                id="inputId"
                type="text"
              />
              <br />
              <label className="para" htmlFor="inputdataId">
                date
              </label>
              <br />
              <input
                onChange={this.trackDate}
                className="input"
                id="inputdataId"
                type="date"
              />
              <br />
              <button
                className="btn"
                onClick={this.addAppointment}
                type="submit"
              >
                Add
              </button>
            </form>
            <div className="imgContainer">
              <img
                className="img"
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
              />
            </div>
          </div>
          <hr className="separator" />
          <div className="unorderList">
            <h1 className="appointHead">Appointments</h1>

            <button
              className={`btn1 ${isEmpty}`}
              onClick={this.filterStar}
              type="button"
            >
              Starred
            </button>
          </div>
          <ul className="appointmentList unorderList">
            {lstFinal.map(i => (
              <AppointmentItem
                changeFavImg={this.changeFavImg}
                key={i.id}
                details={i}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
