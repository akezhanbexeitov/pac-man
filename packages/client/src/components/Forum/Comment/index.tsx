import { FC } from 'react'
import styles from './index.module.scss'

interface Props {
  owner: string,
  date: string,
  description: string,
}

const Comment: FC<Props> = ({ owner, date, description }) => {
  return (
    <div className={styles.comment}>
      <div className={styles.comment__head}>
        <div className={styles.comment__name}>{owner}</div>
        <div className={styles.comment__date}>{date}</div>
      </div>
      <div className={styles.comment__description}>{description}</div>
    </div>
  )
}

export default Comment
