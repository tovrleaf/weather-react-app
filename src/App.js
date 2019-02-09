import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './Header';
import Form from './Form'

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="main">
        <div className="container">
          <div className="row">
            <div className="col-xs-5 title-container">
              <Header title="Weather" />
            </div>
            <div className="col-xs-7 form-container">
              <Form />
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
