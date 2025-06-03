import React from 'react';
import styles from './Reviews.module.scss';
import BlockHeader from './BlockHeader';
import { useDragScroll } from '../hooks/useDragScroll';
import { REVIEWS_TEXT } from '../texts';

import photo1 from '../assets/img/reviews/1.webp';
import photo2 from '../assets/img/reviews/2.webp';
import photo3 from '../assets/img/reviews/3.webp';
import photo4 from '../assets/img/reviews/5.webp';
import photo5 from '../assets/img/reviews/4.webp';
import starIcon from '../assets/icons/star.svg';

const Reviews = () => {
  const dragRef = useDragScroll();

  const reviewPhotos = {
    1: photo1,
    2: photo2,
    3: photo3,
    4: photo4,
    5: photo5
  };

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
                <img 
                  src={reviewPhotos[review.id]} 
                  alt={review.name} 
                  className={styles.avatar} 
                  loading="lazy"
                />
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
