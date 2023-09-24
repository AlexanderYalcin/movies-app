import { getMoviesByQuery } from '@/utils/requests';
import { FC } from 'react';
import List from '@/app/components/List';

interface pageProps {
  searchParams: string;
}

const page: FC<pageProps> = async ({ searchParams }) => {
  const searchText = searchParams.query;
  const searchResultMovies = await getMoviesByQuery(searchText);

  return (
    <div>
      <List
        movies={searchResultMovies}
        limit={20}
        wideImg={false}
        imgWidth={255}
        imgHeight={382}
      />
    </div>
  );
};

export default page;
