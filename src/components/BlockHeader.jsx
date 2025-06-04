import styles from "./BlockHeader.module.scss";
import Button from "./Button";
import { BsFillTelephoneFill } from "react-icons/bs";
import { LINKS } from "../config/links";
import { trackButtonClick } from "../utils/metrics";

const BlockHeader = ({ showButtons = true, title = "Оставляете заявку" }) => {
  const handlePhoneClick = () => {
    trackButtonClick(
      'Позвонить',
      'phone_button',
      LINKS.phone.raw,
      'header'
    );
  };

  return (
    <div className={styles.container}>
      <p>{title}</p>
      {showButtons && (
        <div className={styles.button}>
          <a
            href={LINKS.phone.tel}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handlePhoneClick}
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
