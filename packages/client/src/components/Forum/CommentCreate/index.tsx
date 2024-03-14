import { FC, forwardRef } from 'react'
import styles from './index.module.scss'
import { Button } from '@/components/ui'

interface Props {
  owner: string
  date: string
  onCancel: () => void
}

const CommentCreate = forwardRef<HTMLFormElement, Props>(
  ({ owner, date, onCancel }, newCommentRef) => {
    return (
      <form className={styles.comment} ref={newCommentRef}>
        <header className={styles.comment__head}>
          <h5 className={styles.comment__name}>{owner}</h5>
          <h6 className={styles.comment__date}>{date}</h6>
        </header>
        <textarea
          className={styles.comment__textarea}
          placeholder="Введите ваш комментарий"
        />
        <div className={styles.comment__btnBlock}>
          <Button
            variant="primary"
            type="submit"
            className={styles.comment__btnSend}>
            Отправить
          </Button>
          <Button
            variant="primary"
            type="button"
            className={styles.comment__btnCancel}
            onClick={onCancel}>
            Отменить
          </Button>
        </div>
      </form>
    )
  }
)

export default CommentCreate
