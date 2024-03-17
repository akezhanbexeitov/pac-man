export type IMap = (' ' | '-' | '+' | '*' | '!')[][]

export interface IPosition {
  xPos: number
  yPos: number
}

export interface IFourPointsPosition {
  topLeft: IPosition
  bottomLeft: IPosition
  topRight: IPosition
  bottomRight: IPosition
}
