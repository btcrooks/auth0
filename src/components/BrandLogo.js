import React, { Component } from 'react';

export default class BrandLogo extends Component {
  render() {
    return (
      <div class="logo__brand-logo">
        <img src={ require('../img/harry.png') } />
      </div>
    );
  }
}
