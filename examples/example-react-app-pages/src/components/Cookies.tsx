
const Cookies = () => {
    return (
        <div id="cookie" className="container-fluid page-border">
            <div className="row">
                <div className="col-sm-9">
                    <div className="h4" data-fieldname="headline" data-index="0">Cookies</div>
                    <p data-fieldname="text" data-index="0">We use cookies to ensure that we give you the best experience on our
                        website. If you continue, we&#39;ll assume that you are happy to receive all cookies on this website.</p>
                </div>
                <div className="col-sm-3">
                    <ul className="nav nav-cookie">
                        <li data-fieldname="continue" data-index="0">
                            <a id="cookie-hide" href="#"><i className="fa fa-check-circle"></i> Continue</a>
                        </li>
                        <li data-fieldname="linkText" data-index="0">
                            <a href="/about/privacy"><i className="fa fa-question-circle"></i> Find out more</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cookies