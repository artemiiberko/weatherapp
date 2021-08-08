import React from "react"
import Info from "./components/info"
import Form from "./components/form"
import Weather from "./components/weather"
import "./App.css"
import { sunsetDate } from "./components/sunset_date"
import { sunriseDate } from "./components/sunrise_date"
import { timezoneHours } from "./components/timezone"

const API_Key = "868d1a1070c8c536a9a827b731af4a66"

class App extends React.Component {
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    timezone: undefined,
    sunrise: undefined,
    sunset: undefined,
    pressure: undefined,
    error: undefined,
  }

  gettingWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value

    if (city) {
      const api_url = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`
      )
      const data = await api_url.json()

      try {
        var timezone_date = timezoneHours(data.timezone)
        var sunrise_date = sunriseDate(data.sys.sunrise, data.timezone)
        var sunset_date = sunsetDate(data.sys.sunset, data.timezone)

        this.setState({
          temp: Math.round(data.main.temp),
          city: data.name,
          country: data.sys.country,
          timezone: timezone_date,
          sunrise: sunrise_date,
          sunset: sunset_date,
          pressure: data.main.pressure,
          error: undefined,
        })
      } catch {
        this.setState({
          temp: undefined,
          city: undefined,
          country: undefined,
          timezone: undefined,
          sunrise: undefined,
          sunset: undefined,
          pressure: undefined,
          error: "Please, enter correct city name",
        })
      }
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        timezone: undefined,
        sunrise: undefined,
        sunset: undefined,
        pressure: undefined,
        error: "Please, enter the city name",
      })
    }
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="info">
              <Info />
            </div>
            <div className="form">
              <Form gettingWeather={this.gettingWeather} />
              <Weather
                temp={this.state.temp}
                city={this.state.city}
                country={this.state.country}
                timezone={this.state.timezone}
                sunrise={this.state.sunrise}
                sunset={this.state.sunset}
                pressure={this.state.pressure}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
        <div className="circle1"></div>
        <div className="circle2"></div>
      </div>
    )
  }
}

export default App
