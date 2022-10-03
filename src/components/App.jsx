import React, { Component } from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import { FeetbackOptions } from './FeetbackOptions/FeetbackOptions';
import { Section } from './Sections/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = event => {
    let key = event.target.name;
    this.setState(prevstate => {
      return { [key]: prevstate[key] + 1 };
    });
  };
  countTotalFeedback = () => {
    const total = this.state;
    return total.good + total.neutral + total.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <Section titel={'Please leave feedback'}>
          <FeetbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section titel={'Statistics'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      </div>
    );
  }
}
