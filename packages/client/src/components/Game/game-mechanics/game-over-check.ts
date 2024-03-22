import { Ghost } from '../entities/ghost'
import { IFourPointsPosition } from '../models'
import { getGhostCollision } from './ghost-collision'

export const isGameOver = (
  ghosts: Ghost[],
  PMPosition: IFourPointsPosition
) => {
  const {
    topLeft: PMtopLeft,
    bottomRight: PMbottomRight,
    bottomLeft: PMbottomLeft,
    topRight: PMtopRight,
  } = PMPosition

  return ghosts.some(ghost => {
    const { bottomLeft, bottomRight, topLeft, topRight } = ghost.getPosition()
    if (
      getGhostCollision(bottomLeft, PMbottomLeft) ||
      getGhostCollision(bottomRight, PMbottomRight) ||
      getGhostCollision(topLeft, PMtopLeft) ||
      getGhostCollision(topRight, PMtopRight)
    ) {
      return true
    }
    return false
  })
}
