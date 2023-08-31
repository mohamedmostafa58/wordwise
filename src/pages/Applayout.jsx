import styles from "./Applayout.module.css";
import Map from "./Map";
import Sidebar from "./Sidebar";
const Applayout = () => {
  return (
    <div className={styles.applayout}>
      <Sidebar />
      <Map />
    </div>
  );
};

export default Applayout;
