import styles from './index.module.scss'
import { Button, Head, Modal } from '@/components/ui'
import { ROUTES } from '@/typings'
import classnames from 'classnames'
import { ModalCreate, Topic } from '@/components'
import { forums } from '@/pages/ForumPage/forumMock'
import { useState } from 'react'

const ForumPage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  
  return (
    <div className={styles.wrapper}>
      <main className={styles.content}>
        <div className={styles.forum}>
          <Head label={'Форум'} route={ROUTES.HOME} />
          <div className={styles.forum__wrapper}>
            <div className={classnames(styles.forum__block, 'customScroll')}>
              {forums.map(item => (
                  <Topic name={item.owner} label={item.label} comments={item.comments} key={item.id} id={item.id} />
                )
              )}
            </div>
          </div>
        </div>
        <Button variant={'primary'} className={styles.btn} onClick={() => setIsOpenModal(true)}>Создать новую
          тему</Button>
      </main>
      <Modal
        onClose={() => setIsOpenModal(false)}
        isOpen={isOpenModal}
      >
        <ModalCreate onClose={() => setIsOpenModal(false)} />
      </Modal>
    </div>)
}

export default ForumPage
