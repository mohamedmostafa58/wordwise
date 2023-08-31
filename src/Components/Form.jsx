import { useNavigate } from "react-router-dom";
import styles from "./Form.module.css";
const Form = () => {
  const Navigate = useNavigate();
  return (
    <form className={styles.cityform}>
      <label htmlFor="cityname">city name</label>
      <input type="text" id="cityname" name="cityName" />
      <label htmlFor="visittime">when did you go to?</label>
      <input type="text" id="visittime" name="visitTime" />
      <label htmlFor="notes">notes about your trip to </label>
      <input type="text" id="notes" name="notes" />
      <div className={styles.buttons}>
        <button>add</button>
        <button
          onClick={(e) => {
            e.preventDefault();
            Navigate(-1);
          }}
        >
          back
        </button>
      </div>
    </form>
  );
};

export default Form;
