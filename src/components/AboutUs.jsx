import styles from "./AboutUsBlock.module.scss";
import locksmithImage from "../assets/img/lockmaster.png"; 
import BlockHeader from "./BlockHeader";
import { ABOUT_US_TEXT } from "../texts"; // или '../constants/texts'

const AboutUsBlock = () => {
  return (
    <section className={styles.aboutContainer}>
      <BlockHeader showButtons={false} title={ABOUT_US_TEXT.title} />
      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          <img src={locksmithImage} alt={ABOUT_US_TEXT.imageAlt} />
        </div>
        <div className={styles.description}>
          {ABOUT_US_TEXT.paragraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsBlock;
