import styles from './index.module.scss'
import { Button, Head, Modal } from '@/components/ui'
import { ROUTES } from '@/typings'
import cn from 'classnames'
import { ModalCreate, Topic } from '@/components'
import { forums } from '@/pages/ForumPage/forumMock'
import { useState } from 'react'

const ForumPage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const handleClick = () => {
    setIsOpenModal(true)
  }
  return (
    <div className={styles.wrapper}>
      <main className={styles.content}>
        <div className={styles.forum}>
          <Head label="Форум" route={ROUTES.HOME} />
          <div className={styles.forum__wrapper}>
            <ul className={cn(styles.forum__block, 'customScroll')}>
              {forums.map(item => (
                <Topic
                  name={item.owner}
                  label={item.label}
                  comments={item.comments}
                  key={item.id}
                  id={item.id}
                />
              ))}
            </ul>
          </div>
        </div>
        <Button
          variant="primary"
          className={styles.btn}
          type="button"
          onClick={handleClick}>
          Создать новую тему
        </Button>
      </main>

      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <ModalCreate onClose={() => setIsOpenModal(false)} />
        </Modal>
      )}
    </div>
  )
}

export default ForumPage
