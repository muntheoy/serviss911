import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import QuestionIcon from "../assets/icons/faq.svg";
import styles from "./FAQ.module.scss";
import BlockHeader from "./BlockHeader";
import { FAQ_TEXT } from "../texts";

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className={styles.faq}>
      <BlockHeader showButtons={false} title={FAQ_TEXT.title} />

      <div className={styles.accordionList}>
        {FAQ_TEXT.items.map((item) => (
          <div key={item.id} className={styles.accordionItem}>
            <button
              className={styles.accordionButton}
              onClick={() => toggleItem(item.id)}
              aria-expanded={openItems[item.id]}
            >
              <span className={styles.accordionQuestion}>
                <img
                  src={QuestionIcon}
                  alt=""
                  className={styles.questionIcon}
                  aria-hidden="true"
                />
                {item.question}
              </span>
              <span
                className={`${styles.accordionIcon} ${
                  openItems[item.id] ? styles.isOpen : ""
                }`}
              >
                <FaChevronDown />
              </span>
            </button>

            <div
              className={`${styles.accordionPanel} ${
                openItems[item.id] ? styles.isActive : ""
              }`}
              aria-hidden={!openItems[item.id]}
            >
              <div className={styles.accordionAnswer}>{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
