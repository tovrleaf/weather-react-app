import React, { Component } from 'react';
import Weather from './Weather';

class Form extends Component {
  constructor(props) {
    super(props)
    this.handleCityChange = this.handleCityChange.bind(this);
    this.fetchWeather = this.fetchWeather.bind(this);
    this.state = {
      city: '',
      name: '',
      temperature: '',
      error: ''
    }
  }
  
  handleCityChange(event) {
    console.log('Setting town to ' + event.target.value)
    this.setState({city: event.target.value})
  }

  fetchWeather(event) {
    event.preventDefault();
    console.log('Fetching weather for town ' + this.state.city)

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&APPID=1c3d54150471778fc70e82e2eb5a64f4&units=metric`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          name: data.name,
          temperature: data.main.temp,
          condition: data.weather[0].main,
          error: ''
        });
      })
      .catch(error => this.setState({error: 'Error while loading weather'}));
  }
  
  render() {
    return (
      <form onSubmit={this.fetchWeather}>
        <input type="text" name="city" value={this.props.city} onChange={this.handleCityChange} placeholder="City" />
        <button>Get Weather</button>
        <Weather name={this.state.name} temperature={this.state.temperature}
          condition={this.state.condition} error={this.state.error} />
      </form>
    );
  }
}

export default Form;
