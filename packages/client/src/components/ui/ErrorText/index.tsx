import { FC } from 'react'
import styles from './index.module.scss'

interface Props {
  text: string
}

const ErrorText: FC<Props> = ({ text }) => {
  return <p className={styles.error}>{text}</p>
}

export default ErrorText
