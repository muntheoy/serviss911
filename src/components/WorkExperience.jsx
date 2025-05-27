import React from "react";
import styles from "./HowWeWork.module.scss";
import BlockHeader from './BlockHeader';
import { FiMessageSquare, FiPhone } from "react-icons/fi";
import callIcon from "../assets/icons/fluent_person-call-20-filled.svg";
import Button from "./Button";

const steps = [
  {
    stepNumber: 1,
    icon: <img src={callIcon} alt="Иконка звонка" className="card-icon" />,
    title: "Оставляете заявку",
    description: "На сайте в чате, по телефону или в Telegram",
    showButtons: true
  },
  {
    stepNumber: 2,
    icon: <img src={callIcon} alt="Иконка звонка" />,
    title: "Консультация",
    description: "Наш специалист свяжется с вами",
    showButtons: false
  },
  {
    stepNumber: 3,
    icon: <img src={callIcon} alt="Иконка звонка" />,
    title: "Выезд мастера",
    description: "Специалист выезжает в течение 30 минут",
    showButtons: false
  },
  {
    stepNumber: 4,
    icon: <img src={callIcon} alt="Иконка звонка" />,
    title: "Выполнение работы",
    description: "Вскрытие, ремонт или замена замка — по ситуации",
    showButtons: false
  }
];

const HowWeWork = () => {
  return (
    <div className={`${styles.container} ${styles.containerWithBg}`}>
      <BlockHeader showButtons={false} title="Как мы работаем" />
      <div className={styles.content}>
        {steps.map((step, index) => (
          <RequestCard
            key={index}
            stepNumber={step.stepNumber}
            icon={step.icon}
            title={step.title}
            description={step.description}
            showButtons={step.showButtons}
          />
        ))}
      </div>
    </div>
  );
};

const RequestCard = ({
  stepNumber = 1,
  icon = <FiMessageSquare size={24} />,
  title = "Оставляете заявку",
  description = "На сайте в чате, по телефону или в Telegram",
  showButtons = true
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.stepIndicator}>{stepNumber}</div>
      <div className={styles.cardContent}>
        <div className={styles.icon}>{icon}</div>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
      {showButtons && (
        <div className={styles.buttons}>
          <Button variant="icon" icon={<FiPhone />} className="primary" ariaLabel="Позвонить" />
          <Button variant="icon" icon={<FiPhone />} className="primary" ariaLabel="Позвонить" />
          <Button variant="icon" icon={<FiPhone />} className="primary" ariaLabel="Позвонить" />
        </div>
      )}
    </div>
  );
};

export default HowWeWork;
