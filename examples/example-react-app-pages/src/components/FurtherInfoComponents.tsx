interface IItem {
    item: any
}
const FurtherInfoComponents = ({ item }: IItem) => {
    return (
        <div className="teaser teaser-desc-inner">
            <div >
                <img src={item.image?.variants.edges[0].node.downloadUrl} alt="" data-aspect="1.62" width="100%" className="teaser-img loader-img" />
            </div>
            <h3 className="teaser-heading overlay overlay-top ribbon disabledEditor">
                {item.metadata?.standardMeta?.name !== null ? item.metadata?.standardMeta?.name : item.headline}
            </h3>
            <p className="teaser-description overlay overlay-bottom ribbon disabledEditor">{item.metadata?.standardMeta?.introText} </p>
        </div>
    )
}

export default FurtherInfoComponents