'use client'

import { Provider as ReduxProvider } from 'react-redux'
import { store } from '../lib/store'

export function Provider({ children }: { children: React.ReactNode }) {
  return <ReduxProvider store={store}>{children}</ReduxProvider>
}