import { FC } from 'react';
import uiStyles from '@/styles/ui.module.scss';

interface SearchProps {}

const Search: FC<SearchProps> = ({}) => {
  return (
    <div>
      <form className={uiStyles.search}>
        <input
          type='text'
          id='searchInput'
          placeholder='Search movie titles'
          className={uiStyles.search__input}
        />
      </form>
    </div>
  );
};

export default Search;
