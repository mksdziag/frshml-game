import { Cell } from "../../../entities/Cell";
import { DeckDimensions } from "../../../entities/Deck";
import {
  isWinned,
  makeRandomCell,
  validateUserSequence,
} from "../../../hooks/geme/helpers";

describe("Game Helpers", () => {
  it("Validates empty sequence with false result", () => {
    const userSeq: Cell[] = [];
    const targetSeq: Cell[] = [{ x: 1, y: 2 }];

    const result = validateUserSequence(userSeq, targetSeq);

    expect(result).toBe(false);
  });

  it("Validates correct user sequence with correct result", () => {
    const userSeq: Cell[] = [{ x: 1, y: 2 }];
    const targetSeq: Cell[] = [{ x: 1, y: 2 }];

    const userSeq2: Cell[] = [
      { x: 1, y: 2 },
      { x: 4, y: 3 },
      { x: 3, y: 3 },
    ];
    const targetSeq2: Cell[] = [
      { x: 1, y: 2 },
      { x: 4, y: 3 },
      { x: 3, y: 3 },
    ];

    const result1 = validateUserSequence(userSeq, targetSeq);
    const result2 = validateUserSequence(userSeq2, targetSeq2);

    expect(result1).toBe(true);
    expect(result2).toBe(true);
  });

  it("Validates incorrect user sequence properly", () => {
    const userSeq: Cell[] = [{ x: 0, y: 0 }];
    const targetSeq: Cell[] = [{ x: 1, y: 2 }];

    const userSeq2: Cell[] = [
      { x: 1, y: 2 },
      { x: 4, y: 3 },
      { x: 1, y: 0 },
    ];
    const targetSeq2: Cell[] = [
      { x: 1, y: 2 },
      { x: 4, y: 3 },
      { x: 3, y: 3 },
    ];

    const result1 = validateUserSequence(userSeq, targetSeq);
    const result2 = validateUserSequence(userSeq2, targetSeq2);

    expect(result1).toBe(false);
    expect(result2).toBe(false);
  });

  it("Validates shorter correct sequence as valid", () => {
    const userSeq: Cell[] = [{ x: 0, y: 0 }];
    const targetSeq: Cell[] = [
      { x: 0, y: 0 },
      { x: 1, y: 2 },
    ];

    const userSeq2: Cell[] = [
      { x: 1, y: 2 },
      { x: 4, y: 3 },
    ];
    const targetSeq2: Cell[] = [
      { x: 1, y: 2 },
      { x: 4, y: 3 },
      { x: 3, y: 3 },
    ];

    const result1 = validateUserSequence(userSeq, targetSeq);
    const result2 = validateUserSequence(userSeq2, targetSeq2);

    expect(result1).toBe(true);
    expect(result2).toBe(true);
  });
});

describe("isWinned", () => {
  it("Returns false if userSequance length is different than game length", () => {
    const userSeq: Cell[] = [];
    const targetSeq: Cell[] = [{ x: 1, y: 2 }];
    const gameLength = 1;

    const userSeq2: Cell[] = [
      { x: 1, y: 2 },
      { x: 4, y: 3 },
    ];
    const targetSeq2: Cell[] = [
      { x: 1, y: 2 },
      { x: 4, y: 3 },
      { x: 3, y: 3 },
    ];
    const gameLength2 = 3;

    const result = isWinned(userSeq, targetSeq, gameLength);
    const result2 = isWinned(userSeq2, targetSeq2, gameLength2);

    expect(result).toBe(false);
    expect(result2).toBe(false);
  });

  it("Returns false if userSequance is incorrect", () => {
    const userSeq: Cell[] = [
      { x: 1, y: 3 },
      { x: 4, y: 3 },
      { x: 3, y: 3 },
    ];
    const targetSeq: Cell[] = [
      { x: 1, y: 2 },
      { x: 4, y: 3 },
      { x: 3, y: 3 },
    ];
    const gameLength = 3;

    const userSeq2: Cell[] = [
      { x: 1, y: 3 },
      { x: 1, y: 1 },
    ];
    const targetSeq2: Cell[] = [
      { x: 0, y: 0 },
      { x: 4, y: 3 },
    ];
    const gameLength2 = 2;

    const result = isWinned(userSeq, targetSeq, gameLength);
    const result2 = isWinned(userSeq2, targetSeq2, gameLength2);

    expect(result).toBe(false);
    expect(result2).toBe(false);
  });

  it("Returns true if userSequance is correct", () => {
    const userSeq: Cell[] = [
      { x: 1, y: 2 },
      { x: 4, y: 3 },
      { x: 3, y: 3 },
    ];
    const targetSeq: Cell[] = [
      { x: 1, y: 2 },
      { x: 4, y: 3 },
      { x: 3, y: 3 },
    ];
    const gameLength = 3;

    const userSeq2: Cell[] = [
      { x: 0, y: 0 },
      { x: 4, y: 3 },
    ];
    const targetSeq2: Cell[] = [
      { x: 0, y: 0 },
      { x: 4, y: 3 },
    ];
    const gameLength2 = 2;

    const result = isWinned(userSeq, targetSeq, gameLength);
    const result2 = isWinned(userSeq2, targetSeq2, gameLength2);

    expect(result).toBe(true);
    expect(result2).toBe(true);
  });
});

describe("makeRandomCell", () => {
  it("Returns random cell in correct boundary", () => {
    const dimensions: DeckDimensions = { rows: 1, cols: 1 };
    const cell: Cell = makeRandomCell(dimensions);

    expect(cell).toEqual({ x: 0, y: 0 });

    const dimensions2: DeckDimensions = { rows: 3, cols: 3 };
    const cell2: Cell = makeRandomCell(dimensions2);

    expect(cell2.x).not.toBeGreaterThan(2);
    expect(cell2.y).not.toBeGreaterThan(2);

    const dimensions3: DeckDimensions = { rows: 5, cols: 5 };
    const cell3: Cell = makeRandomCell(dimensions3);

    expect(cell3.x).not.toBeGreaterThan(4);
    expect(cell3.y).not.toBeGreaterThan(4);
  });
});
