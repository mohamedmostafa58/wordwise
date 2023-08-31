import { useState } from "react";
import data from "../../data/cities.json";
import styles from "./Cities.module.css";
import Cityitem from "./Cityitem";
if (localStorage.getItem("cities") === null) {
  localStorage.setItem("cities", JSON.stringify(data.cities));
}
const Cities = () => {
  const citiesvisited = JSON.parse(localStorage.getItem("cities"));
  const [cities, setcities] = useState([...citiesvisited]);
  const deletecity = (id) => {
    const newcities = cities.filter((city) => city.id !== id);
    localStorage.setItem("cities", JSON.stringify(newcities));
    setcities(newcities);
  };
  return (
    <ul className={styles.cities}>
      {cities.map((city) => (
        <Cityitem key={city.id} city={city} deletecity={deletecity} />
      ))}
    </ul>
  );
};

export default Cities;
