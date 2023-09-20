import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CityProvider } from "./Providers/CitiesProvider";
import styles from "./City.module.css";
import formatedate from "../functions/formatedate";
const City = () => {
  const navigate = useNavigate();
  const { cities } = useContext(CityProvider);
  const param = useParams();
  const city = cities.find((city) => city.id === Number(param.id));
  return (
    <div className={styles.city}>
      <div className={styles.cityname}>
        <p>city name</p>
        <h2>
          <span>{city.emoji}</span>
          {city.cityName}
        </h2>
      </div>
      <div className={styles.date}>
        <p>you went to {city.cityName} on</p>
        <h4>{formatedate(city.date)}</h4>
      </div>
      <div className={styles.notes}>
        <p>your notes</p>
        <h4>{city.notes}</h4>
      </div>
      <p>learn more</p>
      <div className={styles.linkbtn}>
        <a href={`https://en.wikipedia.org/wiki/${city.cityName}`}>
          checkout {city.cityName} on wekipedia &rarr;
        </a>
        <button
          onClick={(e) => {
            e.stopPropagation();
            navigate(-1);
          }}
        >
          back
        </button>
      </div>
    </div>
  );
};

export default City;
