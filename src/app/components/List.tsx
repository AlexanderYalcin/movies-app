import { FC } from 'react';
import Card from './Card';
import styles from '@/styles/components/List.module.scss';
import { getYearFromDate } from '@/utils/dateUtils';

interface Movie {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
}

interface ListProps {
  movies: Movie[];
  limit: number;
  imgWidth: number;
  imgHeight: number;
  wideImg: boolean;
}

const List: FC<ListProps> = async ({
  movies,
  limit,
  wideImg,
  imgWidth,
  imgHeight,
}) => {
  let movieLimiter = movies.slice(0, limit);

  return (
    <>
      {movieLimiter.length > 0 ? (
        <ul
          className={styles.list + ' ' + (!wideImg ? styles.list__small : '')}
        >
          {movieLimiter.map((movie: Movie) => {
            return (
              <li
                key={movie.id}
                className={
                  styles.list__item +
                  ' ' +
                  (!wideImg ? styles.list__smallItem : '')
                }
              >
                <Card
                  movie={movie}
                  wideImg={wideImg}
                  imgWidth={imgWidth}
                  imgHeight={imgHeight}
                />

                <div
                  className={
                    wideImg ? styles.list__linearBg : styles.list__darkBg
                  }
                >
                  <div className={!wideImg ? styles.list__text : ''}>
                    <h3 className={styles.list__movieTitle}>{movie.title}</h3>
                    <span>{getYearFromDate(movie.release_date)}</span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className={styles.list__noResults}>No results found</p>
      )}
    </>
  );
};

export default List;
