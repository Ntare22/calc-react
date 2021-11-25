import React, { Component } from 'react';

const numsOperations = [
  { key: 'clear', value: 'AC' },
  { key: 'plusMinus', value: '+/-' },
  { key: 'modulo', value: '%' },
  { key: 'divide', value: '/' },
  { key: 'seven', value: 7 },
  { key: 'eight', value: 8 },
  { key: 'nine', value: 9 },
  { key: 'multiply', value: '*' },
  { key: 'four', value: 4 },
  { key: 'five', value: 5 },
  { key: 'six', value: 6 },
  { key: 'subtract', value: '-' },
  { key: 'one', value: 1 },
  { key: 'two', value: 2 },
  { key: 'three', value: 3 },
  { key: 'plus', value: '+' },
  { key: 'zero', value: 0 },
  { key: 'dot', value: '.' },
  { key: 'equals', value: '=' },
];

const buttons = numsOperations.map((item) => <button className="calc-btn" id={item.key} type="submit" key={item.key}>{item.value}</button>);

export default class NumsOperations extends Component {
  render() {
    return <div className="container">{buttons}</div>;
  }
}
