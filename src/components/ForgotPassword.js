import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import InputField from './InputField';
import PrimaryCTA from './buttons/PrimaryCTA';
import InactiveCTA from './buttons/InactiveCTA';

function ErrorMessage(props) {
  if (props.message) {
    return <div className="input__error-message">{props.message}</div>;
  } else {
    return <div className="input__error-message"></div>;
  }
}

export default class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      emailValue: '',
      emailErrorMessage: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
  }

  validateEmail(event) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(event.target.value)) {
      this.setState({emailErrorMessage: 'Please enter a valid email address'});
      return false;
    } else {
      this.setState({emailErrorMessage: ''});
      return true;
    }
  }

  handleSubmit(props) {
    props.preventDefault();
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (emailRegex.test(this.state.emailValue) && passwordRegex.test(this.state.passwordValue)) {
      console.log('Correct. Logging in...');
      this.props.history.push('/forgot-password');
    } else {
      console.log('Try again');
      this.setState({emailErrorMessage: 'Please enter a valid email address'});
      this.setState({passwordErrorMessage: 'Please enter a valid password.'});
    }
  }

  handleEmailChange(event) {
    this.setState({emailValue: event.target.value});
  }


  render() {
    return (
      <div className="login">
        <form onSubmit={this.handleSubmit}>
          {/* Email Address */}
          <div className="input__container">
            <div className="input__label">
              <label for="emailAddress">Email Address</label>
            </div>
            <input
              id="emailAddress"
              type="text"
              className={"input input__field " + (this.state.emailErrorMessage ? 'input--error' : '')}
              placeholder="janedoe@email.com"
              onChange={this.handleEmailChange}
              onBlur={this.validateEmail}
            />
            <div className="input__error-message">{this.state.emailErrorMessage}</div>
          </div>
          <div className="btn__wrapper">
            <input
              className={"btn " + (this.state.emailValue.includes('@') ? 'btn__primary' : 'btn__inactive')}
              type="submit"
              value="Submit"
            />
          </div>
        </form>
        <div className="link">
          Already have an account&#x3f; <Link to="/">Sign in now.</Link>
        </div>
      </div>
    );
  }
}
