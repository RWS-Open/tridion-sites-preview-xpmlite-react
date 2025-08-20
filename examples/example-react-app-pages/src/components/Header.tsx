
import Logo from "./Logo"
import TopNavigation from "./TopNavigation"
import MainNavigation from "./MainNavigation"
const Header = () => {
    return (
        <header id="page-header" className="navbar navbar-default">
            <div className="container-fluid page-border">
                <div className="row">
                    <div className="col-xs-12" role="navigation">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                <i className="fa fa-bars"></i>
                            </button>
                            <Logo />
                        </div>
                        <div className="navbar-collapse collapse" data-region="Nav">
                            <TopNavigation />
                            <MainNavigation />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header