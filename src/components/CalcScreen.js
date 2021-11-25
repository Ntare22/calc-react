import React, { Component } from 'react';

export default class CalcScreen extends Component {
  render() {
    const { number } = this.props;

    return (
      <div className="calc-screen">
        <span>{number}</span>
      </div>
    );
  }
}
