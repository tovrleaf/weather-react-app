import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props)
    this.handleCityChange = this.handleCityChange.bind(this);
    this.fetchWeather = this.fetchWeather.bind(this);
    this.state = {city: ''}
  }
  
  handleCityChange(event) {
    console.log('Setting town to ' + event.target.value)
    this.setState({city: event.target.value})
  }

  fetchWeather(event) {
    event.preventDefault();
    console.log('Fetching weather for town ' + this.state.city)
  }
  
  render() {
    return (
      <form onSubmit={this.fetchWeather}>
        <input type="text" name="city" value={this.props.city} onChange={this.handleCityChange} placeholder="City" />
        <button>Get Weather</button>
      </form>
    );
  }
}

export default Form;
