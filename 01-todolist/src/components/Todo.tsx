import styles from './Todo.module.css';
import { Trash, Circle, CheckCircle } from 'phosphor-react';

type ITodoDto = {
  description: string;
  isComplete: boolean;
};

type ITodoProps = {
  data: ITodoDto;
};

const Todo: React.FC<ITodoProps> = ({ data }) => {
  return (
    <div className={styles.container}>
      <button>
        {data.isComplete ? (
          <CheckCircle size={24} color="#8284fa" weight="fill" />
        ) : (
          <Circle size={24} color="#4ea8de" />
        )}
      </button>
      <p className={ data.isComplete ?  styles.textComplete: styles.text}>{data.description}</p>
      <Trash size={24} color="#808080" />
    </div>
  );
};

export default Todo;
