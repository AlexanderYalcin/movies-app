import Image from 'next/image';
import { getTrendingMovies } from '@/utils/requests';
import Card from './components/Card';

interface Movie {
  id: number;
  poster_path: string;
  wideImg: boolean;
  imgWidth: number;
  imgHeight: number;
}

export default async function Home() {
  try {
    const movies: Movie[] = await getTrendingMovies();
    const firstTwoMovies: Movie[] = movies.slice(0, 2);

    return (
      <div>
        <h1>Trending</h1>
        <ul>
          {firstTwoMovies.map((movie: Movie) => {
            return (
              <li key={movie.id}>
                <Card
                  movie={movie}
                  wideImg={true}
                  imgWidth={680}
                  imgHeight={382}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  } catch (error) {
    console.error('An error occurred while fetching trending movies:', error);

    return (
      <div>
        <h1>Error</h1>
        <p>
          An error occurred while fetching trending movies. Please try again
          later.
        </p>
      </div>
    );
  }
}
