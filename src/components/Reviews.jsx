// Reviews.jsx
import React from 'react';
import styles from './Reviews.module.scss';
import BlockHeader from './BlockHeader';
import photo from '../assets/icons/men.jpg';
import starIcon from '../assets/icons/star.svg'; // Импортируем SVG как URL

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Ирина П.",
      text: "Приключилась беда — захлопнулась дверь, а ключи остались внутри. Ребята молодцы, примчались быстро, дверь открыли и замок сменили на раз-два. Всё супер, спасибо вам!",
      avatar: photo,
      rating: 5
    },
    {
      id: 2,
      name: "Алексей В.",
      text: "Срочно понадобилось вскрыть сейф после смены кода. Мастер приехал за 20 минут, профессионально справился с задачей.",
      avatar: photo,
      rating: 4
    },
    {
      id: 3,
      name: "Ольга С.",
      text: "Ночью заклинило замок в машине. Думала, придётся вызывать эвакуатор, но эти ребята спасли ситуацию за 15 минут без повреждений!",
      avatar: photo,
      rating: 5
    },
    {
      id: 4,
      name: "Дмитрий К.",
      text: "Установили новые надёжные замки во всей квартире. Работали аккуратно, убрали за собой, цены адекватные.",
      avatar: photo,
      rating: 4
    },
    {           
      id: 5,
      name: "Екатерина М.",
      text: "Помогли вскрыть квартиру когда ребёнок случайно закрылся изнутри. Приехали моментально, всё сделали бережно.",
      avatar: photo,
      rating: 5
    }
  ];

     const FiveStars = () => {
    return (
      <div className={styles.rating}>
        {[...Array(5)].map((_, i) => (
          <img 
            key={i}
            src={starIcon} 
            alt="Звезда" 
            className={styles.star}
          />
        ))}
      </div>
    );
  };

  return (
     <section className={styles.reviewsSection}>
      <BlockHeader
        showButtons={true}
        title={"Отзывы клиентов"}
      />
      
      <div className={styles.reviewsList}>
        {reviews.map(review => (
          <div key={review.id} className={styles.reviewCard}>
            <div className={styles.avatarContainer}>
              <div className={styles.avatarLeft}>
                <img 
                  src={review.avatar} 
                  alt={review.name} 
                  className={styles.avatar}
                />
                <h3 className={styles.reviewName}>{review.name}</h3>  
              </div>
              <FiveStars />
            </div>
            <div className={styles.reviewContent}>
              <p className={styles.reviewText}>{review.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;