import { Arrow } from '@/components/icons'
import styles from './index.module.scss'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@/typings'

interface Props {
  label?: string
  route: string
}

const Head: FC<Props> = ({ label, route }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(route)
  }
  return (
    <header className={styles.head}>
      <h1 className={styles.head__title}>{label}</h1>
      <button className={styles.head__back} onClick={handleClick}>
        <Arrow />
      </button>
    </header>
  )
}

export default Head
