import { FC } from 'react';
import { getTrendingMovies } from '@/utils/requests';
import Card from './Card';
import styles from '@/styles/components/List.module.scss';

interface ListProps {
  limit: number;
}

interface Movie {
  id: number;
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
          </li>
        );
      })}
    </ul>
  );
};

export default List;
