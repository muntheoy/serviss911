import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { FaPhone, FaMapMarkerAlt, FaTelegramPlane } from "react-icons/fa";
import styles from "./ContactsBlock.module.scss";
import BlockHeader from "./BlockHeader";
import { CONTACTS_TEXT } from "../texts";
import { BsFillTelephoneFill } from "react-icons/bs";

const ContactsBlock = () => {
  const {
    title,
    phoneLabel,
    addressLabel,
    telegramLabel,
    phone,
    address,
    telegram,
    coordinates,
  } = CONTACTS_TEXT;

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
              <span>{telegram}</span>
            </div>
          </div>
        </div>

        <div className={styles.mapWrapper}>
          <YMaps>
            <Map
              defaultState={{ center: coordinates, zoom: 16 }}
              width="100%"
              height="100%"
            >
              <Placemark
                geometry={coordinates}
                options={{
                  iconColor: "#2A3F54",
                }}
              />
            </Map>
          </YMaps>
        </div>
      </div>
    </div>
  );
};

export default ContactsBlock;
