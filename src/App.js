import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const sayHello = () => console.log("hello");
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  useEffect(sayHello, [number]);
  return (
    <div className="App">
      <div>Hi</div>
      <button onClick={() => setNumber(number + 1)}></button>
      <button onClick={() => setAnumber(aNumber + 1)}></button>
    </div>
  );
}
