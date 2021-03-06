import { Box, Paper, Stack, Tab, Tabs, Typography, styled } from '@mui/material'

export const Card = styled(Paper)(({ theme }) => ({
  width: '400px',
  padding: theme.spacing(4, 3),
}))

export const HeaderContainer = styled(Box)(({ theme }) => ({
  paddingBottom: theme.spacing(2),
}))

export const InputContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2, 0),
}))

export const ActionContainer = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  justifyContent: 'flex-end',
  padding: theme.spacing(2, 0),
}))

export const HeaderText = styled(Typography)(() => ({
  textTransform: 'capitalize',
}))

export const StyledTabs = styled(Tabs)(() => ({
  justifyContent: 'center',
}))

export const StyledTab = styled(Tab)(() => ({
  flex: '1 1 0px',
}))

export const TabsWrapper = styled(Box)(({ theme }) => ({
  paddingBottom: theme.spacing(2),
}))
