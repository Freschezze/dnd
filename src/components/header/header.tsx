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
      
    </>
  );
};

export default Header;
