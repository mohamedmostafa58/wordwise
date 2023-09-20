/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import data from "../../../data/cities.json";
const CityProvider = createContext();
if (sessionStorage.getItem("cities") === null) {
  sessionStorage.setItem("cities", JSON.stringify(data.cities));
}
const citiesvisited = JSON.parse(sessionStorage.getItem("cities"));
const CitiesProvider = ({ children }) => {
  const reducer = function (state, action) {
    switch (action.type) {
      case "cities/loaded":
        return { ...state, cities: action.payload };

      case "city/loaded":
        return {
          ...state,
          selectedcityid: action.payload.id,
          cities: [...state.cities, action.payload],
        };

      case "city/delete":
        return { ...state, cities: action.payload, selectedcityid: "" };
      case "position/new":
        return { ...state, position: action.payload };
      case "newcityselected":
        return { ...state, selectedcityid: action.payload };
      case "newposition":
        return { ...state, position: action.payload };
      default:
        return state;
    }
  };
  const initialState = {
    cities: citiesvisited,
    position: [1, 40],
    selectedcityid: "",
  };
  const [{ cities, position, selectedcityid }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const deletecity = (id) => {
    const newcities = cities.filter((city) => city.id !== id);
    sessionStorage.setItem("cities", JSON.stringify(newcities));
    dispatch({ type: "city/delete", payload: newcities });
  };
  const addcity = (city) => {
    sessionStorage.setItem("cities", JSON.stringify([...cities, city]));
    dispatch({ type: "city/loaded", payload: city });
  };
  const setselectedcityid = (id) => {
    dispatch({ type: "newcityselected", payload: id });
  };
  const setposition = function (position) {
    dispatch({ type: "newposition", payload: position });
  };

  return (
    <CityProvider.Provider
      value={{
        cities,
        deletecity,
        selectedcityid,
        setselectedcityid,
        position,
        setposition,
        addcity,
      }}
    >
      {children}
    </CityProvider.Provider>
  );
};

export { CitiesProvider, CityProvider };
