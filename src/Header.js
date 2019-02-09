import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <div>
        <h1 className="title-container__title">{this.props.title}</h1>
        <p className="title-container__subtitle">Enter city name...</p>
      </div>
    );
  }
}

export default Header;
