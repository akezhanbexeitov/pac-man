import styles from './index.module.scss'
import { useEffect, useRef, useState } from 'react'
import { CANVAS_HEIGHT, CANVAS_WIDTH } from '@/pages/HomePage/Loading/PacMan/constants'
import { PacMan } from '@/pages/HomePage/Loading/PacMan/PacMan'
import { advices } from '@/pages/HomePage/Loading/advicesMock'

const Loading = () => {
  const ref = useRef<null | HTMLCanvasElement>(null)
  const [adviceIndex, setAdviceIndex] = useState(0)
  const backgroundMusic = new Audio('/src/assets/sounds/loading.mp3')
  
  const playBackgroundMusic = () => {
    backgroundMusic.volume = 0.5 // Установка громкости
    backgroundMusic.loop = true // Повторение музыки
    backgroundMusic.play()
  }
  
  useEffect(() => {
    const rand = Math.floor(Math.random() * (3))
    setAdviceIndex(rand)
    
    const context = ref.current?.getContext('2d')
    if (context) {
      const pacManAnimation = new PacMan(context)
      pacManAnimation.start()
    }
    playBackgroundMusic()
    return () => {
      backgroundMusic.pause();
      backgroundMusic.currentTime = 0;
      backgroundMusic.onended = null;
    };
  }, [])
  
  return (
    <>
      <h1 className={styles.title}>Loading...</h1>
      <main className={styles.content}>
        <div className={styles.pacman}>
          <canvas ref={ref} id='pacman_canvas' height={CANVAS_HEIGHT} width={CANVAS_WIDTH}></canvas>
        </div>
        <div className={styles.advice}>
          <h3 className={styles.adviceTitle}>{advices[adviceIndex].title}</h3>
          <p className={styles.adviceText}>{advices[adviceIndex].text}</p>
        </div>
      </main>
    </>
  )
}

export default Loading
