import styles from './FormTask.module.css';

const FormTask: React.FC = () => {
  return (
    <form className={styles.container}>
      <input type="text" placeholder="Adicionar uma nova tarefa" />
      <button>Criar</button>
    </form>
  );
};

export { FormTask };
