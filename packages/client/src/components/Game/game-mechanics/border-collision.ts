import { IFourPointsPosition } from '../models'

export const getIsBorderUp = (borders: IFourPointsPosition[], PMposition: IFourPointsPosition) => {
  const { topLeft: PMTopLeft, topRight: PMTopRight } = PMposition
  return borders.some((border) => {
    const { bottomLeft, bottomRight } = border
    const isPMTopLeftBorder =
      PMTopLeft.yPos === bottomLeft.yPos &&
      PMTopLeft.xPos >= bottomLeft.xPos &&
      PMTopLeft.xPos < bottomRight.xPos
    const isPMTopRightBorder =
      PMTopRight.yPos === bottomLeft.yPos &&
      PMTopRight.xPos > bottomLeft.xPos &&
      PMTopRight.xPos <= bottomRight.xPos
    return isPMTopLeftBorder || isPMTopRightBorder
  })
}

export const getIsBorderDown = (
  borders: IFourPointsPosition[],
  PMposition: IFourPointsPosition
) => {
  const { bottomLeft: PMBottomLeft, bottomRight: PMBottomRight } = PMposition
  return borders.some((border) => {
    const { topLeft, topRight } = border
    const isPMBottomLeftBorder =
      PMBottomLeft.yPos === topLeft.yPos &&
      PMBottomLeft.xPos >= topLeft.xPos &&
      PMBottomLeft.xPos < topRight.xPos
    const isPMBottomRightBorder =
      PMBottomRight.yPos === topRight.yPos &&
      PMBottomRight.xPos > topLeft.xPos &&
      PMBottomRight.xPos <= topRight.xPos
    return isPMBottomLeftBorder || isPMBottomRightBorder
  })
}

export const getIsBorderRight = (
  borders: IFourPointsPosition[],
  PMposition: IFourPointsPosition
) => {
  const { topRight: PMtopRight, bottomRight: PMbottomRight } = PMposition
  return borders.some((border) => {
    const { topLeft, bottomLeft } = border
    const isPMtopRightBorder =
      PMtopRight.xPos === topLeft.xPos &&
      PMtopRight.yPos >= topLeft.yPos &&
      PMtopRight.yPos < bottomLeft.yPos
    const isPMbottomRightBorder =
      PMbottomRight.xPos === bottomLeft.xPos &&
      PMbottomRight.yPos > topLeft.yPos &&
      PMbottomRight.yPos <= bottomLeft.yPos
    return isPMtopRightBorder || isPMbottomRightBorder
  })
}

export const getIsBorderLeft = (
  borders: IFourPointsPosition[],
  PMposition: IFourPointsPosition
) => {
  const { topLeft: PMtopLeft, bottomLeft: PMbottomLeft } = PMposition
  return borders.some((border) => {
    const { topRight, bottomRight } = border
    const isPMtopLeftBorder =
      PMtopLeft.xPos === topRight.xPos &&
      PMtopLeft.yPos >= topRight.yPos &&
      PMtopLeft.yPos < bottomRight.yPos
    const isPMbottomLeftBorder =
      PMbottomLeft.xPos === bottomRight.xPos &&
      PMbottomLeft.yPos > topRight.yPos &&
      PMbottomLeft.yPos <= bottomRight.yPos
    return isPMtopLeftBorder || isPMbottomLeftBorder
  })
}
