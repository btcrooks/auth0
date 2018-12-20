import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function changeButtonType(props) {
  switch(props.toLowerCase()) {
    case 'facebook':
      return <div className="btn btn__social-login btn__social-login--facebook">{props}</div>;
      break;
    case 'google':
      return <div className="btn btn__social-login btn__social-login--google">{props}</div>;
      break;
    default:
      return null;
  }
}

export default class SocialLogin extends Component {
  render() {
    return (
      <Link to="/" className="btn__link btn__link--social-login">
      {changeButtonType(this.props.name)}
      </Link>
    );
  }
}
