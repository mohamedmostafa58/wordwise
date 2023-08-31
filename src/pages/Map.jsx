import { useNavigate } from "react-router-dom";
import styles from "./Map.module.css";
const Map = () => {
  const navigate = useNavigate();
  return (
    <div
      className={styles.map}
      onClick={() => {
        navigate("form");
      }}
    >
      <h2>Map</h2>
      <div className={styles.position}>
        <h3>position:</h3>
        <p></p>
      </div>
      <button>change position</button>
    </div>
  );
};

export default Map;
