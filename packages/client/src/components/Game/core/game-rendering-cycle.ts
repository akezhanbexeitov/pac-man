// для отрисовки нового кадра на сцене
// fns - рендер функнции

import { FRAMES_PER_MS } from '../constants'
import { IState } from '../state/state'

type RenderFunctions = ((
  ctx: CanvasRenderingContext2D,
  state: IState
) => void)[]

export function gameRenderingCycle(
  fns: RenderFunctions,
  ctx: CanvasRenderingContext2D,
  getState: () => IState,
  interval = FRAMES_PER_MS
) {
  let startTime = 0
  const backgroundMusic = new Audio('/src/assets/sounds/game-over.mp3')
  
  const playBackgroundMusic = () => {
    backgroundMusic.volume = 0.4 // Установка громкости
    backgroundMusic.loop = true // Повторение музыки
    backgroundMusic.play()
    setTimeout(() => {
      backgroundMusic.pause(); // Приостановить воспроизведение музыки
    }, 1600);
  }
  
  function sceneTimer(timeStamp = 0) {
    const deltaTime = timeStamp - startTime
    const rendering = requestAnimationFrame(sceneTimer)

    if (deltaTime >= interval) {
      const currentState = getState()
      if (currentState.isWinGame || currentState.isGameOver) {
        cancelAnimationFrame(rendering)
        playBackgroundMusic()
      }
      startTime = timeStamp
      fns.forEach(i => i(ctx, currentState))
    }
  }
  return sceneTimer
}
