import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <label>
          Town
          <input type="text" name="town" />
        </label>
        <button>Get Weather</button>
      </form>
    );
  }
}

export default Form;
