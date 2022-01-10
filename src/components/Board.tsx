import { FunctionComponent, useEffect, useState } from "react";

import { DeckDimensions } from "../entities/Deck";

import ControlPanel from "./ControlPanel";
import Deck from "./Deck";
import PreviewDeck from "./PreviewDeck";
import StatusBar from "./StatusBar";
import AppModal from "./shared/Modal";
import useGame from "../hooks/geme";

import styles from "../styles/Board.module.scss";

interface BoardProps {
  initialGameLength?: number;
  initialDimensions?: DeckDimensions;
}

const Board: FunctionComponent<BoardProps> = ({
  initialGameLength = 5,
  initialDimensions = { cols: 4, rows: 4 },
}) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const {
    gameLength,
    disabled,
    userSequence,
    winningSequence,
    showSequence,
    updateUserSequence,
    changeGameLentgh,
    resetGame,
    setDisabled,
    gameFinished,
    dimensions,
  } = useGame(initialGameLength, initialDimensions);

  function handleModalConfirm() {
    setShowModal(false);
    resetGame();
  }

  useEffect(() => {
    setShowModal(gameFinished);
  }, [gameFinished]);

  return (
    <div className="container">
      <div className="board">
        <ControlPanel
          gameLength={gameLength}
          setGameLenght={changeGameLentgh}
          onGameReset={resetGame}
          disabled={disabled}
        />
        <div className={styles.DecksWrapper}>
          <div className={styles.DecksWrapperItem}>
            <div>
              <StatusBar
                filled={winningSequence.length}
                gameLength={gameLength}
              />
              <PreviewDeck
                onShowSequenceEnd={() => setDisabled(false)}
                refresh={showSequence}
                dimensions={dimensions}
                sequence={winningSequence}
                showStepsNumber={winningSequence.length}
              />
            </div>
          </div>
          <div className={styles.DecksWrapperItem}>
            <div>
              <StatusBar filled={userSequence.length} gameLength={gameLength} />
              <Deck
                onUserClick={updateUserSequence}
                dimensions={dimensions}
                disabled={disabled}
              />
            </div>
          </div>
        </div>
        {showModal ? (
          <AppModal
            title="Congrats! You Won!"
            onClose={() => setShowModal(false)}
            onConfirm={handleModalConfirm}
          >
            <p>Want to play again?</p>
          </AppModal>
        ) : null}
      </div>
    </div>
  );
};

export default Board;
