import styles from './EmptTask.module.css';

import { ClipboardText } from 'phosphor-react'

export function EmptTask() {
    return (
        <div className={styles.empttask}>
            <ClipboardText size={80} className={styles.clipboardText}/>
            <p>Você ainda não tem tarefas cadastradas</p>
            
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    );
}