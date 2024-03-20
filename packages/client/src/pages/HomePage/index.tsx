import styles from './index.module.scss'
import {Navigation} from '@/components'
import { useState } from 'react'
import {Button} from "@/components/ui";

const HomePage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  return (
    <div className={styles.wrapper}>

      <h1 className={styles.title}>YaPacman</h1>
      <main className={styles.content}>
        <div className={styles.page}>
          <div className={styles.pageWrapper}>
            <div className={styles.pageContent}>
              <section className={styles.about}>
                <h2 className={styles.aboutTitle}>Об игре</h2>
                <p className={styles.aboutText}>
                  Что-то об игреЧто-то об игреЧто-то об игреЧто-то об игреЧто-то об игреЧто-то об игреЧто-то об игреЧто-то об игреЧто-то об игреЧто-то об игреЧто-то об игреЧто-то об игре
                </p>
              </section>
              <section className={styles.navigation}>
                <Navigation />
              </section>
            </div>
            <div className={styles.start}>
              <Button variant="secondary">Start</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default HomePage
