import { FunctionComponent } from "react";

import styles from "../styles/StatusBar.module.scss";

interface StatusBarProps {
  filled: number;
  gameLength: number;
}

const StatusBar: FunctionComponent<StatusBarProps> = ({
  filled,
  gameLength,
}) => {
  return (
    <div className={styles.StatusBar}>
      <ul>
        {Array(gameLength)
          .fill(null)
          .map((_item, i) => (
            <li
              key={i}
              className={`${styles.StatusBar} ${
                filled >= i + 1 ? styles.success : null
              }`}
            />
          ))}
      </ul>
    </div>
  );
};

export default StatusBar;
