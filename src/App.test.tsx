import React from 'react'
import { render, act } from '@testing-library/react'
import App from './App'
Object.defineProperty(window, 'matchMedia', {
  value: () => {
    return {
      matches: false,
      addListener: () => {},
      removeListener: () => {}
    }
  }
})
test('renders without crashing', async () => {
  const { baseElement } = render(<App />)
  await act(async () => {})
  expect(baseElement).toBeDefined()
})
