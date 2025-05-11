import React from 'react';
import styles from '../components/Button.module.scss';
import { FiArrowRight, FiHeart } from 'react-icons/fi'; // Пример иконок

const Button = ({
  children,       // Текст кнопки
  variant = 'filled', // 'filled' | 'outlined' | 'text' | 'icon'
  icon,          // Иконка (React-компонент)
  iconPosition = 'left', // 'left' | 'right'
  onClick,
  ariaLabel,     // Для кнопки-иконки (доступность)
}) => {
  // Если variant = 'icon', то children игнорируется
  const isIconOnly = variant === 'icon';
  
  return (
    <button
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
      aria-label={isIconOnly ? ariaLabel : undefined}
    >
      {/* Иконка слева */}
      {icon && iconPosition === 'left' && (
        <span className={styles.iconLeft}>{icon}</span>
      )}

      {/* Текст (если не кнопка-иконка) */}
      {!isIconOnly && children}

      {/* Иконка справа */}
      {icon && iconPosition === 'right' && (
        <span className={styles.iconRight}>{icon}</span>
      )}
    </button>
  );
};

export default Button;