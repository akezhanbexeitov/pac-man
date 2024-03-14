import { Button, Field } from '@/components/ui'
import styles from './index.module.scss'
import { useNavigate } from 'react-router-dom'
import { APIError, ROUTES } from '@/typings'
import { useFormik } from 'formik'
import { useState } from 'react'
import AuthService from '@/services/auth'
import { AxiosError } from 'axios'
import ErrorText from '@/components/ui/ErrorText'
import Loader from '@/components/ui/Loader'

const LoginPage = () => {
  const [error, setError] = useState<APIError | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const navigate = useNavigate()
  const { signin } = AuthService()

  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    onSubmit: async values => {
      try {
        setIsLoading(true)
        await signin(values)
        navigate(ROUTES.HOME)
      } catch (error) {
        if (error instanceof AxiosError) {
          if (error.response?.data) {
            setError(error.response.data)
          }
        }
      } finally {
        setIsLoading(false)
      }
    },
  })

  return (
    <div className={styles['login__layout']}>
      <div className={styles['login__background']}>
        <main className={styles['login__card']}>
          <h1>Вход</h1>

          <form
            onSubmit={formik.handleSubmit}
            className={styles['login__form']}>
            <Field
              label="Логин"
              type="text"
              placeholder="Логин"
              name="login"
              handleChange={formik.handleChange}
              value={formik.values.login}
            />
            <Field
              label="Пароль"
              type="password"
              placeholder="Пароль"
              name="password"
              handleChange={formik.handleChange}
              value={formik.values.password}
            />
            {error && <ErrorText text={error.reason} />}
            <Button variant="primary" type="submit" disabled={isLoading}>
              {isLoading ? <Loader /> : 'Авторизоваться'}
            </Button>
          </form>

          <Button
            variant="secondary"
            type="button"
            onClick={() => navigate(ROUTES.REGISTRATION)}>
            Нет аккаунта?
          </Button>
        </main>
      </div>
    </div>
  )
}

export default LoginPage
