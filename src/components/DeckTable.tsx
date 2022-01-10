import { FunctionComponent } from "react";
import { Cell } from "../entities/Cell";
import { DeckDimensions } from "../entities/Deck";
import { makeTableStructure } from "../helpers/makeTable";
import DeckCell from "./DeckCell";

interface DeckTableProps {
  dimensions: DeckDimensions;
  disabled?: boolean;
  onCellClick?: (cell: Cell) => void;
  allowClick?: boolean;
  lighten?: Cell;
}

const DeckTable: FunctionComponent<DeckTableProps> = ({
  dimensions,
  onCellClick,
  allowClick = true,
  lighten,
  disabled,
}) => {
  const shine = (cell: Cell) => {
    return lighten && lighten.y === cell.y && lighten.x === cell.x;
  };

  return (
    <table>
      <tbody>
        {makeTableStructure(dimensions.rows, dimensions.cols).map(
          (row, index) => (
            <tr key={index}>
              {row.map((cell) => (
                <td key={"c-" + cell.x + cell.y}>
                  <DeckCell
                    allowClick={allowClick}
                    disabled={disabled}
                    cell={cell}
                    onClickHandler={onCellClick}
                    shine={shine(cell)}
                  />
                </td>
              ))}
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};

export default DeckTable;
