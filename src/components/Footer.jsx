import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <footer className={styles.footer}>
        <p>
          © 2025, «М-zamok». Все права защищены. Использование любых материалов,
          размещённых на сайте, разрешается при условии ссылки на <em>m-zamok.ru</em>
        </p>
      </footer>
    </div>
  );
}
