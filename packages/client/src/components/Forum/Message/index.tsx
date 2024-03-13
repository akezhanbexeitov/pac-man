import { FC } from 'react'
import styles from './index.module.scss'
import { Button } from '@/components/ui'
import { TComment } from '@/typings/types'
import { Comment, CommentCreate } from '@/components'


interface Props {
  name: string,
  date: string,
  description: string,
  id: number,
  comments?: TComment[]
  isNewComment: boolean,
  onCancel: () => void;
}

const Message: FC<Props> = ({ name, date, description, id, comments,isNewComment, onCancel }) => {
  return (
    <div className={styles.item}>
      <div className={styles.item__head}>
        <div className={styles.item__name}>{name}</div>
        <div className={styles.item__date}>{date}</div>
      </div>
      <div className={styles.item__description}>{description}</div>
      {comments &&
        <div className={styles.item__block}>
          {isNewComment && <CommentCreate owner={"Павел"} date={"15.03.2024"} onCancel={onCancel}/>}
          {comments.map(comment => (
            <Comment owner={comment.owner} date={comment.date} description={comment.description} key={comment.id} />
          ))}
        </div>
      }
    </div>
  )
}

export default Message
