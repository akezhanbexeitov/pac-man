import { Link } from 'react-router-dom'
import styles from './index.module.scss'
import { Button } from '@/components/ui'
import { ROUTES } from '@/typings'

const Navigation = () => {
  return (
    <nav>
      <ul className={styles.navigation}>
        <li className={styles.navigationItem}>
          <Link to={ROUTES.PROFILE}>
            <Button className={styles.button} variant={'primary'}>
              Профиль
            </Button>
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to={ROUTES.LEADERBOARD}>
            <Button className={styles.button} variant={'primary'}>
              Лидерборд
            </Button>
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to={ROUTES.FORUM}>
            <Button className={styles.button} variant={'primary'}>
              Форум
            </Button>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
export default Navigation
