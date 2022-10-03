import React from 'react';

export class Statistics extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  toPressGood = () => {
    this.setState(e => {
      return {
        good: e.good + 1,
      };
    });
  };
  toPressNeutral = () => {
    this.setState(e => {
      return {
        neutral: e.neutral + 1,
      };
    });
  };
  toPressBad = () => {
    this.setState(e => {
      return {
        bad: e.bad + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <button type="button" onClick={this.toPressGood}>
          Good
        </button>
        <button type="button" onClick={this.toPressNeutral}>
          Neutral
        </button>
        <button type="button" onClick={this.toPressBad}>
          Bad
        </button>

        <h2>Statistics</h2>
        <ul>
          <li>Good : {this.state.good}</li>
          <li>Neutral : {this.state.neutral}</li>
          <li>Bad : {this.state.bad}</li>
        </ul>
      </div>
    );
  }
}
