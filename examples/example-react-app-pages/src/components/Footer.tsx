
const Footer = () => {
    return (
        <footer id="page-footer" className="page-row">
            <div className="container-fluid page-border">

                <div data-region="Footer Links">
                    <div className="row">
                        <div className="col-sm-6 col-md-3">
                            <div>
                                <div className="h4" data-fieldname="headline" data-index="0">Popular Products</div>
                                <ul className="list-unstyled">

                                    <li data-fieldname="link" data-index="0">
                                        <a href="/about">Product A</a>
                                    </li>
                                    <li data-fieldname="link" data-index="1">
                                        <a href="/about">Product B</a>
                                    </li>
                                    <li data-fieldname="link" data-index="2">
                                        <a href="/about">Product C</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div>
                                <div className="h4" data-fieldname="headline" data-index="0">Site Sections</div>
                                <ul className="list-unstyled">

                                    <li data-fieldname="link" data-index="0">
                                        <a href="/articles/news">News</a>
                                    </li>
                                    <li data-fieldname="link" data-index="1">
                                        <a href="/further-information">Further Information</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div>
                                <div className="h4" data-fieldname="headline" data-index="0">Useful Links</div>
                                <ul className="list-unstyled">

                                    <li data-fieldname="link" data-index="0">
                                        <a href="/further-information/faq">Frequently Asked Questions</a>
                                    </li>
                                    <li data-fieldname="link" data-index="1">
                                        <a href="/further-information/image-library">Image Library</a>
                                    </li>
                                    <li data-fieldname="link" data-index="2">
                                        <a href="/further-information/downloads">Downloads</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">

                            <div className="icon-list">
                                <a href="https://twitter.com/YourCompanyHandle" className="fa-stack fa-lg" title="Visit us on Twitter"
                                    data-fieldname="link" data-index="0">
                                    <i className="fa fa-circle fa-stack-2x"></i>
                                    <i className="fa fa-twitter fa-stack-1x"></i>
                                </a>
                                <a href="http://www.linkedin.com/company/YourCompanyPage" className="fa-stack fa-lg"
                                    title="Visit us on LinkedIn" data-fieldname="link" data-index="1">
                                    <i className="fa fa-circle fa-stack-2x"></i>
                                    <i className="fa fa-linkedin fa-stack-1x"></i>
                                </a>
                                <a href="https://www.facebook.com/YourCompanyPage" className="fa-stack fa-lg" title="Visit us on Facebook"
                                    data-fieldname="link" data-index="2">
                                    <i className="fa fa-circle fa-stack-2x"></i>
                                    <i className="fa fa-facebook fa-stack-1x"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <hr />
                <ul className="list-inline text-center">
                    <li>
                        <small data-fieldname="headline" data-index="0">&#169; 2017 Your Company Name Here</small>
                    </li>

                    <li>
                        <small data-fieldname="link" data-index="0"><a href="/about/privacy"
                            title="View our privacy policy">Privacy</a></small>
                    </li>
                    <li>
                        <small data-fieldname="link" data-index="1"><a href="/about/terms" title="Read our terms of use">Terms of
                            Use</a></small>
                    </li>
                    <li>
                        <small data-fieldname="link" data-index="2"><a href="/sitemap">Sitemap</a></small>
                    </li>
                </ul>

            </div>
        </footer>
    )
}

export default Footer