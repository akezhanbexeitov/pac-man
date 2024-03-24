import { FC, HTMLInputTypeAttribute } from 'react'
import styles from './index.module.scss'
import { PatternFormat } from 'react-number-format'
import classNames from 'classnames'

interface Props {
  label: string
  type: HTMLInputTypeAttribute
  placeholder: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  name: string
  value: string
  error?: boolean
}

const Field: FC<Props> = ({
  label,
  type,
  placeholder,
  handleChange,
  name,
  value,
  error,
}) => {
  return (
    <>
      <label className={styles['field__label']} htmlFor={label}>
        <span className={styles['field__text']}>{label}</span>
        {label === 'Телефон' ? (
          <PatternFormat
            id={label}
            className={classNames(
              styles['field__input'],
              error && styles['field__input-error']
            )}
            format="+7 (###) ### ####"
            placeholder={placeholder}
            name={name}
            onChange={handleChange}
            value={value}
          />
        ) : (
          <input
            className={classNames(
              styles['field__input'],
              error && styles['field__input-error']
            )}
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
