import { FunctionComponent, useState } from "react";
import { Cell } from "../entities/Cell";

import { sleep } from "../helpers/sleep";

import styles from "../styles/DeckCell.module.scss";

interface DeckCellProps {
  cell: Cell;
  onClickHandler?: (cell: Cell) => void;
  shine?: boolean;
  disabled?: boolean;
  allowClick?: boolean;
}

const DeckCell: FunctionComponent<DeckCellProps> = ({
  cell,
  onClickHandler,
  disabled = false,
  shine = false,
  allowClick = true,
}) => {
  const [clickAnimation, setClickAnimation] = useState<boolean>(false);

  async function handleClick() {
    if (!allowClick) return;

    setClickAnimation(true);
    await sleep(350);

    if (onClickHandler) onClickHandler(cell);
  }

  function handleAnimationEnd() {
    setClickAnimation(false);
  }

  return (
    <button
      onAnimationEnd={handleAnimationEnd}
      disabled={disabled}
      className={`${styles.Cell} ${shine ? styles.CellShine : ""} ${
        clickAnimation ? styles.CellAnimate : ""
      }`}
      onClick={handleClick}
    ></button>
  );
};

export default DeckCell;
