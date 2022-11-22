import styles from './FormTask.module.css';
import { useState } from 'react';

type IFormTaskProps = {
  onSave: (value: string) => void;
};

const FormTask: React.FC<IFormTaskProps> = ({ onSave }) => {
  const [description, setDescription] = useState('');

  function handleSubmit(event: any) {
    event.preventDefault();

    onSave(description);
    setDescription('');
  }

  return (
    <form className={styles.container}>
      <input
        value={description}
        type="text"
        placeholder="Adicionar uma nova tarefa"
        onChange={(event) => setDescription(event.target.value)}
      />
      <button onClick={handleSubmit} disabled={description === ''}>
        Criar
      </button>
    </form>
  );
};

export { FormTask };
