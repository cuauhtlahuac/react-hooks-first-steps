import React, { useEffect, useState } from "react";

export function useCoordenadas() {
  const [coordenadas, setCoordenadas] = useState({
    latitud: null,
    longitud: null
  });
  let geoId;
  //Is like a component did mount
  useEffect(() => {
    geoId = window.navigator.geolocation.watchPosition(position => {
      // change the state here
      setCoordenadas({
        latitud: position.coords.latitude,
        longitud: position.coords.longitude
      });
    });
    // Is like component unmount
    return () => {
      navigator.geolocation.clearWatch(geoId);
    };
  });
  return coordenadas;
}
