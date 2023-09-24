'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FC } from 'react';
import { usePathname } from 'next/navigation';
import styles from '@/styles/components/Header.module.scss';

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <Link className={styles.header__logo} href='/'>
          Movies
        </Link>
        <nav>
          <ul className={styles.header__links}>
            <li>
              <Link
                className={
                  styles.header__link +
                  ' ' +
                  (pathname == '/' || pathname == '/movies'
                    ? styles.header__link_active
                    : '')
                }
                href='/'
              >
                <Image
                  src='/assets/HomeIcon.svg'
                  width={32}
                  height={32}
                  alt=''
                />
                Home
              </Link>
            </li>
            <li>
              <Link
                className={
                  styles.header__link +
                  ' ' +
                  (pathname == '/discover' ? styles.header__link_active : '')
                }
                href='/discover'
              >
                <Image
                  src='/assets/DiscoverIcon.svg'
                  width={32}
                  height={32}
                  alt=''
                />
                Discover
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
