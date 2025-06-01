import styles from "./BlockHeader.module.scss";
import Button from "./Button";
import { BsFillTelephoneFill } from "react-icons/bs";
import { LINKS } from "../config/links";

const BlockHeader = ({ showButtons = true, title = "Оставляете заявку" }) => {
  return (
    <div className={styles.container}>
      <p>{title}</p>
      {showButtons && (
        <div className={styles.button}>
          <a
            href={LINKS.phone.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="filled"
              icon={<BsFillTelephoneFill />}
              ariaLabel="Позвонить"
              color="blue"
            >
              Позвонить
            </Button>
          </a>
        </div>
      )}
    </div>
  );
};

export default BlockHeader;
