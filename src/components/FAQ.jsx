// FAQ.jsx
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import QuestionIcon from '../assets/icons/faq.svg'; // Путь к вашей SVG-иконке
import styles from './FAQ.module.scss';
import BlockHeader from './BlockHeader';

const FAQ = () => {
  const FAQ_ITEMS = [
    {
      id: 1,
      question: "Какова стоимость ваших услуг?",
      answer: "Стоимость услуг зависит от типа замка, сложности работ и времени суток. Базовая стоимость вскрытия начинается от 1500 рублей для простых замков."
    },
    {
      id: 2,
      question: "Какие замки вы обслуживаете?",
      answer: "Мы работаем со всеми типами замков: цилиндровые, сувальдные, электронные и другие."
    },
    {
      id: 3,
      question: "Какие гарантии вы предоставляете?",
      answer: "Мы гарантируем качественное выполнение работ без повреждений. В случае возникновения проблем - устраним их за свой счет."
    },
    {
      id: 4,
      question: "Какие гарантии вы предоставляете?",
      answer: "Мы гарантируем качественное выполнение работ без повреждений. В случае возникновения проблем - устраним их за свой счет."
    },
    {
      id: 5,
      question: "Какие гарантии вы предоставляете?",
      answer: "Мы гарантируем качественное выполнение работ без повреждений. В случае возникновения проблем - устраним их за свой счет."
    },
    {
      id: 6,
      question: "Какие гарантии вы предоставляете?",
      answer: "Мы гарантируем качественное выполнение работ без повреждений. В случае возникновения проблем - устраним их за свой счет."
    }
  ];

  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section className={styles.faq}>
      <BlockHeader
        showButtons={true}
        title={"Популярные вопросы"}
      />
      
      <div className={styles.accordionList}>
        {FAQ_ITEMS.map(item => (
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
              <span className={`${styles.accordionIcon} ${openItems[item.id] ? styles.isOpen : ''}`}>
                <FaChevronDown />
              </span>
            </button>
            
            <div 
              className={`${styles.accordionPanel} ${openItems[item.id] ? styles.isActive : ''}`}
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