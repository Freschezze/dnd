import React from 'react';
import styles from './header.module.scss'

const Header: React.FC = () => {
  return (
    <div className={styles.profileHeader}>
        <p className={styles.profileName}>rokan</p>
        <div className= {styles.flexItem}>
           <p>iniziativa</p>  
           <p>+4</p>   
        </div>
        <div className= {styles.flexItem}>
           <p>ca</p>   
           <p>16</p>  
        </div>
        <div className= {styles.flexItem}>
           <p>velocità</p>  
           <p>9m/s</p>   
        </div>
    </div>
  );
};

export default Header;
