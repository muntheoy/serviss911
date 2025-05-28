import styles from "./AboutUsBlock.module.scss";
import locksmithImage from "../assets/img/lockmaster.png"; 
import BlockHeader from "./BlockHeader";

const AboutUsBlock = () => {
  return (
    <section className={styles.aboutContainer}>
       <BlockHeader showButtons={false} title="О нас" />
      <div className={styles.content}>
       
        <div className={styles.description}>
          <p>
            Мы — команда профессиональных мастеров по замкам с богатым опытом работы в сфере замочных систем и безопасности. Мы быстро и без повреждений решаем любые проблемы с замками. Нас выбирают не только жители города, но и такие организации, как МЧС и МВД, благодаря нашему профессионализму и надежности.
          </p>
          <p>
            Мы гордимся тем, что за годы работы завоевали доверие множества клиентов благодаря нашему профессионализму, оперативности и индивидуальному подходу к каждой ситуации.
          </p>
        </div>
        <div className={styles.imageWrapper}>
        <img src={locksmithImage} alt="Мастер открывает замок" />
      </div>
      </div>
      
    </section>
  );
};

export default AboutUsBlock;
