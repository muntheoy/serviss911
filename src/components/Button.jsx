import React from 'react';
import styles from './Button.module.scss';

const Button = ({
  children,
  variant = 'filled',         // 'filled' | 'outlined' | 'text' | 'icon'
  icon,                       // React-элемент (например, <FiPhone />)
  iconPosition = 'left',      // 'left' | 'right'
  onClick,
  ariaLabel,                  // для кнопки-иконки
  color,                      // цветовая тема (например, 'blue')
  size = 'default',           // 'small' | 'default' | 'large'
}) => {
  const isIconOnly = variant === 'icon';

  const classNames = [
    styles.button,
    styles[variant],
    color ? styles[color] : '',
    isIconOnly ? styles.iconOnly : '',
    size !== 'default' ? styles[size] : '',
  ].join(' ');

  return (
    <button
      className={classNames}
      onClick={onClick}
      aria-label={isIconOnly ? ariaLabel : undefined}
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
