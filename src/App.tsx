
import styles from './App.module.scss'
import rokan from './assets/images/rokan.png'

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.header}>
        <div className={styles.profilePortrait}>
          <img className={styles.profileImg} src={rokan} alt="" />
          <p className={styles.profileName}>Rokan</p>
        </div>
        <div className={styles.profileDetails}>
          <p><span>class:</span> ranger</p>
          <p><span>razza:</span> umano</p>
          <p><span>background:</span> sailor</p>
          <p><span>allineamento:</span> caotico buono</p>
        </div>
      </div>
    </div>
  );
}

export default App;
