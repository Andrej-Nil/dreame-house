import React, { Component } from 'react';
import './app.scss';
import Header from '../header-components/header';
import AboutUs from '../about-us';

export default class App extends Component {

  render() {

    return (
      <div className="app">

        <Header />
        <AboutUs />
      </div>
    )

  }
}