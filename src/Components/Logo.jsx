/* eslint-disable react/prop-types */
import styles from "./Logo.module.css";
import logo from "./../../public/logo.png";
import { Link } from "react-router-dom";
const Logo = ({ className }) => {
  return (
    <Link to="/" className={className}>
      <img src={logo} className={styles.logo} alt="logo" />
    </Link>
  );
};

export default Logo;
