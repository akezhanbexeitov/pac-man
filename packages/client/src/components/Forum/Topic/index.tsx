import { ButtonHTMLAttributes, FC } from 'react'
import classnames from 'classnames'
import styles from './index.module.scss'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string,
  label: string,
  comments: number
}

const Topic: FC<Props> = ({ name, label, comments }) => {
  
  
  return (
    <div className={styles.item}>
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
