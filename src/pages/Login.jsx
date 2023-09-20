import { useEffect, useState } from "react";
import styles from "./Login.module.css";
import Navpage from "../Components/Navpage";
import { useNavigate } from "react-router-dom";
import { Authenticatoin } from "../Components/Providers/FakeAuthentication";
import { ToastContainer } from "react-toastify";

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("mohamedmostafa@gmail.com");
  const [password, setPassword] = useState("01234567890");
  const navigate = useNavigate();
  const { isAuthenticated, login } = Authenticatoin();
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/app", { replace: true });
    }
  }, [isAuthenticated, navigate]);
  return (
    <main className={styles.login}>
      <Navpage />
      <form className={styles.form}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              login(email, password);
            }}
          >
            Login
          </button>
          <ToastContainer />
        </div>
      </form>
    </main>
  );
}
