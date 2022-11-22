import { FormTask } from './components/FormTask';
import { Header } from './components/Header';
import styles from './App.module.css';
import Information from './components/Information';
import { ClipboardText } from 'phosphor-react';
import { useMemo, useState } from 'react';
import Todo from './components/Todo';

type ITodo = {
  description: string;
  isComplete: boolean;
};

const App: React.FC = () => {
  const [todoList, setTodoList] = useState<ITodo[]>([]);

  const totalTodo = useMemo(() => todoList.length, [todoList]);
  const todoCompleteSize = useMemo(
    () => todoList.filter((item) => item.isComplete).length,
    [todoList]
  );

  function handleCreateTodo(description: string) {
    setTodoList([...todoList, { description, isComplete: false }]);
  }

  function handleChangeStatus(todo: ITodo) {
    const newTodoList = todoList.map((item) => {
      if (todo.description === item.description) {
        item.isComplete = !item.isComplete;
        return item;
      }
      return item;
    });
    setTodoList(newTodoList);
  }

  function handleDelete(todo: ITodo) {
    const newTodoList = todoList.filter(
      (item) => item.description != todo.description
    );
    setTodoList(newTodoList);
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.wrapperForm}>
            <FormTask onSave={handleCreateTodo} />
          </div>
          <section>
            <div className={styles.info}>
              <Information
                label="Tarefas Criadas"
                badgeText={totalTodo.toString()}
              />
              <Information
                label="Concluídas"
                badgeText={`${todoCompleteSize} de ${totalTodo}`}
                type="secondary"
              />
            </div>
            {todoList.length > 0 ? (
              <div className={styles.todoList}>
                {todoList.map((item) => (
                  <Todo
                    key={item.description}
                    data={item}
                    onChangeStatus={handleChangeStatus}
                    onDelete={handleDelete}
                  />
                ))}
              </div>
            ) : (
              <div className={styles.empty}>
                <ClipboardText size={56} color="#808080" />
                <p>Você ainda não tem tarefas cadastradas</p>
                <span>Crie tarefas e organize seus itens a fazer</span>
                <div></div>
              </div>
            )}
          </section>
        </div>
      </main>
    </>
  );
};

export default App;
