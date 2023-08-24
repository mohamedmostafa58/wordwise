/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const Ulist = ({ className, loginclassname }) => {
  return (
    <ul className={className}>
      <li>
        <Link to="/products">products</Link>
      </li>
      <li>
        <Link to="/pricing">pricing</Link>
      </li>
      <li>
        <Link to="/login" id={loginclassname}>
          {" "}
          login
        </Link>
      </li>
    </ul>
  );
};

export default Ulist;
