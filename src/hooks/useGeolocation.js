import { useState } from "react";

function useGeolocation() {
  const [position, setposition] = useState([40, 40]);
  const [error, seterror] = useState(null);
  const [loading, setloading] = useState(false);
  function getposition() {
    if (!navigator.geolocation) {
      return seterror("your browser doesnot support geolocation");
    }
    setloading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setposition([pos.coords.latitude, pos.coords.longitude]);
        setloading(false);
      },
      (err) => {
        seterror(err.message);
        setloading(false);
      }
    );
  }

  return { position, error, loading, getposition };
}
export { useGeolocation };
