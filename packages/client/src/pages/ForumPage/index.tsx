import styles from './index.module.scss'
import { Button, Field, Head } from '@/components/ui'
import { ROUTES } from '@/typings'
import classnames from 'classnames'
import { Topic } from '@/components'

const ForumPage = () => {
  return (
    <div className={styles.wrapper}>
      <main className={styles.content}>
        <div className={styles.forum}>
          <Head label={'Форум'} route={ROUTES.HOME} />
          <div className={styles.forum__wrapper}>
            <div className={classnames(styles.forum__block, 'customScroll')}>
              <Topic name={'Павел'} label={"Название темы очень длинное"} comments={5} />
              <Topic name={'Павел'} label={"Название темы очень длинное"} comments={5} />
              <Topic name={'Павел'} label={"Название темы очень длинное"} comments={5} />
              <Topic name={'Павел'} label={"Название темы очень длинное"} comments={5} />
              <Topic name={'Павел'} label={"Название темы очень длинное"} comments={5} />
              <Topic name={'Павел'} label={"Название темы очень длинное"} comments={5} />
              <Topic name={'Павел'} label={"Название темы очень длинное"} comments={5} />
            </div>
          </div>
        </div>
        <Button variant={'primary'} className={styles.btn}>Создать новую тему</Button>
      </main>
    </div>)
}

export default ForumPage
