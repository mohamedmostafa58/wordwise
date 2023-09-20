/* eslint-disable no-unused-vars */
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvent,
} from "react-leaflet";
import styles from "./Map.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CityProvider } from "../Components/Providers/CitiesProvider";
import { useGeolocation } from "../hooks/useGeolocation";
const Map = () => {
  const Navigate = useNavigate();
  const { cities } = useContext(CityProvider);
  const { position: yourposition, getposition, loading } = useGeolocation();
  const [cityposition] = useSearchParams();
  const lat = cityposition.get("lat");
  const lng = cityposition.get("lng");
  const [position, setposition] = useState([...yourposition]);
  useEffect(() => {
    setposition([...yourposition]);
  }, [yourposition]);

  useEffect(() => {
    if (lat && lng) setposition([lat, lng]);
  }, [lat, lng]);
  return (
    <div className={styles.map} id="map">
      <MapContainer
        center={position}
        zoom={8}
        scrollWheelZoom={false}
        className={styles.mapphoto}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span>{city.emoji}</span> {city.cityName}
            </Popup>
          </Marker>
        ))}
        <Mapview position={position} />
        <button
          className={styles.mapbuttn}
          onClick={() => {
            getposition();
          }}
        >
          {loading ? "loading" : "getcurrentposition"}
        </button>
        <Detectclick />
      </MapContainer>
    </div>
  );
};
// eslint-disable-next-line react/prop-types
function Mapview({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}
function Detectclick() {
  const navigate = useNavigate();
  useMapEvent({
    click: (e) => {
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    },
  });
}
export default Map;
