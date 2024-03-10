import { FC } from 'react'
import classnames from 'classnames'

interface Props extends React.HTMLProps<HTMLButtonElement> {
  type: 'primary' | 'secondary' | 'danger'
}

const Button: FC<Props> = ({ type, children, ...rest }) => {
  const btnClass = classnames({
    'btn-primary': type === 'primary',
    'btn-secondary': type === 'secondary',
    'btn-danger': type === 'danger',
  })

  return (
    <button className={btnClass} {...rest}>
      {children}
    </button>
  )
}

export default Button
