import { Link } from "react-router-dom"

const TopNavigation = () => {
    return (
        <ul className="nav navbar-nav utility-nav">

            <li data-fieldname="link" data-index="0">
                <Link to="/about" title="About out company">About Us</Link>
            </li>
            <li data-fieldname="link" data-index="1">
                <Link to="/about/contact" title="Contact us">Contact</Link>
            </li>
        </ul>
    )
}

export default TopNavigation