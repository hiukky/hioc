import { useContext } from 'react'

import { uncapitalize } from './utils'

import { Context } from './context'
import { Service, ServiceFrom } from './types'

export function useService<T extends Record<string, Service>>(
  targets: T,
): ServiceFrom<T> {
  const { container } = useContext(Context)

  return Object.entries(targets)
    .map(([key, Target]) => {
      return {
        [uncapitalize(key)]: container.register(Target),
      }
    })
    .reduce((a, b) => ({ ...a, ...b }), {}) as ServiceFrom<T>
}
