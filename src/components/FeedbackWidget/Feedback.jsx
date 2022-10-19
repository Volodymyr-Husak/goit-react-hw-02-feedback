// import css from './Feedback.module.css'
import React, { Component } from 'react';

export class Feedback extends Component {
  /* ... */
  constructor() {
    super();
    // this.countTotalFeedback = this.countTotalFeedback.bind(this);

    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
      total: 0,
      positiveFeedback: 0,
    };
  }

  //   onClickBtn = evt => {
  //     this.setState(prevState => {
  //       return { good: prevState.good + 1 };
  //     });
  //   };

  onGood = evt => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };

  onNeutral = evt => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1};
    });
  };
  onBad = evt => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };
  countTotalFeedback = () => {
    this.setState(prevState => {
      console.log(prevState.total);
      
      return { total: prevState.good + prevState.neutral + prevState.bad };
    });
  };


  render() {

    // const { step } = this.props;
    // const {total} = this.state;

    return (
      <div>
        <h1>Please leave feedback</h1>
        <ul>
          <li>
            <button type="button" onClick={this.onGood} >
              Good
            </button>
          </li>
          <li>
            <button type="button" onClick={this.onNeutral}>
              Neutral
            </button>
          </li>
          <li>
            <button type="button" onClick={this.onBad}>
              Bad
            </button>
          </li>
        </ul>
        <h2>Statistics</h2>
        <ul>
          <li>
            <p>Goog: {this.state.good}</p>
          </li>
          <li>
            <p>Neutral: {this.state.neutral}</p>
          </li>
          <li>
            <p>Bad: {this.state.bad}</p>
          </li>
          <li>
            <p >Total: {this.state.total}</p>
            {/* <p>Total: {this.state.data}</p> */}
          </li>
        </ul>

        {/* <button type="button" onClick={this.handleDecrement}>
          Decrement by {step}
        </button>
        <button type="button" onClick={this.handleDecrement}>
          Decrement by {step}
        </button> */}
      </div>
    );
  }
  // countTotalFeedback();
}
