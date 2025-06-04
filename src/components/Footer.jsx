import styles from './Footer.module.scss';
import { FOOTER_TEXT } from '../texts';

export default function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <footer className={styles.footer}>
        <p>
          {FOOTER_TEXT.copyright} <em>{FOOTER_TEXT.site}</em>
        </p>
      </footer>
    </div>
  );
}
