export const makeTableStructure = (columns: number, rows: number) => {
  const table: { x: number; y: number }[][] = [];

  for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
    const row: { x: number; y: number }[] = [];

    for (let columnIndex = 0; columnIndex < columns; columnIndex++) {
      row.push({ y: rowIndex, x: columnIndex });
    }

    table.push(row);
  }

  return table;
};
