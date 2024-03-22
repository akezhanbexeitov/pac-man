import styles from './index.module.scss'

const Loading = () => {
  return (
    <>
      <h1 className={styles.title}>Loading...</h1>
      <main className={styles.content}>
        <div className={styles.pacman}></div>
        <div className={styles.advice}></div>
      </main>
    </>
  )
}

export default Loading
