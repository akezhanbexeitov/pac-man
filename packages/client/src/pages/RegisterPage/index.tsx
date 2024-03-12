import AuthService from '@/services/auth'
import { APIError, ROUTES, SignupResponse } from '@/typings'
import { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import styles from './index.module.scss'
import { Button, Field } from '@/components/ui'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import ErrorText from '@/components/ui/ErrorText'

const RegisterPage = () => {
  const [data, setData] = useState<SignupResponse | null>(null)
  const [error, setError] = useState<APIError | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { signup } = AuthService()
  const navigate = useNavigate()

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

  const formik = useFormik({
    initialValues: {
      login: '',
      email: '',
      first_name: '',
      phone: '',
      password: '',
      repeat_password: '',
    },
    onSubmit: values => {
      if (values.password !== values.repeat_password) {
        setError({ reason: 'Пароли не совпадают' })
        return
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
