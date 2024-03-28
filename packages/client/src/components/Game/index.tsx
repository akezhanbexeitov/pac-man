import { useEffect, useMemo, useRef, useState } from 'react'
import { initGame } from './core/init-game'
import { SCENE_HEIGHT, SCENE_WIDTH } from './constants'
import { handleKeyDown, handleKeyUp } from './game-mechanics/pacman-navigate'
import styles from './index.module.scss'
import { Button, Modal } from '../ui'
import { useNavigate } from 'react-router-dom'
import { user } from '@/store/selectors/authUserSelectors'
import { useSelector } from 'react-redux'
import { setPause } from './state/state'
import { GameResult } from './models'

const Game = () => {
  const userInfo = useSelector(user)
  const name = userInfo.display_name
  const canvasRef = useRef<null | HTMLCanvasElement>(null)
  const inputRef = useRef<null | HTMLInputElement>(null)
  const gameOverRef = useRef<null | HTMLDivElement>(null)
  const gameWinRef = useRef<null | HTMLDivElement>(null)
  const scoreRef = useRef<null | HTMLDivElement>(null)
  const navigate = useNavigate()

  const [showModal, setShowModal] = useState(false)
  const [result, setResult] = useState<GameResult | null>(null)
  const [isPause, setIsPause] = useState(false)

  const gameOverObserver = useMemo(() => {
    return new MutationObserver(() => {
      setShowModal(true)
      setResult(GameResult.over)
    })
  }, [])
  const gameWinObserver = useMemo(() => {
    return new MutationObserver(() => {
      setShowModal(true)
      setResult(GameResult.win)
    })
  }, [])

  const onReset = () => {
    location.reload()
  }

  const onPause = () => {
    setPause()
    setIsPause(prev => !prev)
  }

  const onExit = () => {
    navigate(-1)
  }

  useEffect(() => {
    if (inputRef.current && gameOverRef.current && gameWinRef.current) {
      inputRef.current.focus()
      inputRef.current.addEventListener('keydown', handleKeyDown)
      inputRef.current.addEventListener('keyup', handleKeyUp)
      scoreRef.current = document.querySelector('#scoreCounter')
      gameOverObserver.observe(gameOverRef.current, {
        attributes: true,
      })
      gameWinObserver.observe(gameWinRef.current, {
        attributes: true,
      })
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      initGame(canvasRef.current!)
    }
  }, [])

  return (
    <main className={styles.game} onClick={() => inputRef.current?.focus()}>
      {showModal && (
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        <Modal onClose={() => {}}>
          <div className={styles.game__modalWrapper}>
            <h1 className={styles.game__modalTitleTop}>
              {result && result === GameResult.over ? 'Game over' : 'Victory'}
            </h1>
            <p
              className={
                styles.game__modalScore
              }>{`Очки - ${scoreRef.current?.innerHTML}`}</p>
            <h3 className={styles.game__modalTitle}>
              {result && result === GameResult.over
                ? 'Одна ошибка - и ты ошибся'
                : 'У тебя получилось. Поздравляем!'}
            </h3>
            <div className={styles.game__buttonsContainer}>
              <Button
                className={styles.game__button}
                onClick={() => onReset()}
                variant="secondary">
                <p className={styles.game__buttonCaption}>Повторить</p>
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
        </Modal>
      )}
      <div className={styles.game__content}>
        <div ref={gameOverRef} id="gameOverListener"></div>
        <div ref={gameWinRef} id="gameWinListener"></div>
        <div className={styles.game__block}>
          <div className={styles.game__canvasWrapper}>
            {isPause && <div className={styles.game__pause}></div>}
            <canvas ref={canvasRef} width={SCENE_WIDTH} height={SCENE_HEIGHT} />
          </div>
          <input
            className={styles.game__input}
            ref={inputRef}
            style={{ opacity: 0 }}
          />
          <div className={styles.game__info}>
            <p className={styles.game__loginTitle}>Логин</p>
            <h3 className={styles.game__login}>{name || 'Логин не задан'}</h3>
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
              <Button
                onClick={() => onPause()}
                className={styles.game__button}
                variant="secondary">
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
