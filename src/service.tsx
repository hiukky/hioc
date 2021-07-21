import React from 'react'

import { Context } from './context'

export const ServiceProvider: React.FC = ({ children }) => {
  return <Context.Consumer>{() => children}</Context.Consumer>
}
