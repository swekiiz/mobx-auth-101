import { ReactNode } from 'react'

import { AppContainer } from './appWrapper.components'

export type AppWrapperProps = {
  children: ReactNode
}

export const AppWrapper = ({ children }: AppWrapperProps) => {
  return <AppContainer>{children}</AppContainer>
}
