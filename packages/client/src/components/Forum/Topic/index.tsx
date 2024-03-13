import { FC } from 'react'
import styles from './index.module.scss'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@/typings'

interface Props {
  name: string,
  label: string,
  comments: number,
  id: number
}

const Topic: FC<Props> = ({ name, label, comments, id }) => {
  const navigate = useNavigate()
  
  return (
    <div className={styles.item} onClick={() => navigate(ROUTES.FORUM + `/${id}`, { state: { id: id } })}>
      <div className={styles.item__info}>
        <div className={styles.item__name}>{name}</div>
        <div className={styles.item__label}>{label}
        </div>
      </div>
      <div className={styles.item__coments}>
        <div className={styles.item__name}>Коментов</div>
        <div className={styles.item__volume}>{comments}</div>
      </div>
    </div>
  )
}

export default Topic
