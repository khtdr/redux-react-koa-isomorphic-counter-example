import React from 'react';
import PropTypes from 'prop-types';

export default class Counter extends React.Component {
  static propTypes = {
    increment: PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired
  };

  render() {
    return (
      <p>
        Clicked: <span>{this.props.counter}</span> times
        {' '}
        <button onClick={()=>this.props.increment()}>+</button>
        {' '}
        <button onClick={()=>this.props.decrement()}>-</button>
        {' '}
        <button onClick={()=>this.props.incrementIfOdd(this.props.counter)}>
          Increment if odd
        </button>
        {' '}
        <button onClick={()=>this.props.reset()}>Reset</button>
      </p>
    );
  }
}
