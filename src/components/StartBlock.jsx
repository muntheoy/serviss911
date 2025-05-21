import React from 'react';
import ServiceHeader from "./ServiceHeader";
import Stats from "./Stats";
import styles from './StartBlock.module.scss';


const Services = ({}) => {
  return (
    <div className={styles.contanier}>
      <ServiceHeader/>
      <Stats/>
    </div>
  );
};

export default Services;