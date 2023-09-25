import { FC } from 'react';
import uiStyles from '@/styles/ui.module.scss';
import categories from './categories.json';
import Filter from '@/app/components/Filter';
import { getMoviesByGenre } from '@/utils/requests';
import List from '@/app/components/List';

interface pageProps {
  searchParams: {
    genre: string;
  };
}

const page: FC<pageProps> = async ({ searchParams }) => {
  const searchText = searchParams.genre;
  const searchResultMovies = await getMoviesByGenre(searchText);

  return (
    <>
      <h1 className={uiStyles.movieHeading}>Discover</h1>
      <Filter filters={categories} />
      {searchText ? (
        <List
          movies={searchResultMovies}
          limit={20}
          wideImg={false}
          imgWidth={255}
          imgHeight={382}
        />
      ) : (
        <p>Select a category to find a movie!</p>
      )}
    </>
  );
};

export default page;
