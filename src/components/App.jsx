import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    const total = good + neutral + bad;

    return total;
  };
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const result = Math.round(100 * (good / total)) + '%';
    return result;
  };
  const btnClickHandler = event => {
    const name = event.currentTarget.name;

    if (name === 'good') {
      setGood(prevValue => prevValue + 1);
    } else if (name === 'bad') {
      setBad(prevValue => prevValue + 1);
    } else if (name === 'neutral') {
      setNeutral(prevValue => prevValue + 1);
    }
  };
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ good, bad, neutral }}
          onLeaveFeedback={btnClickHandler}
        />
      </Section>
      {countTotalFeedback() > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
};
//prevState = {good: 0}
//name = good
//[name] : prevState[name] + 1
// good: prevState[значення з ключем 'good'] + 1
// name: 5 => в обʼєкті: {name: 5})
//[name]: 5 =>  в об'кті: {good: 5}
// switch (name) {
//   case 'good':
//     setGood(prevValue => prevValue + 1);
//     break;
//   case 'bad':
//     setBad(prevValue => prevValue + 1);
//     break;
//   case 'neutral':
//     setNeutral(prevValue => prevValue + 1);
//     break;

//   default:
//     break;
// }
