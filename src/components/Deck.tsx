import { FunctionComponent } from "react";
import { DeckDimensions } from "../entities/Deck";
import { Cell } from "../entities/Cell";

import DeckTable from "./DeckTable";

import styles from "../styles/Deck.module.scss";

interface DeckProps {
  onUserClick: (cell: Cell) => void;
  dimensions: DeckDimensions;
  disabled?: boolean;
}

const Deck: FunctionComponent<DeckProps> = ({
  onUserClick,
  dimensions,
  disabled = false,
}) => {
  const handleCellClick = (cell: Cell) => {
    if (disabled) return;
    onUserClick(cell);
  };

  return (
    <div className={styles.Deck}>
      <DeckTable
        allowClick={true}
        dimensions={dimensions}
        disabled={disabled}
        onCellClick={handleCellClick}
      />
    </div>
  );
};

export default Deck;
