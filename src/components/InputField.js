import React, { Component } from 'react';

function ErrorMessage(props) {
  if (props.message) {
    return <div className="input__error-message">{props.message}</div>
  } else {
    return <div className="input__error-message"></div>
  }
}

function FieldType(props) {
  if (props.toLowerCase() === 'password') {
    return "password";
  } else {
    return "text";
  }
}

export default class InputField extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
  }

  validateEmail(props) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(re.test(props));
  }

  handleChange(event) {
    console.log(this.validateEmail(event.target.value));
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div className="input__container">
        <div className="input__label">
          <label for={this.props.id}>
            {this.props.label}
          </label>
        </div>
        <input
          id={this.props.id}
          type={FieldType(this.props.label)}
          className="input input__field"
          placeholder={this.props.placeholder}
        />
        <ErrorMessage message={this.props.error} />
      </div>
    );
  }
}

