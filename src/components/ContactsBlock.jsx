import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { FaPhone, FaMapMarkerAlt, FaTelegramPlane } from "react-icons/fa";
import styles from "./ContactsBlock.module.scss";
import BlockHeader from "./BlockHeader";
import { CONTACTS_TEXT } from "../texts";
import { BsFillTelephoneFill } from "react-icons/bs";
import { LINKS } from "../config/links";
import { trackButtonClick } from "../utils/metrics";

const ContactsBlock = () => {
  const {
    title,
    phoneLabel,
    addressLabel,
    telegramLabel,
    phone,
    address,
    coordinates,
  } = CONTACTS_TEXT;

  const handleTelegramClick = () => {
    trackButtonClick(
      LINKS.telegram.handle,
      'telegram_link',
      LINKS.telegram.url,
      'contacts'
    );
  };

  return (
    <div className={styles.container}>
      <BlockHeader showButtons={false} title={title} />
      <div className={styles.content}>
        <div className={styles.info}>
          <div className={styles.row}>
            <BsFillTelephoneFill className={styles.icon} />
            <div>
              <strong>{phoneLabel}</strong>
              <br />
              <span>{phone}</span>
            </div>
          </div>

          <div className={styles.row}>
            <FaMapMarkerAlt className={styles.icon} />
            <div>
              <strong>{addressLabel}</strong>
              <br />
              <span>{address}</span>
            </div>
          </div>

          <div className={styles.row}>
            <FaTelegramPlane className={styles.icon} />
            <div>
              <strong>{telegramLabel}</strong>
              <br />
              <a 
                href={LINKS.telegram.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.telegramLink}
                onClick={handleTelegramClick}
              >
                {LINKS.telegram.handle}
              </a>
            </div>
          </div>
        </div>

        <div className={styles.mapWrapper}>
          <iframe src={`https://yandex.ru/map-widget/v1/?um=constructor%${LINKS.yandexMapId}&amp;source=constructor`} width="100%" height="100%" frameBorder="0"></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactsBlock;
