import { useMemo, useState } from 'react'

import { isValidPassword, isValidUsername } from 'utils/validateInput'

export const useRegister = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const usernameErrorHelperText = useMemo(() => {
    if (isValidUsername(username) || username === '') return undefined
    return 'invalid username'
  }, [username])

  const passwordErrorHelperText = useMemo(() => {
    if (isValidPassword(password) || password === '') return undefined
    return 'invalid password'
  }, [password])

  const handleRegister = () => {
    if (username === '' || password === '') {
      alert('username or password is empty')
      return
    }

    alert('login')
  }

  return {
    username,
    setUsername,
    password,
    setPassword,
    usernameErrorHelperText,
    passwordErrorHelperText,
    handleRegister,
  }
}
