'use client';
import React, { FC, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/styles/components/Filter.module.scss';

interface Filter {
  id: number;
  name: string;
}

interface FiltersProps {
  filters: Filter[];
}

const Filter: FC<FiltersProps> = ({ filters }) => {
  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <ul className={styles.filters}>
      {filters.map((filter, index) => (
        <li
          onClick={(e) => {
            if (selectedIndex === index) {
              setSelectedIndex(null);
              router.push(`/discover`);
            } else {
              setSelectedIndex(index);
              router.push(
                `/discover?genre=${e.currentTarget.getAttribute('value')}`
              );
            }
          }}
          key={filter.id}
          className={
            styles.filters__filter +
            ' ' +
            `${selectedIndex === index ? styles.filters__filter_active : ''}`
          }
          value={filter.id}
        >
          {filter.name}
        </li>
      ))}
    </ul>
  );
};

export default Filter;
