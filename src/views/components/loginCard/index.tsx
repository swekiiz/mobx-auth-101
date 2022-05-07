import { Button, TextField, Typography } from '@mui/material'
import { useEffect, useMemo, useState } from 'react'

import { isValidPassword, isValidUsername } from 'utils/validateInput'

import { ActionContainer, Card, HeaderContainer, InputContainer } from './loginCard.component'

type CustomInputProps = {
  label?: string
  required?: boolean
  password?: boolean
  error?: boolean
  value: string
  helperText?: string
  onBlur?: () => void
  setValue: (s: string) => void
}

const CustomInput = ({ label, required, password, value, error, helperText, setValue, onBlur }: CustomInputProps) => {
  return (
    <InputContainer>
      <TextField
        required={required}
        error={error}
        type={password ? 'password' : undefined}
        label={label}
        defaultValue=""
        helperText={helperText}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={(_) => onBlur?.()}
        fullWidth
      />
    </InputContainer>
  )
}

export const LoginCard = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  // * Log username
  useEffect(() => console.log('username =', username), [username])

  const usernameErrorHelperText = useMemo(() => {
    if (isValidUsername(username) || username === '') return undefined
    return 'invalid username'
  }, [username])

  const passwordErrorHelperText = useMemo(() => {
    if (isValidPassword(password) || password === '') return undefined
    return 'invalid password'
  }, [password])

  const handleClick = () => {
    if (username === '' || password === '') {
      alert('username or password is empty')
      return
    }

    alert('login')
  }

  return (
    <Card>
      <HeaderContainer>
        <Typography variant="h4" align="center">
          Hello
        </Typography>
      </HeaderContainer>
      <CustomInput
        label="username"
        required
        value={username}
        error={!!usernameErrorHelperText}
        helperText={usernameErrorHelperText}
        setValue={(s: string) => setUsername(s)}
      />
      <CustomInput
        label="password"
        required
        password
        value={password}
        error={!!passwordErrorHelperText}
        helperText={passwordErrorHelperText}
        setValue={(s: string) => setPassword(s)}
      />
      <ActionContainer>
        <Button variant="contained" onClick={handleClick}>
          Login
        </Button>
      </ActionContainer>
    </Card>
  )
}
