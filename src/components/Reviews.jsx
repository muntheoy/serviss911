import React from 'react';
import styles from './Reviews.module.scss';
import BlockHeader from './BlockHeader';
import photo from '../assets/icons/men.jpg';
import starIcon from '../assets/icons/star.svg';
import { useDragScroll } from '../hooks/useDragScroll';
import { REVIEWS_TEXT } from '../texts'; // путь подкорректируй при необходимости

const Reviews = () => {
  const dragRef = useDragScroll();

  const FiveStars = ({ count }) => (
    <div className={styles.rating}>
      {[...Array(count)].map((_, i) => (
        <img key={i} src={starIcon} alt="Звезда" className={styles.star} />
      ))}
    </div>
  );

  return (
    <section className={styles.reviewsSection} id="reviews">
      <BlockHeader title={REVIEWS_TEXT.title} showButtons={false} />
      <div className={styles.reviewsList} ref={dragRef}>
        {REVIEWS_TEXT.list.map((review) => (
          <div key={review.id} className={styles.reviewCard}>
            <div className={styles.avatarContainer}>
              <div className={styles.avatarLeft}>
                <img src={photo} alt={review.name} className={styles.avatar} />
                <h3 className={styles.reviewName}>{review.name}</h3>
              </div>
              <FiveStars count={review.rating} />
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
