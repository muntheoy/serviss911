import React from "react";
import styles from './Button.module.scss';
import { trackButtonClick } from "../utils/metrics";

const Button = ({
  children,
  variant = 'filled',         
  icon,                      
  iconPosition = 'left',      
  onClick,
  ariaLabel,                 
  color = 'primary-500',
  size = 'medium',           
  className = '',
  ...props
}) => {
  const isIconOnly = variant === 'icon';

  const classNames = [
    styles.button,
    styles[variant],
    styles[color],
    isIconOnly ? styles.iconOnly : '',
    size !== 'default' ? styles[size] : '',
    className,
  ].join(' ');

  const handleClick = (e) => {
    // Отслеживаем клик
    trackButtonClick(
      children?.toString() || ariaLabel || 'Button',
      'button',
      props.href
    );
    
    // Вызываем оригинальный onClick, если он есть
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      className={classNames}
      onClick={handleClick}
      aria-label={isIconOnly ? ariaLabel : undefined}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <span className={styles.iconLeft}>{icon}</span>
      )}
      {!isIconOnly && children}
      {icon && iconPosition === 'right' && (
        <span className={styles.iconRight}>{icon}</span>
      )}
    </button>
  );
};

export default Button;
