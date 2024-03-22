import { useLocation, useNavigate } from 'react-router-dom'
import styles from './index.module.scss'
import { Button, Head } from '@/components/ui'
import { ROUTES } from '@/typings'
import cn from 'classnames'
import { useEffect, useRef, useState } from 'react'
import { forumsTopic } from '@/pages/ForumPage/forumMock'
import { TTopic } from '@/typings/types'
import { Message } from '@/components'
import useAuth from '@/hooks/useAuth'

const TopicPage = () => {
  const [isNewComment, setIsNewComment] = useState(false)
  const [data, setData] = useState<TTopic>()

  const newCommentRef = useRef<HTMLFormElement | null>(null)

  const location = useLocation()
  const id = location.state.id
  const isAuth = useAuth()
  const navigate = useNavigate()

  const handleClick = () => {
    if (!isAuth) {
      navigate(ROUTES.LOGIN, {
        state: { from: location.pathname },
      })
    }
    setIsNewComment(true)
  }

  useEffect(() => {
    if (isNewComment && newCommentRef.current) {
      newCommentRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [isNewComment])

  useEffect(() => {
    const data = forumsTopic.filter(item => item.id === id)
    setData(data[0])
  }, [])

  return (
    <div className={styles.wrapper}>
      <main className={styles.content}>
        <div className={styles.forum}>
          <Head label={data?.label} route={ROUTES.FORUM} />
          {data && (
            <div className={cn(styles.topic, 'customScroll')}>
              <Message
                name={data.owner}
                date={data.date}
                description={data.description}
                id={data.id}
                key={data.id}
                comments={data.comments}
                isNewComment={isNewComment}
                onCancel={() => setIsNewComment(false)}
                ref={newCommentRef}
              />
            </div>
          )}
          <Button
            variant="secondary"
            className={styles.btn}
            type="button"
            onClick={handleClick}>
            Написать сообщение
          </Button>
        </div>
      </main>
    </div>
  )
}

export default TopicPage
