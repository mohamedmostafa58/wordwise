/* eslint-disable no-unused-vars */
import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Form.module.css";
import { useContext, useEffect, useState } from "react";
import { CityProvider } from "./Providers/CitiesProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Form = () => {
  const Navigate = useNavigate();
  const { cities, addcity } = useContext(CityProvider);
  const [cityname, setcityname] = useState("");
  const [country, setcountry] = useState("");
  const [emoji, setemoji] = useState("");
  const [date, setdate] = useState(new Date());
  const [notes, setnotes] = useState("");
  const [error, seterror] = useState(null);
  const baseurl = "https://nominatim.openstreetmap.org/reverse?format=jsonv2&";
  const emojibaseurl = "https://restcountries.com/v3/alpha/";
  const [cityparam] = useSearchParams();
  const lat = cityparam.get("lat");
  const lng = cityparam.get("lng");
  useEffect(() => {
    const fetchcityname = async () => {
      try {
        seterror(null);
        const res = await fetch(`${baseurl}lat=${lat}&lon=${lng}`);
        const data = await res.json();
        const emojires = await fetch(
          `${emojibaseurl}${data.address.country_code}`
        );
        const emoji = await emojires.json();
        setcityname(
          data.address.city || data.address.town || data.address.village || ""
        );
        setcountry(data.address.country);
        setemoji(emoji);
      } catch (e) {
        seterror(e.message);
      }
    };

    fetchcityname();
  }, [cityname, date, lat, lng]);
  const newcity = function () {
    if (!cityname || !notes) {
      toast.error("please complete the city data to add it");
    } else {
      const addedcity = {
        cityName: cityname,
        country: country,
        emoji: emoji[0].flag,
        date: date,
        notes: notes,
        position: {
          lat: lat,
          lng: lng,
        },
        id: Math.random() * 1000,
      };
      addcity(addedcity);
      Navigate("../cities");
    }
  };
  if (error) {
    return <h2>{error}</h2>;
  }
  return (
    <form className={styles.cityform}>
      <label htmlFor="cityname">city name</label>
      <input
        type="text"
        id="cityname"
        name="cityName"
        value={cityname}
        onChange={(e) => {
          setcityname(e.target.value);
        }}
      />
      <label htmlFor="visittime">when did you go to?</label>
      <DatePicker
        id="visittime"
        selected={date}
        onChange={(date) => setdate(date)}
      />
      <label htmlFor="notes">notes about your trip to </label>
      <input
        type="text"
        id="notes"
        name="notes"
        value={notes}
        onChange={(e) => {
          setnotes(e.target.value);
        }}
      />
      <div className={styles.buttons}>
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            newcity();
          }}
        >
          add
        </button>
        <ToastContainer />
        <button
          onClick={(e) => {
            e.preventDefault();
            Navigate(-1);
          }}
        >
          back
        </button>
      </div>
    </form>
  );
};

export default Form;
