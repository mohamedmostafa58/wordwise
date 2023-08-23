import styles from "./Logo.module.css";
import logo from "./../../public/logo.png";
const Logo = () => {
  return <img src={logo} className={styles.logo} alt="logo" />;
};

export default Logo;
