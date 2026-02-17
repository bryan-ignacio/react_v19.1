import { useRef, useState } from "react";

export default function Stopwatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);

  const intervalRef = useRef(null);

  let secondsPassed = 0;

  function handleClick() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleDetenerClick() {
    clearInterval(intervalRef.current);
  }

  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <h1>Tiempo transcurrido: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleClick}>iniciar</button>
      <button onClick={handleDetenerClick}>detener</button>
    </>
  );
}
