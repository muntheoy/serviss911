import React from 'react';
import styles from './Services.module.scss';
import BlockHeader from './BlockHeader';
import { SERVICES_TEXT } from '../texts';
import carIcon from '../assets/icons/car.svg';
import lockIcon from '../assets/icons/lock.svg';
import doorIcon from '../assets/icons/door.svg';


const iconMap = {
  car: carIcon,
  lock: lockIcon,
  door: doorIcon,
};

const Services = () => {
  return (
    <div className={styles.container}>
      <BlockHeader showButtons={true} title={SERVICES_TEXT.title} />
      <div className={styles.cards}>
        {SERVICES_TEXT.list.map((section, index) => (
          <ServiceSection
            key={index}
            title={section.title}
            services={section.services}
            icon={iconMap[section.icon]}
          />
        ))}
      </div>
    </div>
  );
};

const ServiceSection = ({ title, services, icon }) => (
  <div className={styles.section}>
    <div className={styles.sectionHeader}>
      {icon && <img src={icon} alt="" className={styles.sectionIcon} />}
      <p className={styles.sectionTitle}>{title}</p>
    </div>

    <div className={styles.servicesList}>
      {services.map((service, index) => (
        <React.Fragment key={index}>
          <div className={styles.serviceItem}>
            <p className={styles.serviceName}>{service.name}</p>
            <p className={styles.servicePrice}>{service.price}</p>
          </div>
          {index < services.length - 1 && <div className={styles.divider} />}
        </React.Fragment>
      ))}
    </div>
  </div>
);

export default Services;
