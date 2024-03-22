import { BASE_SQUARE_SIZE, PELLET_RADIUS } from '../constants'

export const takePellets = (
  pellets: [number, number][],
  pmPosition: number[],
  counter: () => void
): [number, number][] => {
  pellets.forEach((pellet, index) => {
    if (
      Math.hypot(pellet[0] - pmPosition[0], pellet[1] - pmPosition[1]) <
      PELLET_RADIUS + BASE_SQUARE_SIZE / 2
    ) {
      pellets.splice(index, 1)
      counter()
    }
  })
  return pellets
}
