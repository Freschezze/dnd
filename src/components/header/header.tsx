import React from "react";
import styles from "./header.module.scss";
import { useDndStore } from "../../store/DndStore ";

const Header: React.FC = () => {
    const { profile, isLoading } = useDndStore();
  
    if (isLoading || !profile) {
      return <div>Loading...</div>; // Or you can show a spinner or any other placeholder
    }

    return (
      <>
        <div className={styles.profileHeader}>
          <p className={styles.profileName}>{profile.name}</p>
        </div>
        <div className={styles.itemContainer}>
          <div className={styles.flexItem}>
            <p>iniziativa</p>
            <p>{profile.iniziativa}</p>
          </div>
          <div className={styles.flexItem}>
            <p>ca</p>
            <p>{profile.ca}</p>
          </div>
          <div className={styles.flexItem}>
            <p>velocità</p>
            <p>{profile.vel}</p> 
          </div>
        </div>
      </>
    );
  };
  

export default Header;
