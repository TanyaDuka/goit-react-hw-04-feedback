import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Statistics from './Statistics';
import Notification from './Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onNewFeedback = event => {
    switch (event.target.value) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        alert('Something is wrong');
    }
  };

  const total = good + neutral + bad;

  const feedbacks = Object.keys({ good, neutral, bad });

  const countPositiveFeedbackPercentage = Math.round((good / total) * 100);

  return (
    <>
      <Section title="Please leave feed back">
        <FeedbackOptions buttons={feedbacks} onLeaveFeedback={onNewFeedback} />
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <Notification message={'No feedback given'} />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            percentage={countPositiveFeedbackPercentage}
          />
        )}
      </Section>
    </>
  );
};

export default App;
