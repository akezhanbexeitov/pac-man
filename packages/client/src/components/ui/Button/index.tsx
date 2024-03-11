import { ButtonHTMLAttributes, FC } from 'react'
import classnames from 'classnames'
import styles from './index.module.scss'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary' | 'danger'
}

const Button: FC<Props> = ({ variant, children, ...rest }) => {
  const btnClass = classnames({
    [styles['btn-primary']]: variant === 'primary',
    [styles['btn-secondary']]: variant === 'secondary',
  })

  return (
    <button className={btnClass} {...rest}>
      {children}
    </button>
  )
}

export default Button
