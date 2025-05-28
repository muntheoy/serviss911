import styles from './Header.module.scss';
import { FaPhone, FaTelegramPlane } from 'react-icons/fa';

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
  if (element) {
    const offset = -100; // поднимаем на 100px выше
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
        <button className={`${styles.iconButton} ${styles.telegram}`}>
          <FaTelegramPlane />
        </button>
        <button className={styles.callButton}>
          <FaPhone />
          <span>+7 800 555-35-35</span>
        </button>
      </div>
    </header>
  );
}
