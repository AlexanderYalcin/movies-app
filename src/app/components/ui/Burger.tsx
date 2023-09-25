import styles from '@/styles/components/Burger.module.scss';
import { FC } from 'react';

interface BurgerProps {
  clicked: Function;
  isOpen: boolean;
}

const Burger: FC<BurgerProps> = ({ clicked, isOpen }) => {
  return (
    <div
      className={styles.container + ' ' + (isOpen ? styles.navOpen : '')}
      onClick={() => clicked()}
    >
      <button
        className={styles.menuToggle}
        aria-label='menu'
        aria-expanded={isOpen}
      >
        <span
          className={`${styles.menuToggleBar} ${styles.menuToggleBar_top}`}
        ></span>
        <span
          className={`${styles.menuToggleBar} ${styles.menuToggleBar_middle}`}
        ></span>
        <span
          className={`${styles.menuToggleBar} ${styles.menuToggleBar_bottom}`}
        ></span>
      </button>
    </div>
  );
};

export default Burger;
