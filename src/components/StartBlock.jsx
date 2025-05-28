import React from "react";
import Button from "../components/Button";
import keyIcon from "../assets/icons/key.svg";
import styles from "./StartBlock.module.scss";
import { BsFillTelephoneFill } from "react-icons/bs";
import { TbHours24 } from "react-icons/tb";
import { FaTruckFast } from "react-icons/fa6";
import { FaPhone, FaTelegramPlane } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { LINKS } from '../config/links';

const Peculiarity = ({ icon = <img src={keyIcon} alt="" />, text }) => {
  return (
    <div className={styles.peculiarity}>
      <div className={styles.peculiarity__square}>
        <div className={styles.peculiarity__icon}>{icon}</div>
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
            <h1 className={styles.title}>
              <span>Вскрытие замков</span>

              <span>в Екатеринбурге</span>
            </h1>
            <p className={styles.subtitle}>
              Откроем замок любой сложности аккуратно и быстро.
              <br />
              Мы — ваш надежный выбор.
            </p>
          </div>

          <div className={styles.buttons}>
            <a href={LINKS.telegram.url} target="_blank" rel="noopener noreferrer">
  <Button
    variant="outlined"
    icon={<FaTelegramPlane />}
    ariaLabel="Написать в Telegram"
    color="blue"
  >
    Написать в Telegram
  </Button>
</a>

            <Button
              variant="filled"
              icon={<BsFillTelephoneFill />}
              ariaLabel="Позвонить"
              color="blue"
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
            <TbHours24 className={styles.icon} />
          </div>
          <div className={styles.textWrapper}>
            <div className={styles.text}>Поможем в любое время</div>
            <div className={styles.subtext}>Работаем 24/7</div>
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.iconWrapper}>
            <FaTruckFast className={styles.icon} />
          </div>
          <div className={styles.textWrapper}>
            <div className={styles.text}>Работаем оперативно</div>
            <div className={styles.subtext}>Приезд от 15 минут</div>
          </div>
        </div>

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
