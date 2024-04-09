import css from "../Feedback/Feedback.module.css";

export default function Feedback({ data, total, percent }) {
  return (
    <div>
      <ul className={css.list}>
        <li>
          <p className={css.status}>Good: {data.good}</p>
        </li>
        <li>
          <p className={css.status}>Neutral: {data.neutral}</p>
        </li>
        <li>
          <p className={css.status}>Bad: {data.bad}</p>
        </li>
        <li>
          <p className={css.status}>Total: {total}</p>
        </li>
        <li>
          <p className={css.status}>Positive: {percent}%</p>
        </li>
      </ul>
    </div>
  );
}
