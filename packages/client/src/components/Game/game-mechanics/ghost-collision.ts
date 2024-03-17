import { BASE_SQUARE_SIZE } from '../constants'
import { IPosition } from '../models'

export const getGhostCollision = (ghostPosition: IPosition, PMPosition: IPosition) => {
  const size = BASE_SQUARE_SIZE
  const { xPos: ghostPointx, yPos: ghostPointy } = ghostPosition
  const { xPos: PMPointx, yPos: PMPointy } = PMPosition
  if (
    ghostPointx < PMPointx + size &&
    ghostPointx + size > PMPointx &&
    ghostPointy < PMPointy + size &&
    ghostPointy + size > PMPointy
  ) {
    return true
  } else {
    return false
  }
}
