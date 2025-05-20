import React from "react";
import styles from "./RequestCard.module.scss";
import { FiMessageSquare, FiPhone, FiSend } from "react-icons/fi";
import Button from "./Button";

const RequestCard = ({
  stepNumber = 1,
  icon = <FiMessageSquare size={24} />,
  title = "Оставляете заявку",
  description = "На сайте в чате, по телефону или в Telegram",
  showButtons = true,
  buttonVariant = "filled",
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.stepIndicator}>{stepNumber}</div>

      <div className={styles.content}>
        <div className={styles.icon}>{icon}</div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>

      {showButtons && (
        <div className={styles.buttons}>

          <Button
            variant="icon"
            icon={<FiPhone />}
            className="primary" // или red/green/yellow/gray
            ariaLabel="Лайк"
          />
          <Button
            variant="icon"
            icon={<FiPhone />}
            className="primary" // или red/green/yellow/gray
            ariaLabel="Лайк"
          />
          <Button
            variant="icon"
            icon={<FiPhone />}
            className="primary" // или red/green/yellow/gray
            ariaLabel="Лайк"
          />

         
        </div>
      )}
    </div>
  );
};

export default RequestCard;
