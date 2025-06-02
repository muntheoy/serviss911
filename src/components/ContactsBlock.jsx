import React, { useState, useEffect } from "react";
import { FaPhone, FaMapMarkerAlt, FaTelegramPlane } from "react-icons/fa";
import styles from "./ContactsBlock.module.scss";
import BlockHeader from "./BlockHeader";
import { CONTACTS_TEXT } from "../texts";
import { BsFillTelephoneFill } from "react-icons/bs";
import { LINKS } from "../config/links";

const ContactsBlock = () => {
  const {
    title,
    phoneLabel,
    addressLabel,
    telegramLabel,
    phone,
    address,
    telegram,
  } = CONTACTS_TEXT;

  const mapId = LINKS.mapId;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const mapSrc = `https://yandex.ru/map-widget/v1/?um=constructor%3A${mapId}&amp;source=constructor`;
  const mapWidth = isMobile ? "100%" : "900";

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
          <iframe
            src={mapSrc}
            width={mapWidth}
            height="450"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactsBlock;
