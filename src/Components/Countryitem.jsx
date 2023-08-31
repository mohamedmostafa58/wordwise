import styles from "./Countryitem.module.css";
/* eslint-disable react/prop-types */
const Countryitem = ({ objectofcountry }) => {
  return (
    <li className={styles.countryitem}>
      <div>{objectofcountry.emoji}</div>
      <h3>{objectofcountry.country}</h3>
    </li>
  );
};

export default Countryitem;
