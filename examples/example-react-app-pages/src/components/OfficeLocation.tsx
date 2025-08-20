import { HeadlessXpmEditor } from "headless-xpm-react"
interface IOfficeLocation {
    item: any
}

const OfficeLocation = ({ item }: IOfficeLocation) => {
    return (
        <HeadlessXpmEditor tcmId={`tcm:${item.publicationId}-${item.itemId}`}>
            <div className="hero" >
                <img src={item.image.variants.edges[0].node.downloadUrl} alt="" data-aspect="3.3" style={{ height: 100 }} />
                <div className="overlay overlay-tl ribbon">
                    <h1>{item.name}</h1>
                </div>
            </div>
            <div className="container-fluid">
                <div id="location-tile" className="row">
                    <div className="col-sm-12">
                        <div className="tile">
                            <div className="vcard">
                                <h4><i className="fa fa-map-marker"></i> Address</h4>
                                <div className="adr" dangerouslySetInnerHTML={{ __html: item?.address?.html }} />
                                <a className="popup-iframe popup-mobile-ignore"
                                    href="//maps.google.com/maps?saddr=My+Location&amp;daddr=51,1">Directions to this location</a><br />
                                <a className="popup-iframe popup-mobile-ignore" href="//maps.google.com/maps?q=51,1">View Large Map</a>
                                <h4><i className="fa fa-envelope"></i> Contact Details</h4>
                                <div className="h-card">
                                    <p>Telephone: <a className="tel" href={`{tel:${item.telephone}`}>{item.telephone}</a>
                                    </p>
                                    <p>Fax: <a className="fax" href={`fax:${item.faxNumber}`}>{item.faxNumber}</a></p>
                                    <p>Email: <a className="email" href={`mailto:${item.email}`}>{item.email}</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </HeadlessXpmEditor>
    )
}

export default OfficeLocation