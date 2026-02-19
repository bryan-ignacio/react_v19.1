import { useRef, useState } from "react";

export default function Stopwatch() {
  // estados que mantendran informacion entre renderizaciones.

  // iniciarTiempo
  const [startTime, setStartTime] = useState(null);
  // tiempoActual
  const [now, setNow] = useState(null);
  // guardamos la funcion intervalo.
  const intervalRef = useRef(null);

  // variable que se actualiza cada vez que se renderiza el componente.
  let secondsPassed = 0;

  function handleIniciarClick() {
    //llamamos a nuestro estado para guardar la informacion del
    // Tiempo al iniciar le asignamos el tiempo actual en milisegundos
    setStartTime(Date.now());
    // tiempo actual le asignamos el tiempo actual en milisegundos
    setNow(Date.now());

    // AL LLAMAR UN CLEARINTERVAL() ANTES DE INICIAR UN NUEVO INTERVALO, NOS ASEGURAMOS DE QUE NO HAYA NINGUN INTERVALO ANTERIOR EJECUTANDOSE.
    // ES UNA BUENA PRACTICA PARA EVITAR QUE SE INICIEN MULTIPLES INTERVALOS SIMULTANEAMENTE, LO QUE PODRIA CAUSAR COMPORTAMIENTOS INDESEADOS O CONSUMO EXCESIVO DE RECURSOS.

    // Si no se detiene el intervalo anterior, cada vez que se haga clic en el botón de iniciar, se creará un nuevo intervalo sin detener el anterior. Esto puede llevar a que múltiples intervalos estén ejecutándose al mismo tiempo, lo que puede causar problemas de rendimiento y resultados inesperados.

    // esta funcion detiene la ejecucion repetitiva de una tarea que
    // fue iniciada con setInterval()
    // cancela un intervalo que se esta ejecutando continuamente.
    clearInterval(intervalRef.current);

    // setInterval() ejecuta una funcion cada cierto numero de milisegundos.
    intervalRef.current = setInterval(() => {
      // cada cierto tiempo actualizara el tiempo actual
      setNow(Date.now());
    }, 10);
  }

  function handleDetenerClick() {
    //detiene el intervalo y la variable de estado se queda en ese tiempo.
    clearInterval(intervalRef.current);
  }

  // si startTime y now no son nulos,
  //  se calcula el tiempo transcurrido en segundos dividiendo
  //  la diferencia entre now y startTime por 1000 (para convertir de milisegundos a segundos).
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <h1>Tiempo transcurrido: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleIniciarClick}>{"iniciar"}</button>
      <button onClick={handleDetenerClick}>{"detener"}</button>
    </>
  );
}

/*
Cuando una pieza de información solo se necesita en los controladores de eventos y no requiere un rerenderizado, usar una ref quizás sea más eficiente.
*/
