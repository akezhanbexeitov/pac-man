import { FC, HTMLInputTypeAttribute } from 'react'
import styles from './index.module.scss'
import { PatternFormat } from 'react-number-format'

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
        {label === 'Телефон' ? (
          <PatternFormat
            id={label}
            className={styles['field__input']}
            format="+7 (###) ### ####"
            placeholder={placeholder}
          />
        ) : (
          <input
            className={styles['field__input']}
            id={label}
            type={type}
            placeholder={placeholder}
          />
        )}
      </label>
    </>
  )
}

export default Field
