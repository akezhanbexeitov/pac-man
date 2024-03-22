import { BASE_SQUARE_SIZE } from '../constants'
import { IFourPointsPosition } from '../models'
import { IState } from './state'

export const getPMPosition = (gameState: IState): IFourPointsPosition => {
  const xPos = gameState.pmPosition.xPos
  const yPos = gameState.pmPosition.yPos

  const topLeft = { xPos, yPos }
  const bottomLeft = { xPos, yPos: yPos + BASE_SQUARE_SIZE }
  const topRight = { xPos: xPos + BASE_SQUARE_SIZE, yPos }
  const bottomRight = { xPos: xPos + BASE_SQUARE_SIZE, yPos: yPos + BASE_SQUARE_SIZE }

  return { topLeft, bottomLeft, topRight, bottomRight }
}
