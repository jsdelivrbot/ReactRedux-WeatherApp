import React, { Component } from 'react'
import { connect } from 'react-redux'
import Graph from '../components/graph'

class WeatherList extends Component {
  renderWeather (cityData, i) {
    const name = cityData.city.name
    const temps = cityData.list.map((object) => Math.round((object.main.temp - 273.15) * 100) / 100)
    const pressure = cityData.list.map((object) => object.main.pressure)
    const humidity = cityData.list.map((object) => object.main.humidity)

    return (
      <tr key={i}>
        <td>{name}</td>
        <td><Graph data={temps} color='red' /></td>
        <td><Graph data={pressure} color='green' /></td>
        <td><Graph data={humidity} color='blue' /></td>
      </tr>
    )
  }

  render () {
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th width={350}>Temperature</th>
            <th width={350}>Pressure</th>
            <th width={350}>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps ({weather}) {
  return { weather }
}

export default connect(mapStateToProps)(WeatherList)
