import styles from "./Header.module.scss";
import { FaPhone, FaTelegramPlane } from "react-icons/fa";
import Button from "./Button";
import { HEADER_TEXT } from "../texts";
import { BsFillTelephoneFill } from "react-icons/bs";
import { LINKS } from "../config/links";

export default function Header() {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    const header = document.querySelector(`.${styles.header}`);

    if (element && header) {
      const offset = -header.offsetHeight - 60;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + offset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <button
          className={styles.logoButton}
          onClick={() => handleScroll("start")}
        >
          {HEADER_TEXT.logo}
        </button>
      </div>

      <nav className={styles.nav}>
        {HEADER_TEXT.sections.map(({ id, label }) => (
          <button
            key={id}
            className={styles.navItem}
            onClick={() => handleScroll(id)}
          >
            {label}
          </button>
        ))}
      </nav>

      <div className={styles.right}>
        <a href={LINKS.telegram.url} target="_blank" rel="noopener noreferrer">
          <Button
            variant="icon"
            color="blue"
            icon={<FaTelegramPlane />}
            ariaLabel={HEADER_TEXT.ariaLabelCall}
            onClick={() => console.log("Telegram")}
          />
        </a>

        <a
          href={LINKS.phone.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="filled"
            color="primary-500"
            icon={<BsFillTelephoneFill />}
            ariaLabel={HEADER_TEXT.ariaLabelCall}
            onClick={() => console.log("Звонок")}
          >
            <span className={styles.phoneNumberText}>
              {HEADER_TEXT.phoneNumber}
            </span>
          </Button>
        </a>
      </div>
    </header>
  );
}
