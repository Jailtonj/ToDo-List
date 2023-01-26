import styles from './Header.module.css';

import ToDoListLogo from '../assets/ToDo-List-logo.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={ToDoListLogo} alt="Logotipo do ToDoList" />
        </header>
    );
}