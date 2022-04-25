// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'
import HackerLayout from './layouts/HackerLayout/HackerLayout'
const Routes = () => {
  return (
    <Router>
      <Set wrap={HackerLayout}>
        <Route path="/shows" page={ShowsPage} name="shows" />
        <Route path="/jobs" page={JobsPage} name="jobs" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
      </Set>

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
