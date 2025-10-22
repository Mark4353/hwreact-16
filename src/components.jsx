import React from "react";

export const FeedbackContext = React.createContext(null);

export function Section({ title, children }) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export const FeedbackOptions = React.forwardRef(function FeedbackOptions(
  { options },
  ref
) {
  const { handleFeedback } = React.useContext(FeedbackContext);

  return (
    <div>
      {options.map((option, idx) => (
        <button
          key={option}
          ref={idx === 0 ? ref : null}
          onClick={() => handleFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
});

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div>
      <p>Добре: {good}</p>
      <p>Нейтрально: {neutral}</p>
      <p>Погано: {bad}</p>
      <p>Всього: {total}</p>
      <p>Позитивні: {positivePercentage}%</p>
    </div>
  );
}

export function Notification({ message }) {
  return <p>{message}</p>;
}
