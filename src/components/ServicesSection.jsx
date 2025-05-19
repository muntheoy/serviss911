// ServicesSection.jsx
import React from 'react';
import styles from './ServicesSection.module.scss';

const ServicesSection = ({ title, services, icon }) => {
  return (
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
            {index < services.length - 1 && (
              <div className={styles.divider} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;