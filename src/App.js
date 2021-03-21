import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';

import styles from "./App.module.css";

function App() {
  return (
    <>
      <div className={styles.backgroundPerspective}></div>
      <div className={styles.content}>
        <CharacterEditor />
        <Footer />
      </div>
    </>
  );
}

export default App;
