import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import InputField from './InputField';
import PrimaryCTA from './buttons/PrimaryCTA';
import InactiveCTA from './buttons/InactiveCTA';
import SocialLogin from './buttons/SocialLogin';

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
      passwordValue: '',
      emailErrorMessage: '',
      passwordErrorMessage: '',
      toggleValue: 'Show',
      toggleState: 'password'
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
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

  validatePassword(event) {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!re.test(event.target.value)) {
      this.setState({passwordErrorMessage: 'Please enter a valid password'});
      return false;
    } else {
      this.setState({passwordErrorMessage: ''});
      return true;
    }
  }

  handleSubmit(props) {
    props.preventDefault();
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (emailRegex.test(this.state.emailValue) && passwordRegex.test(this.state.passwordValue)) {
      console.log('Correct. Logging in...');
      this.props.history.push('/login-success');
    } else {
      console.log('Try again');
      this.setState({emailErrorMessage: 'Please enter a valid email address'});
      this.setState({passwordErrorMessage: 'Please enter a valid password.'});
    }
  }

  handleEmailChange(event) {
    this.setState({emailValue: event.target.value});
  }

  handlePasswordChange(event) {
    this.setState({passwordValue: event.target.value});
  }

  handleToggle(event) {
    if (this.state.toggleValue === 'Show') {
      this.setState({
        toggleValue: 'Hide',
        toggleState: 'text'
      });
    } else {
      this.setState({
        toggleValue: 'Show',
        toggleState: 'password'
      });
    }
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

          {/* Password */}
          <div className="input__container">
            <div className="input__label">
              <label for="password">Password</label>
            </div>

            {/* Toggle Password Visibility */}
            <div className="toggle-password__wrapper">
              <input
                id="password"
                type={this.state.toggleState}
                className={"input input__field " + (this.state.passwordErrorMessage ? 'input--error' : '')}
                placeholder="password"
                onChange={this.handlePasswordChange}
              />
              <span onClick={this.handleToggle} className="toggle-password">{this.state.toggleValue}</span>
            </div>

            {/* Password Helper Text */}
            <div className="password-helper">
              Password must be at least 6 characters and contain at least one number.
            </div>
            <div className="input__error-message">{this.state.passwordErrorMessage}</div>
          </div>

          <div className="btn__wrapper">
            <input
              className={"btn " + (this.state.emailValue.includes('@') && this.state.passwordValue && this.state.passwordValue.length >= 6 ? 'btn__primary' : 'btn__inactive')}
              type="submit"
              value="Submit"
            />
          </div>
        </form>
        <div className="link">
          <Link to="/forgot-password" className="link__copy">
            Forgot Your Password&#x3f;
          </Link>
        </div>
        <div className="social-login-wrapper">
          <SocialLogin name="Facebook" />
          <SocialLogin name="Google" />
        </div>
        <div className="link">
           Don&#x27;t have an account&#x3f; <Link to="/create-account">Create an account.</Link>
        </div>
      <div className="spacer"></div>
      </div>
    );
  }
}
