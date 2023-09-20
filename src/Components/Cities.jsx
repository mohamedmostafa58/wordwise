import { useContext } from "react";
import styles from "./Cities.module.css";
import Cityitem from "./Cityitem";
import { CityProvider } from "./Providers/CitiesProvider";

const Cities = () => {
  const { cities } = useContext(CityProvider);
  return (
    <ul className={styles.cities}>
      {cities.map((city) => (
        <Cityitem key={city.id} city={city} />
      ))}
    </ul>
  );
};

export default Cities;
