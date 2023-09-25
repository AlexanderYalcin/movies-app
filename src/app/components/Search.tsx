'use client';

import { useState } from 'react';
import uiStyles from '@/styles/ui.module.scss';
import { useRouter } from 'next/navigation';

const Search = () => {
  const router = useRouter();
  const [searchText, setSearchText] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchText) {
      router.push(`/search?query=${searchText}`);
    }
  };

  return (
    <div>
      <form className={uiStyles.search} onSubmit={(e) => handleSubmit(e)}>
        <input
          type='text'
          id='searchInput'
          placeholder='Search movie titles'
          className={uiStyles.search__input}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
