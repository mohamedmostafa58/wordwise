import { Link } from "react-router-dom";
import styles from "./Cityitem.module.css";
import { useContext } from "react";
import { CityProvider } from "./Providers/CitiesProvider";
import formatedate from "../functions/formatedate";
/* eslint-disable react/prop-types */
const Cityitem = ({ city }) => {
  const { deletecity, selectedcityid, setselectedcityid } =
    useContext(CityProvider);
  return (
    <li
      className={`${selectedcityid === city.id ? "selectedcity" : ""}`}
      onClick={(e) => {
        e.stopPropagation();
        setselectedcityid(city.id);
      }}
    >
      <Link
        to={`${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`}
        className={styles.cityitem}
      >
        <div className={styles.cityitemcontent}>
          <span>{city.emoji}</span>
          <h4>{city.cityName}</h4>
        </div>
        <div className={styles.cityitemcontent}>
          <span>{formatedate(city.date)}</span>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();

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
