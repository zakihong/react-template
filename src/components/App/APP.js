import React, { Component } from 'react';

import getRouter from 'router/router';
import Header from 'components/Header/Header';
export default class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Header />
        {getRouter()}
      </div>
    );
  }
}
