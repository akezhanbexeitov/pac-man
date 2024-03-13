import { FC } from 'react'
import styles from './index.module.scss'
import { Button } from '@/components/ui'

interface Props {
  owner: string,
  date: string,
  onCancel: () => void;
  
}

const CommentCreate: FC<Props> = ({ owner, date, onCancel}) => {
  return (
    <div className={styles.comment}>
      <div className={styles.comment__head}>
        <div className={styles.comment__name}>{owner}</div>
        <div className={styles.comment__date}>{date}</div>
      </div>
      <textarea className={styles.comment__textarea} placeholder={'Введите ваш коментарий'}/>
      <div className={styles.comment__btnBlock}>
        <Button variant={'primary'} className={styles.comment__btnSend}>Отправить</Button>
        <Button variant={'primary'} className={styles.comment__btnCancel} onClick={onCancel}>Отменить</Button>
      </div>
    </div>
  )
}

export default CommentCreate
