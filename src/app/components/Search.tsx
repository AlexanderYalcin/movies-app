import { FC } from 'react';

interface SearchProps {}

const Search: FC<SearchProps> = ({}) => {
  return (
    <div>
      <form>
        <input
          type='text'
          id='searchInput'
          placeholder='Search...'
          className='text-black'
        />
      </form>
    </div>
  );
};

export default Search;
