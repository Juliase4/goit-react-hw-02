import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";

const statusOfResponseTypes = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const App = () => {
  return (
    <>
      <Description />
      <Options />
      <Feedback response={statusOfResponseTypes} />
    </>
  );
};

export default App;
