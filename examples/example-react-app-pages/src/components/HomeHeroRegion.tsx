import { Link } from "react-router-dom"
import {HeadlessXpmEditor} from "headless-xpm-react"

// need to fix region type
interface IRegion {
    region: any
}

const HomeHeroRegion = ({ region }: IRegion) => {
    return (
        <div data-region={region.name}>
            <div id="carousel" className="carousel slide" data-ride="carousel" data-interval="5000">
                <ol className="carousel-indicators">
                    <li data-target="#carousel" data-slide-to="0" className="active"></li>
                    <li data-target="#carousel" data-slide-to="1" className=""></li>
                    <li data-target="#carousel" data-slide-to="2" className=""></li>
                </ol>
                {
                    region.components?.map((component: any) => {
                        return (
                            <HeadlessXpmEditor tcmId={`tcm:${component.publicationId}-${component.itemId}`}  key={component.id}>
                                <div className="carousel-inner">                                    
                                    {
                                        component?.itemListElement.map((item: any, idx: number) => {
                                            return (
                                                <div className={idx === 0 ? "item active" : "item"} key={item.__typename + idx}>
                                                    <div>
                                                        <span data-fieldname="media" data-index="0">
                                                            <img src={item.media.variants.edges[0].node.downloadUrl} alt="" data-aspect="3.3" width="100%" style={{ height: 311 }} />
                                                        </span>
                                                        <div className="overlay overlay-tl ribbon">
                                                            <h2 data-fieldname="subheading" data-index="0">{item.subheading}</h2>
                                                            <div data-fieldname="content" data-index="0">{item.content.html}</div>
                                                        </div>
                                                        <div className="carousel-caption">                                                            
                                                            <Link to={item.link.internalLink.id} className="btn btn-primary">{item.link.linkText}</Link>                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </HeadlessXpmEditor>
                        )
                    })
                }

                <a className="left carousel-control" href="#carousel-305" data-slide="prev">
                    <i className="fa fa-chevron-left carousel-icon-left"></i>
                </a>
                <a className="right carousel-control" href="#carousel-305" data-slide="next">
                    <i className="fa fa-chevron-right carousel-icon-right"></i>
                </a>
            </div>
        </div>
    )
}

export default HomeHeroRegion