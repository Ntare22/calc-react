import React, { Component } from 'react';
import CalcScreen from './CalcScreen';
import NumsOperations from './NumsOperations';

export default class Calculator extends Component {
  render() {
    return (
      <>
        <CalcScreen number="0" />
        <NumsOperations />
      </>
    );
  }
}
