import { FunctionComponent, useCallback, useEffect, useState } from "react";
import { Cell } from "../entities/Cell";
import { DeckDimensions } from "../entities/Deck";
import { sleep } from "../helpers/sleep";
import styles from "../styles/PreviewDeck.module.scss";
import DeckTable from "./DeckTable";

interface PreviewDeckProps {
  dimensions: DeckDimensions;
  sequence: Cell[];
  refresh: number;
  showStepsNumber: number;
  onShowSequenceEnd: () => void;
}

const PreviewDeck: FunctionComponent<PreviewDeckProps> = ({
  dimensions,
  sequence,
  refresh,
  showStepsNumber = 1,
  onShowSequenceEnd,
}) => {
  const [lightenCell, setLightenCell] = useState<Cell | undefined>();

  async function showSequence() {
    for (let i = 0; i <= showStepsNumber; i++) {
      setLightenCell(sequence[i]);
      await sleep(500);

      setLightenCell(undefined);
      await sleep(50);
    }

    setLightenCell(undefined);
    onShowSequenceEnd();
  }

  useEffect(() => {
    showSequence();
  }, [refresh]);

  return (
    <div className={styles.PreviewDeck}>
      <DeckTable
        allowClick={false}
        dimensions={dimensions}
        lighten={lightenCell}
      />
    </div>
  );
};

export default PreviewDeck;
