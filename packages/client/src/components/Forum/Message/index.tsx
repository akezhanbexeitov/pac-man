import React, { forwardRef } from 'react'
import styles from './index.module.scss'
import { TComment } from '@/typings/types'
import { Comment, CommentCreate } from '@/components'

interface Props {
  name: string
  date: string
  description: string
  id: number
  comments?: TComment[]
  isNewComment: boolean
  onCancel: () => void
}

const Message = forwardRef<HTMLFormElement, Props>(
  (
    { name, date, description, id, comments, isNewComment, onCancel },
    newCommentRef
  ) => {
    return (
      <div className={styles.item}>
        <header className={styles.item__head}>
          <h2 className={styles.item__name}>{name}</h2>
          <h4 className={styles.item__date}>{date}</h4>
        </header>
        <h3 className={styles.item__description}>{description}</h3>
        {comments && (
          <ul className={styles.item__block}>
            {isNewComment && (
              <CommentCreate
                owner="Павел"
                date="15.03.2024"
                onCancel={onCancel}
                ref={newCommentRef}
              />
            )}
            {comments.map(comment => (
              <Comment
                owner={comment.owner}
                date={comment.date}
                description={comment.description}
                key={comment.id}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
)

export default Message
