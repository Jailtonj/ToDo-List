import { Trash } from 'phosphor-react';
import styles from './Tasks.module.css';

interface TaskProps {
    content: string;
    onDeleteTask:(task: string) => void;
}

export function Tasks({content, onDeleteTask}: TaskProps) {

    function handleDeleteTask() {

        onDeleteTask(content)
    }

    return (
        <div className={styles.ListTask}>
            <div>
                <div className={styles.form}>
                    <input
                        title='checkbox'
                        type="checkbox"
                    />
                    <div className={styles.tarefas}>
                        <p>{content}</p>
                        <button onClick={handleDeleteTask} title="Excluir tarefa">
                                <Trash size={24} />
                        </button>
                    </div>
                </div>
             </div>
        </div>
    );
}