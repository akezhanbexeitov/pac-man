import { PELLET_RADIUS } from '../constants'
import { IState } from '../state/state'

export const renderPacMan = (ctx: CanvasRenderingContext2D, state: IState) => {
  const { pacMan } = state
  pacMan.render(ctx, state)
}

export const renderGhosts = (_: CanvasRenderingContext2D, state: IState) => {
  const { ghosts } = state
  ghosts.forEach(g => g.render())
}

export const renderPellets = (ctx: CanvasRenderingContext2D, state: IState) => {
  ctx.fillStyle = 'white'
  const { pellets } = state
  pellets.forEach(i => {
    const [x, y] = i
    ctx.fillRect(x, y, PELLET_RADIUS, PELLET_RADIUS)
  })
}
