import React, { Component } from 'react';

class Weather extends Component {
  render() {
    return (
      <div className="weather-info">
        <p className="weather__key">City:
          <span className="weather__value">{this.props.name}</span></p>
        <p className="weather__key">Temperate:
          <span className="weather__value">{this.props.temperature}</span></p>
        <p className="weather__key">Condition:
          <span className="weather__value"> {this.props.condition}</span></p>
        {this.props.error && <p className="alert alert-danger">{this.props.error}</p>}
      </div>
    );
  }
}

export default Weather;
