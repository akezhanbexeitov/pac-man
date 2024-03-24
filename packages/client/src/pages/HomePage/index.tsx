import styles from './index.module.scss'
import { Navigation } from '@/components'
import { Button } from '@/components/ui'
import Typewriter from 'typewriter-effect'
import { ROUTES } from '@/typings'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '@/store/store'
import AuthService from '@/services/auth'
import { addUserInfo, logIn } from '@/store/actions/authUser'
import { isAuth } from '@/store/selectors/authUserSelectors'

import {Loading} from "@/pages";

const HomePage = () => {
  const [loading, setLoading] = useState(false)
  const typeWriterOptions = {
    strings: [
      `Добро пожаловать в игру Pac-man. Это интерпретация легендарной игры,
       сделанная студией Epic Fail.`,
      `Спасайтесь от врагов и набирайте очки.`,
      `Следите за своим рейтингом в <a href="${ROUTES.LEADERBOARD}">Leaderboard.</a>`,
      `Обсуждайте тонкости игры с знатоками на нашем <a href="${ROUTES.FORUM}">Форуме</a>.`,
    ],
    autoStart: true,
    delay: 22,
    deleteSpeed: 1,
    loop: true,
    pauseFor: 3000,
  }
  const handleStart = () => {
    setLoading(true);
  }
  //todo перенести в HOC компонент для авторизации
  const dispatch: AppDispatch = useDispatch()
  const { getMe } = AuthService()
  const userAuth = useSelector(isAuth)

  useEffect(() => {
    if (!userAuth) {
      (async function() {
        try {
          const user = await getMe()
          if (user && !('isAxiosError' in user)) {
            dispatch(addUserInfo(user))
            dispatch(logIn())
          }
        } catch (e) {
          console.log(e)
        }
      })()
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      {loading ?
        <Loading />
        :
        <>
          <h1 className={styles.title}>YaPacman</h1>
          <main className={styles.content}>
            <div className={styles.page}>
              <div className={styles.pageWrapper}>
                <div className={styles.pageContent}>
                  <section className={styles.about}>
                    <h2 className={styles.aboutTitle}>Об игре</h2>
                    <div className={styles.aboutText}>
                      <Typewriter
                        options={typeWriterOptions}
                      />
                    </div>
                  </section>
                  <section className={styles.navigation}>
                    <Navigation/>
                  </section>
                </div>
                <div className={styles.start}>
                  <Button disabled={loading} onClick={handleStart} variant="secondary">Start</Button>
                </div>
              </div>
            </div>
          </main>
        </>
      }
    </div>
  )
}

export default HomePage
