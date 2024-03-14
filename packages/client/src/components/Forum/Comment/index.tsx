import { FC } from 'react'
import styles from './index.module.scss'

interface Props {
  owner: string
  date: string
  description: string
}

const Comment: FC<Props> = ({ owner, date, description }) => {
  return (
    <li className={styles.comment}>
      <header className={styles.comment__head}>
        <h5 className={styles.comment__name}>{owner}</h5>
        <span className={styles.comment__date}>{date}</span>
      </header>
      <h6 className={styles.comment__description}>{description}</h6>
    </li>
  )
}

export default Comment
