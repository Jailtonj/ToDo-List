import styles from './ListTask.module.css';
import { PlusCircle } from 'phosphor-react';
import { Tasks } from './Tasks';
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react';
import { EmptTask } from './EmptTask';


export function ListTask() {
    const [tasks, setTasks] : any[]  = useState([
        
    ]);

    const [newTaskText, setNewTaskText] = useState('')

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault();
        
        // O ... copia os valores que já existem no array
        setTasks([...tasks, newTaskText]);
        setNewTaskText('');
    };

    function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');
        setNewTaskText(event.target.value);
    };

    function handleNewTaskInvalid (event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório!');
    };

    function deleteTask(taskToDelete: string) {
        const tasksWithoutDeletedOne = tasks.filter((task: string) => {
            return task !== taskToDelete;
        })

        setTasks(tasksWithoutDeletedOne);
    };

    return (
        <article className={styles.all}>
            
            <form onSubmit={handleCreateNewTask} className={styles.AddTask}>
                <textarea
                    name="task"
                    placeholder="Adicione uma nova tarefa"
                    value={newTaskText}
                    onChange={handleNewTaskChange}
                    onInvalid={handleNewTaskInvalid}
                    required
                    />
            
                    <button type="submit">
                        Criar
                        <PlusCircle size={18} />
                    </button>
                
            </form>
            
            <div className={styles.tasks}>
                <p className={styles.taskscreate}>
                    Tarefas criadas <span>{tasks.length}</span>
                </p>
                {/* <p className={styles.tasksDone}>
                    Concluídas <span>1 de {tasks.length}</span>
                </p> */}
            </div>

            

            {/* Estrutura condicional para verificar se existe tarefa adcionada */}
            {
                tasks.length > 0 ? (
            <div className= {styles.commentsList}>
                    {tasks.map((task: string) => {
                        return  (
                            <Tasks
                                key={task}
                                content={task}
                                onDeleteTask={deleteTask}                               
                            />
                        )
                    })}
                    
            </div>) : (
                <EmptTask />
            )
            }
        </article>
    )
}