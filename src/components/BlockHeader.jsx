import styles from "./BlockHeader.module.scss";
import Button from "./Button";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FiMessageSquare, FiPhone, FiSend } from "react-icons/fi";

const BlockHeader = ({ showButtons = true, title = "Оставляете заявку" }) => {
  return (
    <div className={styles.container}>
      <p>{title}</p>
      {showButtons && (
        <div className={styles.button}>
          <Button
              variant="filled"
              icon={< BsFillTelephoneFill />}
              ariaLabel="Позвонить"
              color="blue"
            >
              Позвонить
              </Button>
        </div>
      )}
    </div>
  );
};

export default BlockHeader;