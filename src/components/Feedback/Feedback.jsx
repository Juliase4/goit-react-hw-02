import css from "../Feedback/Feedback.module.css";

export default function Feedback({ response }) {
  return (
    <div>
      <ul className={css.list}>
        <li>
          <p className={css.status}>Good: {response.good}</p>
        </li>
        <li>
          <p className={css.status}>Neutral: {response.neutral}</p>
        </li>
        <li>
          <p className={css.status}>Bad: {response.bad}</p>
        </li>
      </ul>
    </div>
  );
}
