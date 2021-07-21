import { createContext } from 'react'

import { Container } from './container'

export const Context = createContext({
  container: new Container(),
})
