import styles from "./Navpage.module.css";
import Logo from "./Logo";
import { useEffect, useState } from "react";
import Ulist from "../pages/Ulist";
const Navpage = () => {
  const [innerwidth, setinnerwidth] = useState(window.innerWidth);
  const [toggled, settoggled] = useState(false);
  useEffect(() => {
    const handlewidth = function () {
      setinnerwidth(window.innerWidth);
    };
    window.addEventListener("resize", handlewidth);
    return () => {
      window.removeEventListener("resize", handlewidth);
    };
  }, []);
  return (
    <>
      {innerwidth > 592 ? (
        <div className={styles.navdiv}>
          <Logo />
          <Ulist className={styles.nav} loginclassname={styles.login} />
        </div>
      ) : toggled ? (
        <>
          <div className={styles.navdiv}>
            <Logo />
            <span
              className="material-icons menu"
              onClick={() => {
                settoggled(!toggled);
              }}
            >
              menu
            </span>
          </div>
          <Ulist className={styles.navsmall} loginclassname={styles.login} />
        </>
      ) : (
        <div className={styles.navdiv}>
          <Logo />
          <span
            className="material-icons menu"
            onClick={() => {
              settoggled(!toggled);
            }}
          >
            menu
          </span>
        </div>
      )}
    </>
  );
};

export default Navpage;
