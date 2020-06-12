import React from "react";
import { useCoordenadas } from "../hooks/useCoordenadas";

export default function Coordenadas() {
  const coordenadas = useCoordenadas();
  return (
    <div>
      <h3>COORDENADAS HERE</h3>
      <p>{coordenadas.latitud}</p>
      <p>{coordenadas.longitud}</p>
    </div>
  );
}
