import Image from 'next/image';
import { FC } from 'react';
import styles from '@/styles/components/Card.module.scss';

interface CardProps {
  movie: {
    poster_path: string;
  };
  wideImg: boolean;
  imgWidth: number;
  imgHeight: number;
}

const Card: FC<CardProps> = ({ movie, wideImg, imgWidth, imgHeight }) => {
  const IMAGE_BASE_URL = wideImg
    ? 'https://www.themoviedb.org/t/p/w640_and_h960_face/'
    : 'https://www.themoviedb.org/t/p/w440_and_h660_face/';

  return (
    <>
      {movie.poster_path ? (
        <div className={styles.card}>
          <Image
            className={styles.card__image}
            src={IMAGE_BASE_URL + movie.poster_path}
            alt=''
            width={imgWidth}
            height={imgHeight}
            style={{ width: 'auto' }}
          />
        </div>
      ) : (
        <div className={styles.emptyCard}>
          <span>No image found</span>
        </div>
      )}
    </>
  );
};

export default Card;
