import {Link} from 'react-router-dom'
import styles from './index.module.scss'
import {Button} from "@/components/ui";

const Navigation = () => {
  return (
    <nav>
      <ul className={styles.navigation}>
        <li className={styles.navigationItem}><Link to='/login'><Button className={styles.button} variant={'primary'}>Логин</Button></Link></li>
        <li className={styles.navigationItem}><Link to='/profile'><Button className={styles.button} variant={'primary'}>Профиль</Button></Link></li>
        <li className={styles.navigationItem}><Link to='/leaderboard'><Button className={styles.button} variant={'primary'}>Лидерборд</Button></Link></li>
        <li className={styles.navigationItem}><Link to='/forum'><Button className={styles.button} variant={'primary'}>Форум</Button></Link></li>
      </ul>
    </nav>
  )
}
export default Navigation
