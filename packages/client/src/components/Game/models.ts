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

export enum Direction {
  Up = 'up',
  Down = 'down',
  Left = 'left',
  Right = 'right',
}

export enum GameResult {
  win,
  over,
}
