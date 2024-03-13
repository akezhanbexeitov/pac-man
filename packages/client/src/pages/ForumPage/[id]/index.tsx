import { useLocation } from 'react-router-dom'
import styles from './index.module.scss'
import { Button, Head } from '@/components/ui'
import { ROUTES } from '@/typings'
import classnames from 'classnames'
import { useEffect, useState } from 'react'
import { forumsTopic } from '@/pages/ForumPage/forumMock'
import { TTopic } from '@/typings/types'
import { Message } from '@/components'

const TopicPage = () => {
  const [isNewComment, setIsNewComment] = useState(false)
  const location = useLocation()
  const id = location.state.id
  const [data, setData] = useState<TTopic>()
  useEffect(() => {
    const data = forumsTopic.filter(item => item.id === id
    )
    setData(data[0])
  }, [])
  return (
    <div className={styles.wrapper}>
      <main className={styles.content}>
        <div className={styles.forum}>
          <Head label={data?.label} route={ROUTES.FORUM} />
          {data && <div className={classnames(styles.topic, 'customScroll')}>
            <Message name={data.owner} date={data.date} description={data.description} id={data.id} key={data.id}
                     comments={data.comments} isNewComment={isNewComment} onCancel={() => setIsNewComment(false)}/>
          </div>}
          <Button variant={'secondary'} className={styles.btn} onClick={() => setIsNewComment(true)}>Написать сообщение</Button>
        </div>
      </main>
    </div>)
}

export default TopicPage
