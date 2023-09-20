/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";
import { toast } from "react-toastify";

const Authcontext = createContext();
const fakeuser = {
  Email: "mohamedmostafa@gmail.com",
  username: "Mohamed",
  Password: "01234567890",
  avatar: "/avatar.avif",
};
const FakeAuthentication = ({ children }) => {
  const login = (Email, Password) => {
    if (Email === fakeuser.Email && Password == fakeuser.Password) {
      dispatch({
        type: "login",
        payload: { username: fakeuser.username, avatar: fakeuser.avatar },
      });
    } else {
      toast.warn("username or password is incorrect");
    }
  };
  const logout = () => {
    dispatch({ type: "logout" });
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "login":
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload,
        };
      case "logout":
        return { ...state, isAuthenticated: false, user: null };

      default:
        return state;
    }
  };
  const initialState = { isAuthenticated: false, user: null };
  const [{ isAuthenticated, user }, dispatch] = useReducer(
    reducer,
    initialState
  );
  return (
    <Authcontext.Provider value={{ login, logout, isAuthenticated, user }}>
      {children}
    </Authcontext.Provider>
  );
};
const Authenticatoin = function () {
  const context = useContext(Authcontext);
  if (!context) {
    throw new Error("auth oustise the auth provider");
  }
  return context;
};
export { FakeAuthentication, Authenticatoin };
