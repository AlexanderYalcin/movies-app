import { FC } from 'react';
import { getTrendingMovies } from '@/utils/requests';
import Card from './Card';
import styles from '@/styles/components/List.module.scss';
import { getYearFromDate } from '@/utils/dateUtils';

interface ListProps {
  limit: number;
}

interface Movie {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  wideImg: boolean;
  imgWidth: number;
  imgHeight: number;
}

const List: FC<ListProps> = async ({ limit }) => {
  const movies: Movie[] = await getTrendingMovies();
  const firstTwoMovies: Movie[] = movies.slice(0, limit);

  return (
    <ul className={styles.list}>
      {firstTwoMovies.map((movie: Movie) => {
        return (
          <li key={movie.id} className={styles.list__item}>
            <Card movie={movie} wideImg={true} imgWidth={680} imgHeight={382} />
            <div className={styles.list__linearBg}>
              <h2 className={styles.list__movieTitle}>{movie.title}</h2>
              <span>{getYearFromDate(movie.release_date)}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
