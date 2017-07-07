import axios from 'axios'

const API_KEY = 'c963ec1daa3fcb552910a41644f54a32'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather (city) {
  const url = `${ROOT_URL}&q=${city}, DE`
  const request = axios.get(url)

  console.log('#actions/index > Request:', request)

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
