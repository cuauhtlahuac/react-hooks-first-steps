import React, { useState } from "react";
import { useCoordenadas } from "../hooks/useCoordenadas";
import { useHookTest } from "../hooks/useHookTesting";

export default function HookTest({num}) {
  const [number, setNumber] = useState(num);
  const coordenadas = useCoordenadas();
  const numbers = useHookTest(number);
  return (
    <div>
      <h3>COORDENADAS HERE</h3>
      <p>{coordenadas.latitud}</p>
      <p>{coordenadas.longitud}</p>
      <p>{numbers.timesFive}</p>
      <p>{numbers.timesThree}</p>
      <button onClick={() => {
        setNumber(number + num)
      }}>multiply</button>
    </div>
  );
}
