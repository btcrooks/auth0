import React, { Component } from 'react';

export default class FieldEditor extends React.component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const text = event.target.value;
    this.props.onChange(this.props.id, text);
  }

  render() {
    return (
      <div className="input">
        <input type={this.props.type} onChange="{this.handleChange}" value={this.props.value} />
      </div>
    );
  }
}
