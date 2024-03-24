import { useEffect, useRef } from 'react'
import { initGame } from './core/init-game'
import { SCENE_HEIGHT, SCENE_WIDTH } from './constants'
import { handleKeyDown, handleKeyUp } from './game-mechanics/pacman-navigate'
import styles from './index.module.scss'
import { Button } from '../ui'
import { useNavigate } from 'react-router-dom'

const Game = () => {
  const canvasRef = useRef<null | HTMLCanvasElement>(null)
  const inputRef = useRef<null | HTMLInputElement>(null)
  const navigate = useNavigate()

  const onExit = () => {
    navigate(-1)
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
      inputRef.current.addEventListener('keydown', handleKeyDown)
      inputRef.current.addEventListener('keyup', handleKeyUp)
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      initGame(canvasRef.current!)
    }
  }, [])

  return (
    <main className={styles.game} onClick={() => inputRef.current?.focus()}>
      <div className={styles.game__content}>
        <div className={styles.game__block}>
          <canvas ref={canvasRef} width={SCENE_WIDTH} height={SCENE_HEIGHT} />
          <input
            className={styles.game__input}
            ref={inputRef}
            style={{ opacity: 0 }}
          />
          <div className={styles.game__info}>
            <p className={styles.game__loginTitle}>Логин</p>
            <h3 className={styles.game__login}>Нагибатор</h3>
            <div className={styles.game__statistics}>
              <div className={styles.game__statisticsItem}>
                <p className={styles.game__statisticsTitle}>Место</p>
                <p className={styles.game__statisticsDots}>
                  .............................................
                </p>
                <p className={styles.game__score}>0</p>
              </div>
              <div className={styles.game__statisticsItem}>
                <p className={styles.game__statisticsTitle}>Очки</p>
                <p className={styles.game__statisticsDots}>
                  .............................................
                </p>
                <p id="scoreCounter" className={styles.game__score}>
                  0
                </p>
              </div>
              <div className={styles.game__statisticsItem}>
                <p className={styles.game__statisticsTitle}>Жизней</p>
                <p className={styles.game__statisticsDots}>
                  .............................................
                </p>
                <p className={styles.game__score}>0</p>
              </div>
            </div>
            <div className={styles.game__buttonsContainer}>
              <Button className={styles.game__button} variant="secondary">
                <p className={styles.game__buttonCaption}>Пауза</p>
              </Button>
              <Button
                onClick={() => onExit()}
                className={styles.game__button}
                variant="secondary">
                <p
                  style={{ color: '#FF0000' }}
                  className={styles.game__buttonCaption}>
                  Выйти
                </p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Game
