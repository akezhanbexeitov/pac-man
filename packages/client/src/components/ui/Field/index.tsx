import { FC, HTMLInputTypeAttribute } from 'react'
import styles from './index.module.scss'

interface Props {
  label: string
  type: HTMLInputTypeAttribute
  placeholder: string
}

const Field: FC<Props> = ({ label, type, placeholder }) => {
  return (
    <>
      <label className={styles['field__label']} htmlFor={label}>
        <span className={styles['field__text']}>{label}</span>
        <input
          className={styles['field__input']}
          id={label}
          type={type}
          placeholder={placeholder}
        />
      </label>
    </>
  )
}

export default Field
