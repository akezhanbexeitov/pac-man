import { FC, HTMLInputTypeAttribute } from 'react'
import styles from './index.module.scss'
import { PatternFormat } from 'react-number-format'

interface Props {
  label: string
  type: HTMLInputTypeAttribute
  placeholder: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  name: string
  value: string
}

const Field: FC<Props> = ({
  label,
  type,
  placeholder,
  handleChange,
  name,
  value,
}) => {
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
            name={name}
            onChange={handleChange}
            value={value}
          />
        ) : (
          <input
            className={styles['field__input']}
            id={label}
            type={type}
            placeholder={placeholder}
            name={name}
            onChange={handleChange}
            value={value}
          />
        )}
      </label>
    </>
  )
}

export default Field
