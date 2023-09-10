import { Link } from 'react-router-dom';

import styles from './scss/NotFoundBlock.module.scss'


const NotFound = () => {
  return (
    <div>
      <h1 className={styles.root}> Nothing found :( </h1>
      <Link to ='/pizza'>go Home</Link>
    </div>
  )
}

export default NotFound
