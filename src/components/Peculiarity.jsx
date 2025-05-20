import React from 'react';
import styles from './Peculiarity.module.scss';
import keyIcon from '../assets/icons/key.svg';


const Peculiarity = ({ 
  icon = <img src={keyIcon} alt="" className={styles.icon} />, 
  text 
}) => {
  return (
    <div className={styles.peculiarity}>
      <div className={styles.peculiarity__square}>
        <div className={styles.peculiarity__icon}>
          {icon}
        </div>
      </div>
      {text && <div className={styles.peculiarity__text}>{text}</div>}
    </div>
  );
};

export default Peculiarity;