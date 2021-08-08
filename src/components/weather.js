import React from "react"

const Weather = (props) => {
  return (
    <div className="bottom-form">
      {props.city && (
        <div className="infoWeath">
          <p>
            Location: {props.city}, {props.country}
          </p>
          <p>Temperature: {props.temp} °C</p>
          <p>
            Sunrise: {props.sunrise} (GMT{" "}
            {(props.timezone <= 0 ? "" : "+") + props.timezone})
          </p>
          <p>
            Sunset: {props.sunset} (GMT{" "}
            {(props.timezone <= 0 ? "" : "+") + props.timezone})
          </p>
          <p>Pressure: {props.pressure} hPa</p>
        </div>
      )}
      <p className="error">{props.error}</p>
    </div>
  )
}

export default Weather
