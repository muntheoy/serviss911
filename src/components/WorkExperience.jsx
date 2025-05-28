import React from 'react';
import styles from './WorkExperience.module.scss';
import BlockHeader from './BlockHeader';

const mechanismsData = [
  {
    title: "CISA (Италия)",
    description: "Высоконадежные замки с защитой от взлома и перепикирования"
  },
  {
    title: "KALE (Турция)",
    description: "Доступные и качественные системы для металлических дверей"
  },
  {
    title: "MOTTURA (Италия)",
    description: "Премиальные замки с многоуровневой защитой"
  },
  {
    title: "ABLOY (Финляндия)",
    description: "Инновационные дисковые механизмы высокой секретности"
  }
];

const WorkExperience = () => {
  return (
    <div className={styles.container}>
      <BlockHeader showButtons={true} title="Опыт работы" />
      <div className={styles.cards}>
        <ExperienceCard mainTitle="Цилиндровые механизмы" mechanisms={mechanismsData} />
        <ExperienceCard mainTitle="Цилиндровые механизмы" mechanisms={mechanismsData} />
        <ExperienceCard mainTitle="Цилиндровые механизмы" mechanisms={mechanismsData} />
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
