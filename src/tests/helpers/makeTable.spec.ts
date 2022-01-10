import { makeTableStructure } from "../../helpers/makeTable";

describe("makeTableStrcture", () => {
  it("Returns table structure with correct number of row arrays", () => {
    const columnsCount = 1;
    const rowsCount = 1;

    const result = makeTableStructure(columnsCount, rowsCount);
    expect(result.length).toBe(1);

    const columnsCount2 = 3;
    const rowsCount2 = 3;

    const result2 = makeTableStructure(columnsCount2, rowsCount2);
    expect(result2.length).toBe(3);
  });

  it("Returns correct table structure from provided dimensions", () => {
    const columnsCount = 1;
    const rowsCount = 1;

    const result = makeTableStructure(columnsCount, rowsCount);
    expect(result).toEqual([[{ x: 0, y: 0 }]]);

    const columnsCount2 = 2;
    const rowsCount2 = 2;

    const result2 = makeTableStructure(columnsCount2, rowsCount2);
    expect(result2).toEqual([
      [
        { x: 0, y: 0 },
        { x: 1, y: 0 },
      ],
      [
        { x: 0, y: 1 },
        { x: 1, y: 1 },
      ],
    ]);
  });
});
