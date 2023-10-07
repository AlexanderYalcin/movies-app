import styles from '@/styles/components/Burger.module.scss';
import { FC } from 'react';

interface BurgerProps {
  clicked: Function;
  isOpen: boolean;
}

const Burger: FC<BurgerProps> = ({ clicked, isOpen }) => {
  return (
    <button
      className={styles.container + ' ' + (isOpen ? styles.navOpen : '')}
      onClick={() => clicked()}
      aria-label='menu'
      aria-expanded={isOpen}
    >
      <div className={styles.menuToggle}>
        <span
          className={`${styles.menuToggleBar} ${styles.menuToggleBar_top}`}
        ></span>
        <span
          className={`${styles.menuToggleBar} ${styles.menuToggleBar_middle}`}
        ></span>
        <span
          className={`${styles.menuToggleBar} ${styles.menuToggleBar_bottom}`}
        ></span>
      </div>
    </button>
  );
};

export default Burger;
