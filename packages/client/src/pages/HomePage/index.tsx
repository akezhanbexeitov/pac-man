import styles from './index.module.scss'
import { Navigation } from '@/components'
import { Button } from '@/components/ui'
import Typewriter from 'typewriter-effect'
import { ROUTES } from '@/typings'
import { useLocation, useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const typeWriterOptions = {
    strings: [
      `Добро пожаловать в игру Pac-man. Это интерпретация легендарной игры,
       сделанная студией Epic Fail.`,
      `Спасайтесь от врагов и набирайте очки.`,
      `Следите за своим рейтингом в <a href='${ROUTES.LEADERBOARD}'>Leaderboard.</a>`,
      `Обсуждайте тонкости игры с знатоками на нашем <a href='${ROUTES.FORUM}'>Форуме</a>.`,
    ],
    autoStart: true,
    delay: 22,
    deleteSpeed: 1,
    loop: true,
    pauseFor: 3000,
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>YaPacman</h1>
      <main className={styles.content}>
        <div className={styles.page}>
          <div className={styles.pageWrapper}>
            <div className={styles.pageContent}>
              <section className={styles.about}>
                <h2 className={styles.aboutTitle}>Об игре</h2>
                <div className={styles.aboutText}>
                  <Typewriter options={typeWriterOptions} />
                </div>
              </section>
              <section className={styles.navigation}>
                <Navigation />
              </section>
            </div>
            <div className={styles.start}>
              <Button
                variant="secondary"
                onClick={() =>
                  navigate(ROUTES.GAME, {
                    state: { from: location.pathname },
                  })
                }>
                Start
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default HomePage
