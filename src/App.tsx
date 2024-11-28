import styles from "./App.module.scss";
import Background from "./components/background/background";
import Header from "./components/header/header";
import { db } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    const fetchCharacters = async () => {
      const querySnapshot = await getDocs(collection(db, "characters"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} =>`, doc.data());
      });
    };

    fetchCharacters();
  });

  return (
    <div className={styles.App}>
      <Header />
      <Background />
    </div>
  );
}

export default App;
