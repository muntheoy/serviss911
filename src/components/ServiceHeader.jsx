import React from 'react';
import Button from '../components/Button';
import Peculiarity from '../components/Peculiarity';
import styles from './ServiceHeader.module.scss';
import telegramIcon from '../assets/icons/telegram.svg';

const ServiceHeader = () => {
  return (
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
  );
};

export default ServiceHeader;