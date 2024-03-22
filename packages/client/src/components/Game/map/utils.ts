import { BASE_SQUARE_SIZE } from '../constants'
import { Border } from '../entities/border'
import { IFourPointsPosition, IMap, IPosition } from '../models'

export const renderMap = (ctx: CanvasRenderingContext2D, map: IMap) => {
  map.forEach((row, rowIndex) => {
    row.forEach((element, elementIndex) => {
      if (element === '-') {
        const border = new Border(ctx, { x: elementIndex, y: rowIndex })
        border.draw()
      }
    })
  })
}

export const getMapBorders = (map: IMap): IFourPointsPosition[] => {
  const res: IFourPointsPosition[] = []
  map.forEach((row, rowIndex) => {
    row.forEach((element, elementIndex) => {
      if (element === '-') {
        const baseX = elementIndex * BASE_SQUARE_SIZE
        const baseY = rowIndex * BASE_SQUARE_SIZE
        res.push({
          topLeft: { xPos: baseX, yPos: baseY },
          bottomLeft: { xPos: baseX, yPos: baseY + BASE_SQUARE_SIZE },
          topRight: { xPos: baseX + BASE_SQUARE_SIZE, yPos: baseY },
          bottomRight: {
            xPos: baseX + BASE_SQUARE_SIZE,
            yPos: baseY + BASE_SQUARE_SIZE,
          },
        })
      }
    })
  })
  return res
}

export const getInitPosition = (map: IMap, type: '+' | '!'): IPosition => {
  const position: IPosition = {
    xPos: 0,
    yPos: 0,
  }
  map.forEach((row, rowIndex) => {
    row.forEach((element, elementIndex) => {
      if (element === type) {
        position.xPos = elementIndex * BASE_SQUARE_SIZE
        position.yPos = rowIndex * BASE_SQUARE_SIZE
      }
    })
  })
  return position
}

export const getPellets = (map: IMap): [number, number][] => {
  const res: [number, number][] = []
  map.forEach((row, rowIndex) => {
    row.forEach((element, elementIndex) => {
      if (element === ' ') {
        const xPos = elementIndex * BASE_SQUARE_SIZE + BASE_SQUARE_SIZE / 2
        const yPos = rowIndex * BASE_SQUARE_SIZE + BASE_SQUARE_SIZE / 2
        res.push([xPos, yPos])
      }
    })
  })
  return res
}
