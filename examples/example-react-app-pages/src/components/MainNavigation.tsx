import { NavLink } from 'react-router'

const MainNavigation = () => {
  return (
    <ul className="nav navbar-nav main-nav">
      <li>
        <NavLink to="/articles" className={({ isActive, isPending }:{isActive:boolean, isPending:boolean}) =>
          isPending ? "pending" : isActive ? "active" : ""
        }>Articles</NavLink>
      </li>
      <li>
        <NavLink to="/further-information" className={({ isActive, isPending }:{isActive:boolean, isPending:boolean}) =>
          isPending ? "pending" : isActive ? "active" : ""
        }>Further Information</NavLink>
      </li>
    </ul>
  )
}

export default MainNavigation