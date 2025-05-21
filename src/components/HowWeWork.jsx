import styles from "./Block.module.scss";
import BlockHeader from './BlockHeader';
import RequestCard from './RequestCard';
import callIcon from "../assets/icons/fluent_person-call-20-filled.svg";

const HowWeWork = ({}) => {
  return (
    <div className={styles.contanier}>
      <BlockHeader
      showButtons = {false}
      title= {"Как мы работаем"}
      />
      <div className={styles.content}>
         <RequestCard
        stepNumber={1}
        icon={<img src={callIcon} alt="Иконка звонка" className="card-icon" />}
        title="Оставляете заявку"
        description="На сайте в чате, по телефону или в Telegram"
        showButtons={true}
        buttonVariant="filled" // или "outlined", "text"
      />
      <RequestCard 
        stepNumber={2}
        icon={<img src={callIcon} alt="Иконка звонка" />}
        title="Консультация"
        description="Наш специалист свяжется с вами"
        showButtons={false} // Отключаем кнопки
      />
      <RequestCard 
        stepNumber={3}
        icon={<img src={callIcon} alt="Иконка звонка" />}
        title="Консультация"
        description="Наш специалист свяжется с вами"
        showButtons={false} // Отключаем кнопки
      />
      <RequestCard 
        stepNumber={4}
        icon={<img src={callIcon} alt="Иконка звонка" />}
        title="Консультация"
        description="Наш специалист свяжется с вами"
        showButtons={false} // Отключаем кнопки
      />
      </div>

    </div>
  );
};

export default HowWeWork;