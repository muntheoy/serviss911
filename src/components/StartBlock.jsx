import React from 'react';
import Button from '../components/Button';
import { FaClock, FaBolt, FaTools } from 'react-icons/fa';
import telegramIcon from '../assets/icons/telegram.svg';
import keyIcon from '../assets/icons/key.svg';
import styles from './StartBlock.module.scss';

const Peculiarity = ({ 
  icon = <img src={keyIcon} alt="" className={styles.icon} />, 
  text 
}) => {
  return (
    <div className={styles.peculiarity}>
      <div className={styles.peculiarity__square}>
        <div className={styles.peculiarity__icon}>
          {icon}
        </div>
      </div>
      {text && <div className={styles.peculiarity__text}>{text}</div>}
    </div>
  );
};

const StartBlock = () => {
  return (
    <div className={styles.container}>
      {/* Service Header */}
      <div className={styles.serviceHeader}>
        <div className={styles.content}>
          <div>
            <h1 className={styles.title}>Вскрытие замков</h1>
            <p className={styles.subtitle}>
              Откроем замок любой сложности аккуратно и быстро.<br />
              Мы — ваш надежный выбор.
            </p>
          </div>

          <div className={styles.buttons}>
            <Button
              variant="outlined"
              icon={<img src={telegramIcon} alt="Telegram" className={styles.buttonIcon} />}
              onClick={() => window.open('https://t.me/your_telegram', '_blank')}
            >
              Написать в Telegram
            </Button>

            <Button
              variant="filled"
              onClick={() => window.location.href = 'tel:+79991234567'}
            >
              Позвонить
            </Button>
          </div>
        </div>

        <div className={styles.features}>
          <Peculiarity text="Любая сложность" />
          <Peculiarity text="Без повреждений" />
          <Peculiarity text="Замки в наличии" />
          <Peculiarity text="Сотрудничаем с МВД и МЧС" />
        </div>
      </div>

      {/* Stats */}
      <div className={styles.statsContainer}>
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
    </div>
  );
};

export default StartBlock;
