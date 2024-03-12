import styles from './index.module.scss'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {
  label: string
  route: string
}

const Head: FC<Props> = ({ label, route }) => {
  const navigate = useNavigate()
  return (
    <div className={styles.head}>
      <div className={styles.head__title}>{label}</div>
      <button className={styles.head__back} onClick={() => navigate(route)}>&#11148;</button>
    </div>
  )
}
export default Head
