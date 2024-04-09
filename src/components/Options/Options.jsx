import css from "../Options/Options.module.css";

export default function Options({ update, total, init }) {
  return (
    <div className={css.container}>
      <button onClick={() => update("good")}>Good</button>
      <button onClick={() => update("neutral")}>Neutral</button>
      <button onClick={() => update("bad")}>Bad</button>
      {total > 0 && <button onClick={() => init()}>Reset</button>}
    </div>
  );
}
