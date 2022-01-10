import { FunctionComponent } from "react";

import styles from "../../styles/Button.module.scss";

interface AppButtonProps {
  onClick?: () => void;
  disabled?: boolean;
}

const AppButton: FunctionComponent<AppButtonProps> = ({
  children,
  onClick,
  disabled = false,
}) => {
  return (
    <button className={styles.AppButton} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default AppButton;
