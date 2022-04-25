import { render } from '@redwoodjs/testing/web'

import ShowsPage from './ShowsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ShowsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ShowsPage />)
    }).not.toThrow()
  })
})
