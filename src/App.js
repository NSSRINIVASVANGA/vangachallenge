import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import ContactItem from './components/ContactItem'

import './App.css'

/* 
const initialContactsList = [
  {
    id: uuidv4(),
    name: 'Ram',
    mobileNo: 9999988888,
    isFavorite: false,
  },
  {
    id: uuidv4(),
    name: 'Pavan',
    mobileNo: 8888866666,
    isFavorite: true,
  },
  {
    id: uuidv4(),
    name: 'Nikhil',
    mobileNo: 9999955555,
    isFavorite: false,
  },
]

localStorage.setItem('list', JSON.stringify(initialContactsList))
*/

class App extends Component {
  state = {
    // contactsList: JSON.parse(localStorage.getItem('list')),
    daysList: JSON.parse(localStorage.getItem('srinivasList')),
    date: '',
    time: '',
    dayNo: '',
    toClick: false,
    todayDay: new Date().getDate(),
  }

  onAddDay = event => {
    event.preventDefault()
    const {todayDay, daysList} = this.state
    const newDay = {
      id: uuidv4(),
      date: new Date().toDateString(),
      time: new Date().toLocaleTimeString(),
      dayNo: daysList.length + 1,
    }
    if (todayDay === new Date().getDate())
      this.setState(prevState => ({
        daysList: [...prevState.daysList, newDay],
        toClick: true,
        todayDay: new Date().getDate() + 1,
      }))
  }

  click = () => {
    const {todayDay} = this.state
    if (todayDay === new Date().getDate()) {
      this.setState({toClick: false, todayDay: new Date().getDate()})
    }
  }

  save = () => {
    const {daysList} = this.state
    localStorage.setItem('srinivasList', JSON.stringify(daysList))
  }

  render() {
    const {daysList, toClick} = this.state

    return (
      <div className="app-container">
        <div className="responsive-container">
          <h1 className="heading">
            Good Morning <span>Srinivas</span>, Welcome Back To <br />
            21-Days Streak
          </h1>
          <div className="img-con">
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="Shedule"
              className="image"
            />
          </div>
          {toClick ? (
            <button
              type="button"
              className="trueBtn button"
              onClick={this.click}
            >
              Add Day
            </button>
          ) : (
            <button type="button" className="button" onClick={this.onAddDay}>
              Add Day
            </button>
          )}
          <hr className="separator" />
          <div className="extra">
            <div className="streaks">
              <p className="streak-text">
                {daysList.length}
                <img
                  src="https://res.cloudinary.com/dpfnim7rk/image/upload/v1715962245/fire-emoji-1606x2048-z6ituxc1_nugyt6.png"
                  alt="streak"
                  className="streak"
                />
                Streaks
              </p>
            </div>
            <div className="text-con">
              {daysList.length >= 15 ? (
                <p>
                  <span>Srinivas</span>, Your are near to Your Goal, Still{' '}
                  {21 - daysList.length} days left
                </p>
              ) : (
                <p>
                  <span>Srinivas</span>, You can, Achieve this Goal, Come on
                  Buddy...{' '}
                </p>
              )}
            </div>
            <div className="streaks">
              <button className="count" type="button">
                {21 - daysList.length}
              </button>
              <p className="text"> Days Left </p>
            </div>
          </div>
          <ul className="contacts-table">
            {daysList.map(eachDay => (
              <ContactItem
                key={eachDay.id}
                dayDetails={eachDay}
                change={this.change}
              />
            ))}
          </ul>
          <button className="button" type="button" onClick={this.save}>
            Save
          </button>
        </div>
      </div>
    )
  }
}

export default App
