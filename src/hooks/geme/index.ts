import { useEffect, useState } from "react";
import { Cell } from "../../entities/Cell";
import { DeckDimensions } from "../../entities/Deck";
import { isWinned, makeRandomCell, validateUserSequence } from "./helpers";

export default function useGame(length: number, dimensions: DeckDimensions) {
  const [gameFinished, setGameFinished] = useState<boolean>(false);
  const [gameLength, setGameLength] = useState<number>(length);

  const [winningSequence, setWinningSequence] = useState<Cell[]>([
    makeRandomCell(dimensions),
  ]);
  const [userSequence, setUserSequence] = useState<Cell[]>([]);
  const [showSequence, setShowSequence] = useState<number>(0);
  const [disabled, setDisabled] = useState<boolean>(false);

  function playSequence() {
    setDisabled(true);
    setShowSequence((prev) => prev + 1);
  }

  const resetGame = () => {
    setWinningSequence([makeRandomCell(dimensions)]);
    setUserSequence([]);
    setGameFinished(false);
    playSequence();
  };

  function changeGameLentgh(length: string) {
    setGameLength(+length);
    resetGame();
  }

  function updateUserSequence(cell: Cell) {
    setUserSequence((prev) => [...prev, cell]);
  }

  useEffect(() => {
    if (!userSequence.length) return;

    if (!validateUserSequence(userSequence, winningSequence)) {
      setUserSequence([]);
      playSequence();
      return;
    }

    if (isWinned(userSequence, winningSequence, gameLength)) {
      setGameFinished(true);
      return;
    }

    if (userSequence.length === winningSequence.length) {
      setWinningSequence((prev) => [...prev, makeRandomCell(dimensions)]);
      setUserSequence([]);
      playSequence();
    }
  }, [userSequence]);

  return {
    gameLength,
    disabled,
    userSequence,
    winningSequence,
    showSequence,
    updateUserSequence,
    changeGameLentgh,
    resetGame,
    playSequence,
    setUserSequence,
    setWinningSequence,
    setDisabled,
    gameFinished,
    dimensions,
  };
}
