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
      <>
        <p>
          Current Value: <code>{this.props.counter}</code>
        </p>
        <fieldset>
          <legend>actions</legend>
          <button onClick={()=>this.props.increment()}>+</button>
          {' '}
          <button onClick={()=>this.props.decrement()}>-</button>
          {' '}
          <button onClick={()=>this.props.incrementIfOdd(this.props.counter)}>
            Increment if odd
          </button>
          {' '}
          <button onClick={()=>this.props.reset()}>Reset</button>
        </fieldset>
      </>
    );
  }
}
