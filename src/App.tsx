import styles from "./App.module.scss";
import Background from "./components/background/background";
import Header from "./components/header/header";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Background />
    </div>
  );
}

export default App;
