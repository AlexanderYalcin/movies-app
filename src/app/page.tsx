import uiStyles from '@/styles/ui.module.scss';
import List from '@/app/components/List';
import {
  getNowPlayingMovies,
  getTrendingMovies,
  getTopRatedMovies,
} from '@/utils/requests';

export default async function Home() {
  let trendingMovies = await getTrendingMovies();
  let nowPlayingMovies = await getNowPlayingMovies();
  let topRatedMovies = await getTopRatedMovies();

  return (
    <div>
      <h1 className='visually-hidden'>Find a movie to watch!</h1>
      <h2 className={uiStyles.movieHeading}>Trending</h2>
      <List
        movies={trendingMovies}
        limit={2}
        wideImg={true}
        imgWidth={680}
        imgHeight={382}
      />
      <h2 className={uiStyles.movieHeading}>Now playing</h2>
      <List
        movies={nowPlayingMovies}
        limit={5}
        wideImg={false}
        imgWidth={255}
        imgHeight={382}
      />
      <h2 className={uiStyles.movieHeading}>Top rated</h2>
      <List
        movies={topRatedMovies}
        limit={5}
        wideImg={false}
        imgWidth={255}
        imgHeight={382}
      />
    </div>
  );
}
