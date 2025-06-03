import React from 'react';
import styles from './WorkExperience.module.scss';
import BlockHeader from './BlockHeader';
import { WORK_EXPERIENCE_TEXT } from '../texts'; 

const WorkExperience = () => {
  return (
    <div className={styles.container}>
      <BlockHeader showButtons={false} title={WORK_EXPERIENCE_TEXT.title} />
      <div className={styles.cards}>
        {WORK_EXPERIENCE_TEXT.cards.map((card, index) => (
          <ExperienceCard
            key={index}
            mainTitle={card.mainTitle}
            mechanisms={card.mechanisms}
          />
        ))}
      </div>
    </div>
  );
};

const ExperienceCard = ({ mainTitle, mechanisms }) => (
  <div className={styles.card}>
    <h2 className={styles.mainTitle}>{mainTitle}</h2>
    <div className={styles.mechanismsGrid}>
      {mechanisms.map((mechanism, index) => (
        <div key={index} className={styles.mechanismCard}>
          <p className={styles.cardTitle}>{mechanism.title}</p>
          <p className={styles.cardDescription}>{mechanism.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default WorkExperience;
