import { useNavigate } from "react-router-dom";
import { Authenticatoin } from "./Providers/FakeAuthentication";
import styles from "./User.module.css";
const User = () => {
  const navigate = useNavigate();
  const { user, logout } = Authenticatoin();
  if (user) {
    return (
      <div className={styles.logeduser}>
        <img src={user.avatar} alt="user image" />
        <span>Welcome {user.username}</span>
        <button
          onClick={() => {
            logout();
            navigate("/");
          }}
        >
          Logout
        </button>
      </div>
    );
  } else {
    return null;
  }
};

export default User;
