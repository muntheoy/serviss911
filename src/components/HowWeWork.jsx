import React from "react";
import styles from "./HowWeWork.module.scss";
import BlockHeader from "./BlockHeader";
import Button from "./Button";
import { FaTelegramPlane } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { PiChatCircleDotsFill } from "react-icons/pi";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { HOW_WE_WORK_TEXT } from "../texts";
import { FaShippingFast } from "react-icons/fa";
import { FaLockOpen } from "react-icons/fa6";
import { LINKS } from "../config/links";


// Массив иконок по порядку шагов
const stepIcons = [
  <BsFillTelephoneFill key="1" />,
  <PiChatCircleDotsFill key="2" />,
  <FaShippingFast key="3" />,
  <FaLockOpen key="4" />,
];

const HowWeWork = () => {
  return (
    <div className={styles.container}>
      <BlockHeader showButtons={false} title={HOW_WE_WORK_TEXT.title} />
      <div className={styles.content}>
        {HOW_WE_WORK_TEXT.steps.map((step, index) => (
          <RequestCard
            key={index}
            stepNumber={step.stepNumber}
            icon={stepIcons[index]} // 👈 иконка берётся здесь
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
  stepNumber,
  icon,
  title,
  description,
  showButtons,
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
           <a
                        href={LINKS.telegram.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
            variant="icon"
            color="blue"
            icon={<FaTelegramPlane />}
            ariaLabel={HOW_WE_WORK_TEXT.buttonAriaLabel}
            onClick={() => console.log("Telegram")}
          />
                      </a>
          
          <Button
            variant="icon"
            color="primary-500"
            icon={<PiChatCircleDotsFill />}
            ariaLabel={HOW_WE_WORK_TEXT.buttonAriaLabel}
            onClick={() => console.log("Чат")}
          />
          <a
                        href={LINKS.phone.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                         <Button
            variant="icon"
            color="secondary-500"
            icon={<BsFillTelephoneFill />}
            ariaLabel={HOW_WE_WORK_TEXT.buttonAriaLabel}
            onClick={() => console.log("Звонок")}
          />
                      </a>
         
        </div>
      )}
    </div>
  );
};

export default HowWeWork;
