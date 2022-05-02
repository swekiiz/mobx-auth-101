import { Box } from '@mui/material'
import { NextPage } from 'next'

import { TestText } from './home.components'

export const Home: NextPage = () => {
  return (
    <Box>
      <TestText variant="h4">Hello</TestText>
    </Box>
  )
}
