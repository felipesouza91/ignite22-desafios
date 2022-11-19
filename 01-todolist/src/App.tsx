import { FormTask } from './components/FormTask';
import { Header } from './components/Header';
import styles from './App.module.css';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.wrapperForm}>
          <FormTask />
        </div>
      </main>
    </>
  );
};

export default App;
