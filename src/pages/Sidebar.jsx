import { Link, Outlet } from "react-router-dom";
import Logo from "../Components/Logo";
import styles from "./Sidebar.module.css";
import { useContext, useState } from "react";
import { CityProvider } from "../Components/Providers/CitiesProvider";
const Sidebar = () => {
  const [selected, setselected] = useState("cities");
  const { setselectedcityid } = useContext(CityProvider);
  return (
    <div
      className={styles.sidebar}
      onClick={() => {
        setselectedcityid("");
      }}
    >
      <Logo />
      <div className={styles.citycountry}>
        <Link to="cities">
          <p
            className={selected === "cities" ? styles.active : ""}
            onClick={() => {
              setselected("cities");
            }}
          >
            Cities
          </p>
        </Link>
        <Link to="countries">
          <p
            className={selected === "countries" ? styles.active : ""}
            onClick={() => {
              setselected("countries");
            }}
          >
            countries
          </p>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Sidebar;
