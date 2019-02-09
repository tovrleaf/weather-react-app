import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <input type="text" name="city" placeholder="City" />
        <button>Get Weather</button>
      </form>
    );
  }
}

export default Form;
