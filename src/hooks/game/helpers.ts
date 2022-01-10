import { Cell } from "../../entities/Cell";
import { DeckDimensions } from "../../entities/Deck";
import { randomInt } from "../../helpers/randomInt";

export function validateUserSequence(userSeq: Cell[], winningSeq: Cell[]) {
  if (!userSeq.length) return false;

  return userSeq.every((item, index) => {
    const target = winningSeq[index];
    return item.x === target.x && item.y === target.y;
  });
}

export function isWinned(
  userSeq: Cell[],
  winningSeq: Cell[],
  gameLength: number
): boolean {
  return (
    gameLength === userSeq.length &&
    winningSeq.length === userSeq.length &&
    validateUserSequence(userSeq, winningSeq)
  );
}

export function makeRandomCell(dimensions: DeckDimensions): Cell {
  const x = randomInt(0, dimensions.cols - 1);
  const y = randomInt(0, dimensions.rows - 1);

  return new Cell(x, y);
}
