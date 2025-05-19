import styles from './Stats.module.scss';
import { FaClock, FaBolt, FaTools } from 'react-icons/fa'; // Импорт иконок из react-icons

const Stats = () => {
  return (
    <div className={styles.container}>
      {/* Первый блок */}
      <div className={styles.item}>
        <div className={styles.iconWrapper}>
          <FaClock className={styles.icon} />
        </div>
        <div className={styles.textWrapper}>
          <div className={styles.text}>Поможем в любое время</div>
          <div className={styles.subtext}>Работаем 24/7</div>
        </div>
      </div>
      
      <div className={styles.divider}></div>
      
      {/* Второй блок */}
      <div className={styles.item}>
        <div className={styles.iconWrapper}>
          <FaBolt className={styles.icon} />
        </div>
        <div className={styles.textWrapper}>
          <div className={styles.text}>Работаем оперативно</div>
          <div className={styles.subtext}>Приезд от 15 минут</div>
        </div>
      </div>
      
      <div className={styles.divider}></div>
      
      {/* Третий блок */}
      <div className={styles.item}>
        <div className={styles.iconWrapper}>
          <FaTools className={styles.icon} />
        </div>
        <div className={styles.textWrapper}>
          <div className={styles.text}>Чиним эффективно</div>
          <div className={styles.subtext}>Среднее время открытия 7 минут</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;