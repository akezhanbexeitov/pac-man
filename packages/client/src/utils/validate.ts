import { LoginField, RegisterField } from '@/typings/types'

const validator = {
  email: (value?: string): string | undefined => {
    const regExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,9}$/i
    if (!value) {
      return 'Required'
    } else if (!regExp.test(value)) {
      return 'Invalid email'
    }
  },
  login: (value?: string): string | undefined => {
    const regExp = /^(?=[a-zA-Z0-9_-]{3,20}$)(?!^[0-9_-]+$)[a-zA-Z0-9_-]+$/
    if (!value) {
      return 'Required'
    } else if (value.length < 3) {
      return 'Length of login should not be less 3 letters.'
    } else if (!regExp.test(value)) {
      return `From 3 to 20 characters, Latin, may contain numbers but not consist of them,
        no spaces, no special characters (hyphen and underscore allowed)`
    }
  },
  password: (value?: string): string | undefined => {
    const regExp = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,40}$/
    if (!value) {
      return 'Required'
    } else if (regExp.test(value)) {
      return 'From 8 to 40 characters, at least one capital letter and a number'
    }
  },
  first_name: (value?: string): string | undefined => {
    const regExp = /^[А-ЯA-Z][а-яa-z\\-]*$|^[A-Z][a-z\\-]*$/
    if (!value) {
      return 'Required'
    } else if (regExp.test(value)) {
      return `The first letter must be capitalised, no spaces,
        no numbers, no special characters (only hyphen is allowed).`
    }
  },
  second_name: (value?: string): string | undefined => {
    const regExp = /^[А-ЯA-Z][а-яa-z\\-]*$|^[A-Z][a-z\\-]*$/
    if (!value) {
      return 'Required'
    } else if (regExp.test(value)) {
      return `The first letter must be capitalised, no spaces,
        no numbers, no special characters (only hyphen is allowed).`
    }
  },
  phone: (value?: string): string | undefined => {
    const regExp = /^\+?\d{10,15}$/
    if (!value) {
      return 'Required'
    } else if (regExp.test(value)) {
      return 'From 10 to 15 characters, consists of digits, may start with a plus sign.'
    }
  },
  repeat_password: (value?: string): string | undefined => {
    const regExp = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,40}$/
    if (!value) {
      return 'Required'
    } else if (regExp.test(value)) {
      return 'From 8 to 40 characters, at least one capital letter and a number'
    }
  },
}

type ValidatorKeys = keyof typeof validator

export const validateLogin = (values: LoginField) => {
  const errors: Partial<LoginField> = {}

  Object.keys(values).forEach(key => {
    const foo = validator[key as ValidatorKeys]
    const error = foo(values[key as keyof LoginField])
    errors[key as keyof LoginField] = error
  })

  return errors
}

export const validateRegister = (values: RegisterField) => {
  const errors: Partial<RegisterField> = {}

  Object.keys(values).forEach(key => {
    const foo = validator[key as ValidatorKeys]
    const error = foo(values[key as keyof RegisterField])
    errors[key as keyof RegisterField] = error
  })

  return errors
}
