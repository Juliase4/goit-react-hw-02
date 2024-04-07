import css from "../Options/Options.module.css";

export default function Options() {
  // const updateFeedback = (feedbackType) => {
  //   const [clicks, setClicks] = useState(0);

  //   setClicks(clicks + 1);
  // };

  return (
    <div className={css.container}>
      <ul className={css.list}>
        <li>
          <button>Good</button>
        </li>
        <li>
          <button>Neutral</button>
        </li>
        <li>
          <button>Bad</button>
        </li>
        {/* <li>
          <button>Reset</button>
        </li> */}
      </ul>
    </div>
  );
}
