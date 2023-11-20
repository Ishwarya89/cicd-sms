import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'

test('renders Login page heading', async () => {
  await (async () => {
    render(
      <Router>
        <App />
      </Router>,
    )
  })

  // You might want to use `screen.debug()` here to see the rendered output in the console.
  // screen.debug();

  const headingElement = screen.getByText(/Login page/i)
  expect(headingElement).toBeInTheDocument()
})
