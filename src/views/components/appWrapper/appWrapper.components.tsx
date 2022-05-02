import { Container, styled } from '@mui/material'

export const AppContainer = styled(Container)(({ theme }) => ({
  minHeight: '100vh',
  padding: theme.spacing(8),
}))
