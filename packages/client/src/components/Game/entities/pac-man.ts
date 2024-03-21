import { BASE_SQUARE_SIZE } from '../constants'
import { IState } from '../state/state'

export class PacMan {
  render = (ctx: CanvasRenderingContext2D, state: IState | undefined) => {
    ctx.fillStyle = 'yellow'
    if (state) {
      const { xPos, yPos } = state.pmPosition
      ctx.fillRect(xPos, yPos, BASE_SQUARE_SIZE, BASE_SQUARE_SIZE)
    }
  }
}
