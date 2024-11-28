
import styles from './App.module.scss'
import rokan from './assets/images/rokan.png'

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.header}>
        <div >
          <img className={styles.profileImg} src={rokan} alt="" />
          <p className={styles.profileName}>Rokan</p>
        </div>
      </div>
    </div>
  );
}

export default App;
