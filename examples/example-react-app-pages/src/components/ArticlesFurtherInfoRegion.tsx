
interface IItem {
    item: any
}
const ArticlesFurtherInfoRegion = ({ item }: IItem) => {
    return (
        <div className="teaser teaser-desc-inner">
            <div>
                <img src={item.image.variants.edges[0].node.downloadUrl} alt="" data-aspect="1.62" width="100%" className="teaser-img loader-img" />
            </div>
            <h3 className="teaser-heading overlay overlay-top ribbon">
                <a href="/articles/all-articles">{item.metadata?.standardMeta?.name}</a>
            </h3>
            <p className="teaser-description overlay overlay-bottom ribbon">{item.metadata?.standardMeta?.introText} </p>
            <a className="teaser-link" href="/articles/all-articles">
                Read More
                <i className="fa fa-chevron-right"></i>
            </a>
        </div>

    )
}

export default ArticlesFurtherInfoRegion