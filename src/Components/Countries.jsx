import Countryitem from "./Countryitem";
import styles from "./Countries.module.css";
const Countries = () => {
  const citiesvisited = [...JSON.parse(sessionStorage.getItem("cities"))];
  const Countriesvisited = citiesvisited.reduce((acc, cur) => {
    if (acc.map((object) => object.country).includes(cur.country)) {
      return acc;
    } else {
      return [...acc, { country: cur.country, emoji: cur.emoji, id: cur.id }];
    }
  }, []);
  return (
    <ul className={styles.countries}>
      {Countriesvisited.map((objectofcountry) => (
        <Countryitem
          objectofcountry={objectofcountry}
          key={objectofcountry.id}
        />
      ))}
    </ul>
  );
};

export default Countries;
