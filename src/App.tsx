import styles from "./App.module.scss";
import Background from "./components/background/background";
import BottomAppBar from "./components/bottomAppBar/bottomAppBar";
import Header from "./components/header/header";
import { db } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { useDndStore } from "./store/DndStore ";

function App() {
  const { setProfile, setIsLoading, isLoading } = useDndStore();

  useEffect(() => {
    const fetchCharacters = async () => {
      setIsLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, "characters"));
        const characters = querySnapshot.docs.map((doc) => doc.data());

        if (characters.length > 0) {
          setProfile(characters[0]);
        }
      } catch (error) {
        console.error("Error fetching characters: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCharacters();
  }, [setProfile, setIsLoading]);

  return (
    <div className={styles.AppWrapper}>
      {isLoading ? <div>Loading...</div> : (
        <div className={styles.App}>
          <Header />
          <Background />
          <BottomAppBar />
        </div>
      )}
    </div>
  );
}

export default App;
