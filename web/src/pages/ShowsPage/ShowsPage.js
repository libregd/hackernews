import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ShowsPage = () => {
  return (
    <>
      <MetaTags title="Shows" description="Shows page" />

      <h1>ShowsPage</h1>
      <p>
        Find me in <code>./web/src/pages/ShowsPage/ShowsPage.js</code>
      </p>
      <p>
        My default route is named <code>shows</code>, link to me with `
        <Link to={routes.shows()}>Shows</Link>`
      </p>
    </>
  )
}

export default ShowsPage
