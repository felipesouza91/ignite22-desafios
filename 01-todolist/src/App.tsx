import { FormTask } from './components/FormTask';
import { Header } from './components/Header';
import styles from './App.module.css';
import Information from './components/Information';
import { ClipboardText } from 'phosphor-react';
import { useState } from 'react';
import Todo from './components/Todo';

type ITodo = {
  description: string;
  isComplete: boolean;
};

const test: ITodo[] = [
  {
    description:
      'Voluptate culpa Lorem pariatur id enim ut ipsum in minim est incididunt ut laborum dolore.',
    isComplete: true,
  },
  {
    description:
      'Officia amet nostrud labore exercitation velit sint nulla officia consequat nulla do consectetur.',
    isComplete: false,
  },
  {
    description:
      'Minim nisi ea id veniam aute consectetur voluptate cupidatat.',
    isComplete: true,
  },
  {
    description:
      'Enim irure laborum et veniam id officia ut nisi aliquip. Enim quis anim sint culpa incididunt. Ullamco culpa laborum deserunt veniam consequat sint enim. Nostrud cillum ex aliquip enim nisi. Veniam est fugiat irure tempor. Cupidatat sit excepteur magna quis id eiusmod aute aliquip incididunt exercitation enim.',
    isComplete: true,
  },
];

const App: React.FC = () => {
  const [todoList, setTodoList] = useState<ITodo[]>(test);
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.wrapperForm}>
            <FormTask />
          </div>
          <section>
            <div className={styles.info}>
              <Information label="Tarefas Criadas" badgeText="0" />
              <Information
                label="Concluídas"
                badgeText="2 de 5"
                type="secondary"
              />
            </div>
            {todoList.length > 0 ? (
              <div className={styles.todoList}>
                {todoList.map((item) => (
                  <Todo key={item.description} data={item} />
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
