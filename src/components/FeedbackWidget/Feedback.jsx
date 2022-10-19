// import css from './Feedback.module.css'
import React, { Component } from 'react';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';

export class Feedback extends Component {
  /* ... */
  constructor() {
    super();

    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  onGood = evt => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };

  onNeutral = evt => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };
  onBad = evt => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    // const onLeaveFeedback = [
    //   this.onGood, this.onNeutral,  this.onBad   ]

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onGood={this.onGood}
            onNeutral={this.onNeutral}
            onBad={this.onBad}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            countTotalFeedback={this.countTotalFeedback()}
            countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}
