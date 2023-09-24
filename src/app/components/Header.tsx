import Link from 'next/link';
import { FC } from 'react';

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header>
      <Link href='/'>Movies</Link>
      <nav></nav>
    </header>
  );
};

export default Header;
