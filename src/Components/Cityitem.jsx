import { Link } from "react-router-dom";
import styles from "./Cityitem.module.css";
/* eslint-disable react/prop-types */
const Cityitem = ({ city, deletecity }) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formatedate = function (date) {
    const dateobject = new Date(date);
    const formatteddate = dateobject.toLocaleDateString("en-US", options);
    return formatteddate;
  };
  return (
    <li>
      <Link to={`${city.id}`} className={styles.cityitem}>
        <div className={styles.cityitemcontent}>
          <span>{city.emoji}</span>
          <h4>{city.cityName}</h4>
        </div>
        <div className={styles.cityitemcontent}>
          <span>{formatedate(city.date)}</span>
          <button
            onClick={() => {
              deletecity(city.id);
            }}
          >
            x
          </button>
        </div>
      </Link>
    </li>
  );
};

export default Cityitem;
