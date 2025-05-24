import styles from "./Block.module.scss";
import BlockHeader from './BlockHeader';
import carIcon from '../assets/icons/car.svg';
import lockIcon from '../assets/icons/lock.svg';
import doorIcon from '../assets/icons/door.svg';
import ServicesSection from './ServicesSection';
import WorkExperienceCard from "./WorkExperienceCard";

const mechanismsData = [
    {
      title: "CISA (Италия)",
      description: "Высоконадежные замки с защитой от взлома и перепикирования"
    },
    {
      title: "KALE (Турция)",
      description: "Доступные и качественные системы для металлических дверей"
    },
    {
      title: "MOTTURA (Италия)",
      description: "Премиальные замки с многоуровневой защитой"
    },
    {
      title: "ABLOY (Финляндия)",
      description: "Инновационные дисковые механизмы высокой секретности"
    }
  ];


const WorkExperience = ({}) => {
  return (
    <div className={styles.contanier}>
         <BlockHeader
      showButtons = {true}
      title= {"Опыт работы"}
      />
      <div className={styles.cards}>
         <WorkExperienceCard
     mainTitle="Цилиндровые механизмы" 
        mechanisms={mechanismsData} 
        />
         <WorkExperienceCard
     mainTitle="Цилиндровые механизмы" 
        mechanisms={mechanismsData} 
        />
         <WorkExperienceCard
     mainTitle="Цилиндровые механизмы" 
        mechanisms={mechanismsData} 
        />
      </div>
    
    </div>
  );
};

export default WorkExperience;