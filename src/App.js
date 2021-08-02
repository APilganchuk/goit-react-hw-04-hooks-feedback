import { useState } from "react";
import Statistics from "./components/Statistics";
import FeedbackOptions from "./components/FeedbackOptions";

import Section from "./components/Section";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = {
    good: () => {
      setGood((good) => good + 1);
    },
    neutral: () => {
      setNeutral((neutral) => neutral + 1);
    },
    bad: () => {
      setBad((bad) => bad + 1);
    },
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    const goodFeedback = good;
    const totalFeedback = countTotalFeedback();

    const positiveFeedback = ((goodFeedback / totalFeedback) * 100).toFixed();
    return positiveFeedback;
  };

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        options={["good", "neutral", "bad"]}
        onLeaveFeedback={onLeaveFeedback}
      />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback()}
        positivePercentage={countPositiveFeedbackPercentage()}
      />
    </Section>
  );
};

export default App;
