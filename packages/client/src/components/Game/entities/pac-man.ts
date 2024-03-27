import { BASE_SQUARE_SIZE } from '../constants'
import { IState } from '../state/state'

export class PacMan {
  // Определяем переменную для анимации рта
  private mouthOpen = false
  private animationInterval: NodeJS.Timeout | null = null
  
  render = (ctx: CanvasRenderingContext2D, state: IState | undefined) => {
    if (!this.animationInterval) {
      this.animationInterval = setInterval(() => {
        this.mouthOpen = !this.mouthOpen
      }, 500)
    }
    ctx.fillStyle = 'yellow'
    if (state) {
      const { xPos, yPos } = state.pmPosition
      
      let rotation = 0
      switch (state.direction) {
        case 'UP':
          rotation = 1.5 * Math.PI
          break
        case 'DOWN':
          rotation = 0.5 * Math.PI
          break
        case 'LEFT':
          rotation = Math.PI
          break
        case 'RIGHT':
          rotation = 0
          break
        default:
          break
      }
      
      ctx.save()
      ctx.translate(xPos + BASE_SQUARE_SIZE / 2, yPos + BASE_SQUARE_SIZE / 2)
      ctx.rotate(rotation)
      
      ctx.beginPath()
      const mouthAngle = this.mouthOpen ? Math.PI * 0.2 : 0
      ctx.arc(0, 0, BASE_SQUARE_SIZE / 2, mouthAngle, Math.PI * 1.9 - mouthAngle, false)
      ctx.lineTo(0, 0)
      ctx.closePath()
      ctx.fill()
      
      ctx.restore()
    } else {
      if (this.animationInterval) {
        clearInterval(this.animationInterval)
        this.animationInterval = null
      }
    }
  }
}
