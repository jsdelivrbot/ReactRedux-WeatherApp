import React, { Component } from 'react'
import { connect } from 'react-redux'
import Graph from '../components/graph'
import GoogleMap from '../components/google_map'

class WeatherList extends Component {
  renderWeather (cityData) {
    const name = cityData.city.name
    const temps = cityData.list.map((object) => Math.round((object.main.temp - 273.15) * 100) / 100)
    const pressure = cityData.list.map((object) => object.main.pressure)
    const humidity = cityData.list.map((object) => object.main.humidity)
    const { lon, lat } = cityData.city.coord
    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Graph data={temps} color='red' unit='℃' /></td>
        <td><Graph data={pressure} color='green' unit='hPa' /></td>
        <td><Graph data={humidity} color='blue' unit='%' /></td>
      </tr>
    )
  }

  render () {
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (℃)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
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
