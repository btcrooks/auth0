import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

export default class LoginSuccess extends Component {
  render() {
    return (
      <div>
        <center>
          Logged In!
          <br />
          <br />
          <Link to="/">Start Over</Link>
        </center>
      </div>
    );
  }
}
