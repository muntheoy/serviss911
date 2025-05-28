import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { FaPhone, FaMapMarkerAlt, FaTelegramPlane } from "react-icons/fa";
import styles from "./ContactsBlock.module.scss";
import BlockHeader from "./BlockHeader";

const ContactsBlock = ({
  coordinates = [55.030199, 73.269487],
  address = "г. Новосибирск, ул. Красный проспект, д. 12, офис 5",
  phone = "+7 800 555-35-35",
  telegram = "@LockServiceNovosibirsk",
}) => {
  return (
    <div className={styles.container}>
      <BlockHeader showButtons={false} title="Контакты" />
      <div className={styles.content}>
        <div className={styles.info}>
          <div className={styles.row}>
            <FaPhone className={styles.icon} />
            <div>
              <strong>Телефон</strong>
              <br />
              <span>{phone}</span>
            </div>
          </div>

          <div className={styles.row}>
            <FaMapMarkerAlt className={styles.icon} />
            <div>
              <strong>Адрес</strong>
              <br />
              <span>{address}</span>
            </div>
          </div>

          <div className={styles.row}>
            <FaTelegramPlane className={styles.icon} />
            <div>
              <strong>Telegram</strong>
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
                  iconColor: "#2A3F54", // Цвет пина — например, красный
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
