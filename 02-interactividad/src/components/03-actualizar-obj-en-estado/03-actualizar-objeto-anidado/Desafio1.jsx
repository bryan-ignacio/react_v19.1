import { useState } from "react";

export default function Desafio1() {
  return (
    <>
      <Scoreboard />
    </>
  );
}

function Scoreboard() {
  const [player, setPlayer] = useState({
    firstName: "Ranjani",
    lastName: "Shettar",
    score: 10,
  });

  function handlePlusClick() {
    // ✅
    setPlayer({
      ...player,
      score: player.score + 1,
    });
    //estamos mutando el objeto por eso el error.
    // player.score++;
  }

  function handleFirstNameChange(e) {
    setPlayer({
      ...player,
      firstName: e.target.value,
    });
  }

  function handleLastNameChange(e) {
    // falta copiar los datos del objeto anterior por eso ocurre un error.
    setPlayer({
      ...player,
      lastName: e.target.value,
    });
  }

  return (
    <>
      <label>
        Score: <b>{player.score}</b>{" "}
        <button onClick={handlePlusClick}>+1</button>
      </label>
      <br />
      <label>
        Nombre:
        <input value={player.firstName} onChange={handleFirstNameChange} />
      </label>
      <br />
      <label>
        Apellido:
        <input value={player.lastName} onChange={handleLastNameChange} />
      </label>
    </>
  );
}
