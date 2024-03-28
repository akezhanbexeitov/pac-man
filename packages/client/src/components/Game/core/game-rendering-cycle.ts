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

  function sceneTimer(timeStamp = 0) {
    const deltaTime = timeStamp - startTime
    const rendering = requestAnimationFrame(sceneTimer)

    if (deltaTime >= interval) {
      const currentState = getState()
      if (currentState.isWinGame) {
        cancelAnimationFrame(rendering)
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const gameWinDiv = document.querySelector('#gameWinListener')!
        gameWinDiv.classList.add('game__gameWin')
      }
      if (currentState.isGameOver) {
        cancelAnimationFrame(rendering)
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const gameOverDiv = document.querySelector('#gameOverListener')!
        gameOverDiv.classList.add('game__gameOver')
      }
      startTime = timeStamp
      if (!currentState.isPause) {
        fns.forEach(i => i(ctx, currentState))
      }
    }
  }
  return sceneTimer
}
