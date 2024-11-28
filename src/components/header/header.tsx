import React from 'react';
import styles from './header.module.scss'

const Header: React.FC = () => {
  return (
    <div className={styles.profileHeader}>
        <p className={styles.profileName}>rokan</p>
    </div>
  );
};

export default Header;
