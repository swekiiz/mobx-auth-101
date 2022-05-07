import { NextPage } from 'next'

import { LoginCard } from 'views/components/loginCard'

import { LoginLayout } from './home.components'

export const Home: NextPage = () => {
  return (
    <LoginLayout>
      <LoginCard />
    </LoginLayout>
  )
}
