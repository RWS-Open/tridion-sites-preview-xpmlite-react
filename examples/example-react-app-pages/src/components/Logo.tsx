import { Link } from "react-router-dom"
import BrandLogo from "../assets/logo_tcm5-310.png"
const Logo = () => {

    return (
        <div>
            <Link className="navbar-logo" to="/">
                <span data-fieldname="media" data-index="0">
                    <img src={BrandLogo} alt="" height="80" />
                </span>
            </Link>
        </div>
    )
}

export default Logo