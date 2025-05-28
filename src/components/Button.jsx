import styles from './Button.module.scss';

const Button = ({
  children,
  variant = 'filled',         
  icon,                      
  iconPosition = 'left',      
  onClick,
  ariaLabel,                 
  color,                      
  size = 'default',           
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
