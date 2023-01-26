import { Header } from './components/Header';
import { ListTask } from './components/ListTask';
// import { EmptTask } from './components/EmptTask';

import styles from './App.module.css';

import './global.css';

export function App () {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <ListTask />
        
        {/* <EmptTask /> */}
        
        
        
      </div>
      
    </div>
  )
}