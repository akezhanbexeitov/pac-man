import { FC } from 'react'
import styles from './index.module.scss'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@/typings'

interface Props {
  name: string
  label: string
  comments: number
  id: number
}

const Topic: FC<Props> = ({ name, label, comments, id }) => {
  const navigate = useNavigate()

  return (
    <li
      className={styles.item}
      onClick={() => navigate(ROUTES.FORUM + `/${id}`, { state: { id: id } })}>
      <div className={styles.item__info}>
        <h3 className={styles.item__name}>{name}</h3>
        <h2 className={styles.item__label}>{label}</h2>
      </div>
      <div className={styles.item__comments}>
        <h4 className={styles.item__name}>Комментов</h4>
        <span className={styles.item__volume}>{comments}</span>
      </div>
    </li>
  )
}

export default Topic
