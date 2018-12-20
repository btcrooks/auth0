import React, { Component } from 'react';
const celebrationsLogo = require('../img/celebrations.jpg');

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        {/*
        <img src={celebrationsLogo} />
        */}
        <p>By continuing, you agree to our <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.</p>
      </div>
    );
  }
}
