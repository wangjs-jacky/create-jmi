import { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);
  const a = number;
  return (
    <>
      <h1>{a}</h1>
      <button onClick={() => {
        setNumber(a + 1);
        setNumber(a + 1);
        setNumber(a + 1);
      }}>+3</button>
    </>
  )
}