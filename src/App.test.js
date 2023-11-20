import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom' // Import BrowserRouter
import App from './App'

test('renders learn react link', () => {
  render(
    <Router>
      <App />
    </Router>,
  )

  // You might want to use `screen.debug()` here to see the rendered output in the console.
  // screen.debug();

  // Now, navigate to the /login route to render the Login component
  const linkElement = screen.getByText(/Login Page/i)
  expect(linkElement).toBeInTheDocument()
})
