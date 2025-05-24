// CylinderMechanisms.jsx
import React from 'react';
import styles from './WorkExperienceCard.module.scss';

const WorkExperienceCard = ({ mainTitle, mechanisms }) => {
  return (
    <div className={styles.container}>
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
};

export default WorkExperienceCard;