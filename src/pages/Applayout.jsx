import User from "../Components/User";
import styles from "./Applayout.module.css";
import Map from "./Map";
import Sidebar from "./Sidebar";
const Applayout = () => {
  return (
    <div className={styles.applayout}>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
};

export default Applayout;
