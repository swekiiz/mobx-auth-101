import { Button, TextField } from '@mui/material'
import { useMemo, useState } from 'react'

import { useRegister } from 'hooks/useRegister'

import {
  ActionContainer,
  Card,
  HeaderContainer,
  HeaderText,
  InputContainer,
  StyledTab,
  StyledTabs,
  TabsWrapper,
} from './loginCard.component'

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
  const [formState, setFormState] = useState<number>(0)

  const [loginUsername, setLoginUsername] = useState<string>('')
  const [loginPassword, setLoginPassword] = useState<string>('')

  const {
    handleRegister,
    username: registerUsername,
    password: registerPassword,
    setUsername: setRegisterUsername,
    setPassword: setRegisterPassword,
    usernameErrorHelperText,
    passwordErrorHelperText,
  } = useRegister()

  const displayState = useMemo(() => {
    switch (formState) {
      case 0: {
        return 'login'
      }
      case 1: {
        return 'register'
      }
      default: {
        throw new Error('unexpect state')
      }
    }
  }, [formState])

  const handleLogin = () => {
    alert('login')
  }

  return (
    <Card>
      <HeaderContainer>
        <HeaderText variant="h4" align="center">
          {displayState}
        </HeaderText>
      </HeaderContainer>
      <TabsWrapper>
        <StyledTabs
          value={formState}
          onChange={(_, state: number) => setFormState(state)}
          aria-label="login and register"
        >
          <StyledTab label="Login" />
          <StyledTab label="Register" />
        </StyledTabs>
      </TabsWrapper>
      {formState === 0 && (
        <>
          <CustomInput label="username" value={loginUsername} setValue={(s: string) => setLoginUsername(s)} />
          <CustomInput label="password" password value={loginPassword} setValue={(s: string) => setLoginPassword(s)} />
        </>
      )}
      {formState === 1 && (
        <>
          <CustomInput
            label="username"
            required
            value={registerUsername}
            error={!!usernameErrorHelperText}
            helperText={usernameErrorHelperText}
            setValue={(s: string) => setRegisterUsername(s)}
          />
          <CustomInput
            label="password"
            required
            password
            value={registerPassword}
            error={!!passwordErrorHelperText}
            helperText={passwordErrorHelperText}
            setValue={(s: string) => setRegisterPassword(s)}
          />
        </>
      )}
      <ActionContainer>
        <Button variant="contained" onClick={formState === 0 ? handleLogin : handleRegister}>
          {displayState}
        </Button>
      </ActionContainer>
    </Card>
  )
}
