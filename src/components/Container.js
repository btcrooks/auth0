import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BrandLogo from './BrandLogo';
import CreateAccount from './CreateAccount';
import Footer from './Footer';
import ForgotPassword from './ForgotPassword';
import Login from './Login';
import LoginSuccess from './LoginSuccess';

export default class Container extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <BrandLogo />
          <Route exact path="/" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/create-account" component={CreateAccount} />
          <Route path="/login-success" component={LoginSuccess} />
          <Footer />
        </div>
      </Router>
    );
  }
}
