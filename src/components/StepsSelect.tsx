import { FunctionComponent } from "react";

import AppSelect from "./shared/Select";

import styles from "../styles/StepSelect.module.scss";

interface StepsSelectProps {
  defaultValue: number;
  onChange: (gameLength: string) => void;
}

const StepsSelect: FunctionComponent<StepsSelectProps> = ({
  onChange,
  defaultValue,
}) => {
  const steps = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  const handleValueChange = (v: string) => {
    onChange(v);
  };

  return (
    <div className={styles.StepSelectWrapper}>
      <label htmlFor="steps">Choose game length</label>
      <AppSelect
        onChange={(e) => handleValueChange(e)}
        name="game-length"
        id="game-length"
        options={steps}
        initialValue={defaultValue.toString()}
      />
    </div>
  );
};

export default StepsSelect;
