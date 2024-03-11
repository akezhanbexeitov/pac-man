import { Button, Field } from '@/components/ui'
import styles from './index.module.scss'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate()

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    console.log('Submitted')
  }

  return (
    <div className={styles['login__layout']}>
      <div className={styles['login__background']}>
        <main className={styles['login__card']}>
          <h1>Вход</h1>

          <form onSubmit={handleSubmit} className={styles['login__form']}>
            <Field label="Логин" type="text" />
            <Field label="Пароль" type="password" />
            <Button variant="primary">Авторизоваться</Button>
          </form>

          <Button
            variant="secondary"
            type="button"
            onClick={() => navigate('/registration')}>
            Нет аккаунта?
          </Button>
        </main>
      </div>
    </div>
  )
}

export default LoginPage
