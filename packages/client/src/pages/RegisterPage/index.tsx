import AuthService from '@/services/auth'
import { APIError, ROUTES, SignupResponse } from '@/typings'
import { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import styles from './index.module.scss'
import { Button, Field } from '@/components/ui'
import { useNavigate } from 'react-router-dom'

const RegisterPage = () => {
  const [data, setData] = useState<SignupResponse | null>(null)
  const [error, setError] = useState<APIError | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { signup } = AuthService()
  const navigate = useNavigate()

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    console.log('Submitted')
  }

  // useEffect(() => {
  //   const request = async () => {
  //     try {
  //       setIsLoading(true)

  //       const response = await signup({
  //         first_name: 'John',
  //         second_name: 'Doe',
  //         phone: '+77777777777',
  //         login: 'john_doe',
  //         email: 'john@gmail.com',
  //         password: 'password',
  //       })

  //       setData(response as SignupResponse)
  //     } catch (error: unknown) {
  //       if (error instanceof AxiosError) {
  //         if (error.response?.data) {
  //           setError(error.response.data)
  //         }
  //       }
  //     } finally {
  //       setIsLoading(false)
  //     }
  //   }

  //   request()
  // }, [])

  return (
    <div className={styles['register__layout']}>
      <div className={styles['register__background']}>
        <main className={styles['register__card']}>
          <h1>Регистрация</h1>

          <form onSubmit={handleSubmit} className={styles['register__form']}>
            <Field label="Логин" type="text" placeholder="Логин" />
            <Field label="Почта" type="email" placeholder="Почта" />
            <Field label="Имя" type="text" placeholder="Имя" />
            <Field label="Телефон" type="text" placeholder="Телефон" />
            <Field label="Пароль" type="password" placeholder="Пароль" />
            <Field
              label="Повторите пароль"
              type="password"
              placeholder="Повторите пароль"
            />
            <Button variant="primary">Авторизоваться</Button>
          </form>

          <Button
            variant="secondary"
            type="button"
            onClick={() => navigate(ROUTES.LOGIN)}>
            Войти
          </Button>
        </main>
      </div>
    </div>
  )
}

export default RegisterPage
