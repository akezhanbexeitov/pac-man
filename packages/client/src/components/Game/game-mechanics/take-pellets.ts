import { BASE_SQUARE_SIZE, PELLET_RADIUS } from '../constants'

const pelletSound = new Audio('/src/assets/sounds/take-pellet.mp3');
const playPelletSound = () => {
  pelletSound.play(); // Воспроизводим звук
  setTimeout(() => pelletSound.pause(), 100);
  pelletSound.currentTime = 0; 
};


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
      playPelletSound(); // Проигрываем короткий звук при взятии пеллета
    }
  })
  return pellets
}
