import React, { useContext } from "react";
import { AppContext } from "../App";

function GameOver() {
  const {
    board,
    setBoard,
    currAttempt,
    gameOver,
    onSelectLetter,
    correctWord,
    onDelete,
  } = useContext(AppContext);
  let rettOrd = correctWord.toUpperCase()
  return (
    <div className="gameOver">
      <h3>
        {gameOver.guessedWord
          ? "Detta gikk jo heftig greit"
          : "Nå feila du noe hefti 😳 "}
      </h3>
      <h1>Rekti ord e {rettOrd}</h1>
      {gameOver.rettOrd && (
        <h3>You guessed in {currAttempt.attempt} attempts</h3>
      )}
    </div>
  );
}

export default GameOver;