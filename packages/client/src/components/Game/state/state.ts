import { BASE_SQUARE_SIZE, MOVE_SPEED, SCENE_WIDTH } from '../constants'
import { IFourPointsPosition, IPosition } from '../models'
import {
  getIsBorderDown,
  getIsBorderLeft,
  getIsBorderRight,
  getIsBorderUp,
} from '../game-mechanics/border-collision'
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
}

let gameState: IState = {
  pmPosition: {
    xPos: 0,
    yPos: 0,
  },
  pacMan: new PacMan(),
  ghosts: [],
  bordersMap: [],
  pellets: [],
  score: 0,
  isWinGame: false,
  isGameOver: false,
}

export const setInitState = (state: IState) => {
  gameState = { ...state }
}

export const getGameState = () => {
  const pmPosition = getPMPosition(gameState)
  const { topLeft: PMtopLeft } = pmPosition
  const pmPositionCenter = [
    PMtopLeft.xPos + BASE_SQUARE_SIZE / 2,
    PMtopLeft.yPos + BASE_SQUARE_SIZE / 2,
  ]

  gameState.pellets = takePellets(gameState.pellets, pmPositionCenter, () => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const scoreCounter = document.querySelector('#scoreCounter')!
    gameState.score += 10
    scoreCounter.innerHTML = String(gameState.score)
  })

  if (pmPositionCenter[0] === -BASE_SQUARE_SIZE / 2) {
    gameState.pmPosition = { xPos: 480, yPos: 210 }
  }
  if (pmPositionCenter[0] >= SCENE_WIDTH + BASE_SQUARE_SIZE / 2) {
    gameState.pmPosition = { xPos: 0, yPos: 210 }
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
      }
      break
    case 'ArrowLeft':
      if (!getIsBorderLeft(gameState.bordersMap, getPMPosition(gameState))) {
        gameState.pmPosition.xPos -= MOVE_SPEED
      }
  }
  switch (controllerState.pressedVerticallKey) {
    case 'ArrowUp':
      if (!getIsBorderUp(gameState.bordersMap, getPMPosition(gameState))) {
        gameState.pmPosition.yPos -= MOVE_SPEED
      }
      break
    case 'ArrowDown':
      if (!getIsBorderDown(gameState.bordersMap, getPMPosition(gameState))) {
        gameState.pmPosition.yPos += MOVE_SPEED
      }
  }
  return gameState
}
