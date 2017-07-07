import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'

class WeatherList extends Component {
  renderWeather (cityData) {
    const tempInKelvin = cityData.list.map((object) => {
      return object.main.temp
    })

    const tempInCelsius = tempInKelvin.map((temp) => {
      return Math.round((temp - 273.15) * 100) / 100
    })

    console.log('kelvin', tempInKelvin)
    console.log('celsius', tempInCelsius)

    return (
      <tr>
        <td>{cityData.city.name}</td>
      </tr>
    )
  }

// cityData.list.main.temp
// <td>{cityData.list[0].main.pressure}</td>
// <td>{cityData.list[0].main.humidity}</td>

  render () {
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
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
