import { Box, styled } from '@mui/material'

export const LoginLayout = styled(Box)(({ theme }) => ({
  width: '100%',
  height: `calc(100vh - ${theme.spacing(16)})`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 0,
}))
