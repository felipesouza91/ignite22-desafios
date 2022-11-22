import styles from './Todo.module.css';
import { Trash, Circle, CheckCircle } from 'phosphor-react';

type ITodoDto = {
  description: string;
  isComplete: boolean;
};

type ITodoProps = {
  data: ITodoDto;
  onChangeStatus: (item: ITodoDto) => void;
  onDelete: (item: ITodoDto) => void;
};

const Todo: React.FC<ITodoProps> = ({ data, onChangeStatus, onDelete }) => {
  return (
    <div className={styles.container}>
      <button
        className={data.isComplete ? styles.check : styles.circle}
        onClick={() => onChangeStatus(data)}
      >
        {data.isComplete ? (
          <CheckCircle size={24} weight="fill" />
        ) : (
          <Circle size={24} />
        )}
      </button>
      <p className={data.isComplete ? styles.textComplete : styles.text}>
        {data.description}
      </p>
      <button className={styles.trash} onClick={() => onDelete(data)}>
        <Trash size={24} />
      </button>
    </div>
  );
};

export default Todo;
