import { useState } from "react"
import { HeadlessXpmEditor } from "headless-xpm-react"
interface ICompanyNews {
    item: any
}
const CompanyNews = ({ item }: ICompanyNews) => {
    const [playVideo, setPlayVideo] = useState<boolean>(false)
    return (
        <HeadlessXpmEditor tcmId={`tcm:${item.publicationId}-${item.itemId}`}>
            <div className="video">
                <h3>{item.metadata?.headline}</h3>
                {
                    playVideo ?
                        <div className="embed-video">
                            <iframe src={`https://www.youtube.com/embed/${item?.metadata?.youTubeId}?version=3&enablejsapi=1`} id={item?.metadata?.youTubeId}></iframe>
                        </div>
                        :
                        <div className="embed-video">
                            <img src={item.variants?.edges[0]?.node.downloadUrl} alt={item?.headline} />
                            <button type="button" data-video={item?.metadata?.youTubeId} onClick={() => setPlayVideo(!playVideo)}>
                                <i className="fa fa-play-circle"></i>
                            </button>
                        </div>
                }

            </div>
        </HeadlessXpmEditor>
    )
}

export default CompanyNews