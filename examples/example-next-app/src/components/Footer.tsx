import React from 'react'

const Footer = () => {
    return (
        <footer id="page-footer" className="page-row">
            <div className="xpm-button">

                <a href="/system/include/footer" title="Edit Footer" className="fa-stack fa-lg">
                    <i className="fa fa-square fa-stack-2x"></i>
                    <i className="fa fa-pencil fa-inverse fa-stack-1x"></i>
                </a>
            </div>
            <div className="container-fluid page-border">

                <div typeof="Region" data-region="Footer Links">
                    <div className="row">
                        <div className="col-sm-6 col-md-3">
                            <div data-component-id="tcm:5-333">
                                <div className="h4">Popular Products</div>
                                <ul className="list-unstyled">

                                    <li>
                                        <a href="/about">Product A</a>
                                    </li>
                                    <li>
                                        <a href="/about">Product B</a>
                                    </li>
                                    <li>
                                        <a href="/about">Product C</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div data-component-id="tcm:5-334">
                                <div className="h4">Site Sections</div>
                                <ul className="list-unstyled">

                                    <li>
                                        <a href="/articles/news">News</a>
                                    </li>
                                    <li>
                                        <a href="/further-information">Further Information</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div>
                                <div className="h4">Useful Links</div>
                                <ul className="list-unstyled">

                                    <li>
                                        <a href="/further-information/faq">Frequently Asked Questions</a>
                                    </li>
                                    <li>
                                        <a href="/further-information/image-library">Image Library</a>
                                    </li>
                                    <li>
                                        <a href="/further-information/downloads">Downloads</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">

                            <div className="icon-list">
                                <a href="https://twitter.com/YourCompanyHandle" className="fa-stack fa-lg" title="Visit us on Twitter">
                                    <i className="fa fa-circle fa-stack-2x"></i>
                                    <i className="fa fa-twitter fa-stack-1x"></i>
                                </a>
                                <a href="http://www.linkedin.com/company/YourCompanyPage" className="fa-stack fa-lg" title="Visit us on LinkedIn">
                                    <i className="fa fa-circle fa-stack-2x"></i>
                                    <i className="fa fa-linkedin fa-stack-1x"></i>
                                </a>
                                <a href="https://www.facebook.com/YourCompanyPage" className="fa-stack fa-lg" title="Visit us on Facebook">
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
                        <small>&#169; 2017 Your Company Name Here</small>
                    </li>

                    <li>
                        <small><a href="/about/privacy" title="View our privacy policy">Privacy</a></small>
                    </li>
                    <li>
                        <small><a href="/about/terms" title="Read our terms of use">Terms of Use</a></small>
                    </li>
                    <li>
                        <small><a href="/sitemap">Sitemap</a></small>
                    </li>
                </ul>

            </div>
        </footer>
    )
}

export default Footer