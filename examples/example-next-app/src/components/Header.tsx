import Image from "next/image"
import brandLogo from "../../public/logo_tcm5-310.png"

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
                  <div data-component-id="tcm:5-325">
                    <a className="navbar-logo" href="/">
                      <span>
                        <Image src={brandLogo} width={180} height={80} alt="" />
                      </span>
                    </a>
                  </div>

                </div>
                <div className="navbar-collapse collapse" typeof="Region" data-region="Nav">
                  <ul className="nav navbar-nav utility-nav" data-component-id="tcm:5-326">

                    <li>
                      <a href="/about" title="About our company">About Us</a>
                    </li>
                    <li>
                      <a href="/about/contact" title="Contact us">Contact</a>
                    </li>
                  </ul>

                  <ul className="nav navbar-nav main-nav" data-component-id="tcm:5-186">
                    <li className="">
                      <a href="/articles">Articles</a>
                    </li>
                    <li className="active">
                      <a href="/further-information">Further Information</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
  )
}

export default Header