import styles from "./Logo.module.css";
import logo from "./../../public/logo.png";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <Link to="/">
      <img src={logo} className={styles.logo} alt="logo" />
    </Link>
  );
};

export default Logo;
