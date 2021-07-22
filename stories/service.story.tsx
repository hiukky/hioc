import React, { useEffect } from 'react'
import { ServiceProvider, useService } from '../src'
import { AuthService } from '../mock/auth.service'
import { UserService } from '../mock/user.service'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    height: 100%;
    width: 100%;
    background: #0d1117;
    margin: 0;
    padding: 0;
  }
`

const Wrapper = styled.div``

const Home: React.FC = () => {
  const { authService, userService } = useService({ AuthService, UserService })

  useEffect(() => {
    console.log({
      auth: authService.signin(),
      user: userService.find(1),
    })
  }, [])

  return <Wrapper></Wrapper>
}

export const App: React.FC = () => {
  return (
    <ServiceProvider>
      <GlobalStyle />
      <Home />
    </ServiceProvider>
  )
}

export default {
  title: 'Service Provider',
  component: ServiceProvider,
}
