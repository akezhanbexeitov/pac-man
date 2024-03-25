import {
  BASE_SQUARE_SIZE,
  LEFT_SIDE_X,
  LEFT_SIDE_Y,
  MOVE_SPEED,
  RIGHT_SIDE_X,
  RIGHT_SIDE_Y,
  SCENE_WIDTH
} from '../constants'
import { IFourPointsPosition, IPosition } from '../models'
import { getIsBorderDown, getIsBorderLeft, getIsBorderRight, getIsBorderUp } from '../game-mechanics/border-collision'
import { takePellets } from '../game-mechanics/take-pellets'
import { Ghost } from '../entities/ghost'
import { isGameOver } from '../game-mechanics/game-over-check'
import { controllerState } from '../game-mechanics/pacman-navigate'
import { getPMPosition } from './utils'
import { PacMan } from '../entities/pac-man'

export interface IState {
  pmPosition: IPosition
  pacMan: PacMan
  ghosts: Ghost[]
  bordersMap: IFourPointsPosition[]
  pellets: [number, number][]
  score: number
  isWinGame: boolean
  isGameOver: boolean
  direction: 'UP' | 'DOWN' | 'LEFT' | 'RIGHT',
  move: boolean
}

let gameState: IState = {
  pmPosition: {
    xPos: 0,
    yPos: 0
  },
  pacMan: new PacMan(),
  ghosts: [],
  bordersMap: [],
  pellets: [],
  score: 0,
  isWinGame: false,
  isGameOver: false,
  direction: 'LEFT',
  move: false
}

export const setInitState = (state: IState) => {
  gameState = { ...state }
}

export const getGameState = () => {
  const pmPosition = getPMPosition(gameState)
  const { topLeft: PMtopLeft } = pmPosition
  const pmPositionCenter = [
    PMtopLeft.xPos + BASE_SQUARE_SIZE / 2,
    PMtopLeft.yPos + BASE_SQUARE_SIZE / 2
  ]
  
  gameState.pellets = takePellets(gameState.pellets, pmPositionCenter, () => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const scoreCounter = document.querySelector('#scoreCounter')!
    gameState.score += 10
    scoreCounter.innerHTML = String(gameState.score)
  })
  
  if (pmPositionCenter[0] === -BASE_SQUARE_SIZE / 2) {
    gameState.pmPosition = { xPos: RIGHT_SIDE_X, yPos: RIGHT_SIDE_Y }
  }
  if (pmPositionCenter[0] >= SCENE_WIDTH + BASE_SQUARE_SIZE / 2) {
    gameState.pmPosition = { xPos: LEFT_SIDE_X, yPos: LEFT_SIDE_Y }
  }
  if (isGameOver(gameState.ghosts, pmPosition)) {
    gameState.isGameOver = true
  }
  if (gameState.pellets.length === 0) {
    gameState.isWinGame = true
  }
  
  switch (controllerState.pressedHorizontalKey) {
    case 'ArrowRight':
      if (!getIsBorderRight(gameState.bordersMap, getPMPosition(gameState))) {
        gameState.pmPosition.xPos += MOVE_SPEED
        gameState.direction = 'RIGHT'
      }
      break
    case 'ArrowLeft':
      if (!getIsBorderLeft(gameState.bordersMap, getPMPosition(gameState))) {
        gameState.pmPosition.xPos -= MOVE_SPEED
        gameState.direction = 'LEFT'
        
      }
  }
  switch (controllerState.pressedVerticallKey) {
    case 'ArrowUp':
      if (!getIsBorderUp(gameState.bordersMap, getPMPosition(gameState))) {
        gameState.pmPosition.yPos -= MOVE_SPEED
        gameState.direction = 'UP'
        
      }
      break
    case 'ArrowDown':
      if (!getIsBorderDown(gameState.bordersMap, getPMPosition(gameState))) {
        gameState.pmPosition.yPos += MOVE_SPEED
        gameState.direction = 'DOWN'
      }
  }
  return gameState
}
