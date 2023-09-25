import { getMoviesByQuery } from '@/utils/requests';
import { FC } from 'react';
import List from '@/app/components/List';
import uiStyles from '@/styles/ui.module.scss';

interface pageProps {
  searchParams: {
    query: string;
  };
}

const page: FC<pageProps> = async ({ searchParams }) => {
  const searchText = searchParams.query;
  const searchResultMovies = await getMoviesByQuery(searchText);

  return (
    <>
      <h1 className={uiStyles.movieHeading}>Search</h1>
      <List
        movies={searchResultMovies}
        limit={20}
        wideImg={false}
        imgWidth={255}
        imgHeight={382}
      />
    </>
  );
};

export default page;
