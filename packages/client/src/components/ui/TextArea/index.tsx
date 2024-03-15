import { FC } from 'react'
import styles from './index.module.scss'

interface Props {
  label: string
  placeholder: string
}

const TextArea: FC<Props> = ({ label, placeholder }) => {
  return (
    <label className={styles.area}>
      <span className={styles.area__label}>{label}</span>
      <textarea className={styles.area__textarea} placeholder={placeholder} />
    </label>
  )
}

export default TextArea
