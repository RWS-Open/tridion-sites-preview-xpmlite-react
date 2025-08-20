
interface IItem {
    item: any
}
const FurtherInfoMainRegion = ({ item }: IItem) => {
    return (
        <article className="rich-text">
            <div className="hero">
                <img src={item.image?.variants?.edges[0]?.node?.downloadUrl} alt="" data-aspect="3.3" style={{ height: "300px", width: "100%", objectFit: "cover" }} />
                <div className="overlay overlay-tl ribbon">
                    <h1>{item?.headline}</h1>
                </div>
            </div>
            <div className="content" dangerouslySetInnerHTML={{ __html: item?.articleBody[0]?.content?.html }} />
        </article>
    )
}

export default FurtherInfoMainRegion