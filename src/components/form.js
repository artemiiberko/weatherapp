import React from "react"

const Form = (props) => {
  return (
    <form className="top-form" onSubmit={props.gettingWeather}>
      <input type="text" name="city" placeholder="City" />
      <button>Search</button>
    </form>
  )
}

export default Form
