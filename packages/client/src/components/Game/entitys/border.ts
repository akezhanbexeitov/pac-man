import { BASE_SQUARE_SIZE } from '../constants'

interface IPosition {
  x: number
  y: number
}

export class Border {
  width: number
  height: number
  ctx: CanvasRenderingContext2D
  position: IPosition

  constructor(ctx: CanvasRenderingContext2D, position: IPosition) {
    this.position = position
    this.width = BASE_SQUARE_SIZE
    this.height = BASE_SQUARE_SIZE
    this.ctx = ctx
  }

  draw() {
    this.ctx.fillStyle = 'blue'
    this.ctx.fillRect(
      this.position.x * this.width,
      this.position.y * this.height,
      this.width,
      this.height
    )
  }
}
