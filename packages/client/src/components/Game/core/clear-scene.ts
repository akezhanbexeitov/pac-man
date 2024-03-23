import { SCENE_HEIGHT, SCENE_WIDTH } from '../constants'
import { firstMap } from '../map/maps-list'
import { renderMap } from '../map/utils'

export const clearScene = (ctx: CanvasRenderingContext2D) => {
  ctx.fillStyle = '#000'
  ctx.fillRect(0, 0, SCENE_WIDTH, SCENE_HEIGHT)
  renderMap(ctx, firstMap)
}
