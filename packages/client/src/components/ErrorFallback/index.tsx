import { FC } from 'react'
import { FallbackProps } from 'react-error-boundary'
import styles from './index.module.scss'

const ErrorFallback: FC<FallbackProps> = ({ error }) => {
  return (
    <div className={styles.errorWrapper}>
      <main className={styles.errorMain} role="alert">
        <h1>Что-то пошло не так</h1>
        <h2 className={styles.errorMessage}>{error.message}</h2>
      </main>
    </div>
  )
}

export default ErrorFallback
