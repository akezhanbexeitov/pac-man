import AuthService from '@/services/auth'
import { APIError, SignupResponse } from '@/typings/responses/auth'
import { AxiosError } from 'axios'
import { useEffect, useState } from 'react'

const RegisterPage = () => {
  const { signup } = AuthService()
  const [data, setData] = useState<SignupResponse | null>(null)
  const [error, setError] = useState<APIError | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const request = async () => {
      try {
        setIsLoading(true)

        const response = await signup({
          first_name: 'John',
          second_name: 'Doe',
          phone: '+77777777777',
          login: 'john_doe',
          email: 'john@gmail.com',
          password: 'password',
        })

        setData(response as SignupResponse)
      } catch (error: unknown) {
        if (error instanceof AxiosError) {
          if (error.response?.data) {
            setError(error.response.data)
          }
        }
      } finally {
        setIsLoading(false)
      }
    }

    request()
  }, [])

  return (
    <main>
      <h1>RegisterPage</h1>

      <div>{isLoading && 'Loading...'}</div>
      <div>{data && data.id}</div>
      <div>{error && error.reason}</div>
    </main>
  )
}

export default RegisterPage
