import { BASE_SQUARE_SIZE, MOVE_SPEED, SCENE_WIDTH } from '../constants'
import {
  getIsBorderDown,
  getIsBorderLeft,
  getIsBorderRight,
  getIsBorderUp,
} from '../game-mechanics/border-collision'
import { IFourPointsPosition, IPosition } from '../models'
import { getRandom } from './utils'

export class Ghost {
  color: string
  x: number
  y: number
  ctx: CanvasRenderingContext2D
  bordersMap: IFourPointsPosition[]

  randomDirection = ''
  counter = 0

  constructor(
    color: string,
    position: IPosition,
    ctx: CanvasRenderingContext2D,
    bordersMap: IFourPointsPosition[]
  ) {
    this.color = color
    this.x = position.xPos
    this.y = position.yPos
    this.ctx = ctx
    this.bordersMap = bordersMap
    this.randomDirection = (() => {
      const random = getRandom(0, 4)
      return ['up', 'down', 'left', 'right'][random]
    })()
  }

  private move = () => {
    const numX = this.x / BASE_SQUARE_SIZE
    const numY = this.y / BASE_SQUARE_SIZE
    const position = this.getPosition()
    const positionCenter = [
      position.topLeft.xPos + BASE_SQUARE_SIZE / 2,
      position.topLeft.yPos + BASE_SQUARE_SIZE / 2,
    ]
    if (positionCenter[0] === -BASE_SQUARE_SIZE / 2) {
      this.x = 480
      this.y = 210
    }
    if (positionCenter[0] >= SCENE_WIDTH + BASE_SQUARE_SIZE / 2) {
      this.x = 0
      this.y = 210
    }

    if (Number.isInteger(numX) && Number.isInteger(numY)) {
      const freeWays = this.getFreeWays().filter(
        direction =>
          direction !== this.getOppositeDirection(this.randomDirection)
      )
      const random = getRandom(0, freeWays.length)
      this.randomDirection = freeWays[random - 1]
    }
    switch (this.randomDirection) {
      case 'up':
        this.y -= MOVE_SPEED
        break
      case 'down':
        this.y += MOVE_SPEED
        break
      case 'left':
        this.x -= MOVE_SPEED
        break
      case 'right':
        this.x += MOVE_SPEED
    }
  }

  private getOppositeDirection = (val: string): string => {
    if (val === 'left') {
      return 'right'
    }
    if (val === 'right') {
      return 'left'
    }
    if (val === 'up') {
      return 'down'
    }
    return 'top'
  }

  private getFreeWays = () => {
    const res = []
    const position = this.getPosition()
    if (!getIsBorderUp(this.bordersMap, position)) {
      if (this.counter <= 5) {
        res.push('up')
        this.counter++
      } else if (
        this.counter <= 6 &&
        !getIsBorderDown(this.bordersMap, position)
      ) {
        res.push('down')
        this.counter++
      } else if (this.counter >= 7) {
        this.counter = 0
      }
    }
    if (!getIsBorderDown(this.bordersMap, position)) {
      res.push('down')
    }
    if (!getIsBorderRight(this.bordersMap, position)) {
      res.push('right')
    }
    if (!getIsBorderLeft(this.bordersMap, position)) {
      res.push('left')
    }
    return res
  }

  getPosition = (): IFourPointsPosition => {
    return {
      topLeft: { xPos: this.x, yPos: this.y },
      bottomLeft: { xPos: this.x, yPos: this.y + BASE_SQUARE_SIZE },
      topRight: { xPos: this.x + BASE_SQUARE_SIZE, yPos: this.y },
      bottomRight: {
        xPos: this.x + BASE_SQUARE_SIZE,
        yPos: this.y + BASE_SQUARE_SIZE,
      },
    }
  }

  render = () => {
    this.move()
    this.ctx.fillStyle = this.color
    this.ctx.fillRect(this.x, this.y, BASE_SQUARE_SIZE, BASE_SQUARE_SIZE)
  }
}
