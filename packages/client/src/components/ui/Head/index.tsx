import { Arrow } from '@/components/icons'
import styles from './index.module.scss'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {
  label?: string
  route: string
}

const Head: FC<Props> = ({ label, route }) => {
  const navigate = useNavigate()

  return (
    <header className={styles.head}>
      <h1 className={styles.head__title}>{label}</h1>
      <button className={styles.head__back} onClick={() => navigate(route)}>
        <Arrow />
      </button>
    </header>
  )
}

export default Head
