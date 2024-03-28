import { Ghost } from '../entities/ghost'
import { firstMap } from '../map/maps-list'
import { getMapBorders, getInitPosition, getPellets } from '../map/utils'
import { gameRenderingCycle } from './game-rendering-cycle'
import { getGameState, setInitState } from '../state/state'
import { clearScene } from './clear-scene'
import { renderPacMan, renderPellets, renderGhosts } from './render-fn'
import { PacMan } from '../entities/pac-man'

export const initGame = (canvas: HTMLCanvasElement) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const ctx = canvas.getContext('2d')!
  const bordersMap = getMapBorders(firstMap)
  const pmInitPosition = getInitPosition(firstMap, '+')
  const ghostsInitPosition = getInitPosition(firstMap, '!')
  const pacMan = new PacMan()
  const ghostGreen = new Ghost('green', ghostsInitPosition, ctx, bordersMap)
  const ghostRed = new Ghost('red', ghostsInitPosition, ctx, bordersMap)
  const ghostViolet = new Ghost('violet', ghostsInitPosition, ctx, bordersMap)

  setInitState({
    pmPosition: {
      xPos: pmInitPosition.xPos,
      yPos: pmInitPosition.yPos,
    },
    ghosts: [ghostGreen, ghostRed, ghostViolet],
    pellets: getPellets(firstMap),
    pacMan,
    bordersMap,
    score: 0,
    isWinGame: false,
    isGameOver: false,
    direction: "LEFT",
  })
  const renderFns = [clearScene, renderPacMan, renderPellets, renderGhosts]
  const sceneTimer = gameRenderingCycle(renderFns, ctx, getGameState)
  sceneTimer()
}
