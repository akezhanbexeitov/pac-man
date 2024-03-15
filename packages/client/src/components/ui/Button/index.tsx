import { ButtonHTMLAttributes, FC } from 'react'
import classnames from 'classnames'
import styles from './index.module.scss'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary' | 'danger',
  className?: string
}

const Button: FC<Props> = ({ variant, className, children, ...rest }) => {
  const btnClass = {
    [styles['btn-primary']]: variant === 'primary',
    [styles['btn-secondary']]: variant === 'secondary'
  }
  
  return (
    <button className={classnames(btnClass, className)} {...rest}>
      {children}
    </button>
  )
}

export default Button
