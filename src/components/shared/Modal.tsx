import { FunctionComponent } from "react";

import AppButton from "./Button";

import styles from "../../styles/Modal.module.scss";

interface AppModalProps {
  title?: string;
  onClose?: () => void;
  onConfirm?: () => void;
}

const AppModal: FunctionComponent<AppModalProps> = ({
  title = "",
  children,
  onClose,
  onConfirm,
}) => {
  return (
    <div className={styles.ModalOverlay}>
      <div className={styles.Modal}>
        <header>
          <h3>{title}</h3>
        </header>

        <div className={styles.ModalBody}>{children}</div>

        <footer>
          <AppButton onClick={onClose}>Close</AppButton>
          <AppButton onClick={onConfirm}>Start new game</AppButton>
        </footer>
      </div>
    </div>
  );
};

export default AppModal;
