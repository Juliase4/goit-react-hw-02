import css from "../Feedback/Feedback.module.css";

export default function Feedback({ data, total, percent }) {
  return (
    <>
      <p>Good: {data.good}</p>
      <p>Neutral: {data.neutral}</p>
      <p>Bad: {data.bad}</p>
      <p>Total: {total}</p>
      <p className={css.text}>Positive: {percent}%</p>
    </>
  );
}
