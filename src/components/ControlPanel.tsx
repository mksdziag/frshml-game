import { FunctionComponent } from "react";

import AppButton from "./shared/Button";
import StepsSelect from "./StepsSelect";

import styles from "../styles/ControlPanel.module.scss";

interface ControlPanelProps {
  setGameLenght: (val: string) => void;
  onGameReset: () => void;
  gameLength: number;
  disabled: boolean;
}

const ControlPanel: FunctionComponent<ControlPanelProps> = ({
  setGameLenght,
  onGameReset,
  gameLength,
  disabled,
}) => {
  return (
    <div className={styles.ControlPanel}>
      <div className={styles.ControlPanelActions}>
        <AppButton disabled={disabled} onClick={onGameReset}>
          ResetGame
        </AppButton>
      </div>
      <StepsSelect
        defaultValue={gameLength}
        onChange={(val: string) => setGameLenght(val)}
      />
    </div>
  );
};

export default ControlPanel;
