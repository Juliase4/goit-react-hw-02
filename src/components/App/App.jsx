import { useState, useEffect } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

export default function App() {
  const [responses, setResponses] = useState(() => {
    const savedResponses = window.localStorage.getItem("responsesData");
    if (savedResponses !== null) {
      return JSON.parse(savedResponses);
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem("responsesData", JSON.stringify(responses));
  }, [responses]);

  const updateFeedback = (feedbackType) => {
    // нове значення стану
    setResponses({
      ...responses,
      [feedbackType]: responses[feedbackType] + 1,
    });
  };

  const totalFeedback = responses.good + responses.neutral + responses.bad;

  const initFeedback = () => {
    setResponses({
      ...responses,
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const percentOfPositiveRes =
    totalFeedback > 0 ? Math.round((responses.good / totalFeedback) * 100) : 0;

  return (
    <>
      <Description />
      <Options
        update={updateFeedback}
        total={totalFeedback}
        init={initFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          data={responses}
          total={totalFeedback}
          percent={percentOfPositiveRes}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}
