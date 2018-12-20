import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PrimaryCTA extends Component {
  render() {
    return (
      <Link to="/" className="btn__link btn__link--primary">
        <div className="btn btn__primary">
          {this.props.name}
        </div>
      </Link>
    )
  }
}
