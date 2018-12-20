import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class InactiveCTA extends Component {
  render() {
    return (
      <Link to="/" className="btn__link btn__link--inactive">
        <div className="btn btn__inactive">
          {this.props.name}
        </div>
      </Link>
    )
  }
}
