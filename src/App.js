import React, { useState } from "react";
import "./App.css";
import Coordenadas from "./components/Coordenadas";
import HookTest from "./components/HookTestChanges";

function App() {
  const [suma, setSumar] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello Hooks</h1>
        <h2>{suma}</h2>
        <button onClick={() => setSumar(suma + 1)}>ADD</button>
        <button onClick={() => setSumar(suma - 1)}>REST</button>
        <Coordenadas/>
        <HookTest num={3}/>
        <HookTest num={106}/>
      </header>
    </div>
  );
}

export default App;
