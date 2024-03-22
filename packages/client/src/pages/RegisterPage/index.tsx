import AuthService from '@/services/auth'
import { APIError, ROUTES, User } from '@/typings'
import { AxiosError } from 'axios'
import { useState } from 'react'
import styles from './index.module.scss'
import { Button, ErrorText, Field, Loader } from '@/components/ui'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store/store'
import { addUserInfo, logIn } from '@/store/actions/authUser'

const RegisterPage = () => {
  const [error, setError] = useState<APIError | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { signup, getMe } = AuthService()
  const navigate = useNavigate()
  const dispatch: AppDispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      login: '',
      email: '',
      first_name: '',
      second_name: '',
      phone: '',
      password: '',
      repeat_password: '',
    },
    onSubmit: async values => {
      if (values.password !== values.repeat_password) {
        setError({ reason: 'Пароли не совпадают' })
        return
      }

      try {
        setIsLoading(true)
        await signup(values)
        const user = await getMe()
        dispatch(addUserInfo(user as User))
        dispatch(logIn())
        navigate(ROUTES.HOME)
      } catch (error: unknown) {
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
    <div className={styles['register__layout']}>
      <div className={styles['register__background']}>
        <main className={styles['register__card']}>
          <h1>Регистрация</h1>

          <form
            onSubmit={formik.handleSubmit}
            className={styles['register__form']}>
            <Field
              label="Логин"
              type="text"
              placeholder="Логин"
              name="login"
              handleChange={formik.handleChange}
              value={formik.values.login}
            />
            <Field
              label="Почта"
              type="email"
              placeholder="Почта"
              name="email"
              handleChange={formik.handleChange}
              value={formik.values.email}
            />
            <Field
              label="Имя"
              type="text"
              placeholder="Имя"
              name="first_name"
              handleChange={formik.handleChange}
              value={formik.values.first_name}
            />
            <Field
              label="Фамилия"
              type="text"
              placeholder="Фамилия"
              name="second_name"
              handleChange={formik.handleChange}
              value={formik.values.second_name}
            />
            <Field
              label="Телефон"
              type="text"
              placeholder="Телефон"
              name="phone"
              handleChange={formik.handleChange}
              value={formik.values.phone}
            />
            <Field
              label="Пароль"
              type="password"
              placeholder="Пароль"
              name="password"
              handleChange={formik.handleChange}
              value={formik.values.password}
            />
            <Field
              label="Повторите пароль"
              type="password"
              placeholder="Повторите пароль"
              name="repeat_password"
              handleChange={formik.handleChange}
              value={formik.values.repeat_password}
            />
            {error && <ErrorText text={error.reason} />}
            <Button variant="primary" type="submit" disabled={isLoading}>
              {isLoading ? <Loader /> : 'Авторизоваться'}
            </Button>
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
