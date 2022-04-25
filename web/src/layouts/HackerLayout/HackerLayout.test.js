import { render } from '@redwoodjs/testing/web'

import HackerLayout from './HackerLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('HackerLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HackerLayout />)
    }).not.toThrow()
  })
})
