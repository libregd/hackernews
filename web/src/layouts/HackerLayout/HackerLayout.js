import { Link, routes } from '@redwoodjs/router'
const HackerLayout = ({ children }) => {
  return (
    <>
      <header className="container-lg bg-slate-200">
            <h1 className="text-2xl text-sky-700"><Link to={routes.home()}>HN-site</Link></h1>
            <nav className="flex flex-row space-x-4 text-white text-lg font-normal leading-6 ml-10">
                <div className="w-14 h-14 rounded-lg flex items-center justify-center"><Link to={routes.home()}>Home</Link></div>
                <div className="w-14 h-14 rounded-lg flex items-center justify-center"><Link to={routes.about()}>About</Link></div>
                <div className="w-14 h-14 rounded-lg flex items-center justify-center"><Link to={routes.jobs()}>jobs</Link></div>
                <div className="w-14 h-14 rounded-lg flex items-center justify-center"><Link to={routes.shows()}>shows</Link></div>
            </nav>
          </header>
        <main>{children}</main>
    </>
  )
}

export default HackerLayout
