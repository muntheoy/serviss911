import styles from './Header.module.scss';
import { FaPhone, FaTelegramPlane } from 'react-icons/fa';
import Button from "./Button";

const sections = [
  { id: 'services', label: 'Услуги' },
  { id: 'how', label: 'Как мы работаем' },
  { id: 'about', label: 'О нас' },
  { id: 'experience', label: 'Опыт работы' },
  { id: 'faq', label: 'FAQ' },
  { id: 'reviews', label: 'Отзывы' },
  { id: 'contacts', label: 'Контакты' },
];

export default function Header() {
  const handleScroll = (id) => {
  const element = document.getElementById(id);
  const header = document.querySelector(`.${styles.header}`);

  if (element && header) {
    const offset = -header.offsetHeight - 60; 
    const y = element.getBoundingClientRect().top + window.pageYOffset + offset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  }
};
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <button className={styles.logoButton} onClick={() => handleScroll('start')}>
          Сервис замков
        </button>
      </div>

      <nav className={styles.nav}>
        {sections.map(({ id, label }) => (
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
        <Button
            variant="icon"
            color="blue"
            icon={<FaTelegramPlane />}
            ariaLabel="Позвонить"
            onClick={() => console.log("Звонок")}
          />
          <Button
            variant="filled"
            color="primary-500"
            icon={<FaPhone />}
            ariaLabel="Позвонить"
            onClick={() => console.log("Звонок")}
          >
            +7 800 555-35-35
            </Button>

      </div>
    </header>
  );
}
