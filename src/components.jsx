import React from "react";

export function Section({ title, children }) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map((option) => (
        <button key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      ))}
    </div>
  );
}

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
