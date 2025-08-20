
import { Fragment } from 'react'
import { HeadlessXpmEditor } from "headless-xpm-react"
interface IRegion {
    region: any
}
const HomeArticleRegion = ({ region }: IRegion) => {
    return (
        <div data-region={region.name}>
            <article className="rich-text">
                {
                    region.components?.map((item: any) => {
                        return (
                            <Fragment key={item.itemId}>
                                <HeadlessXpmEditor tcmId={`tcm:${item.publicationId}-${item.itemId}`}>
                                    <h1 data-fieldname="headline" data-index="0">{item.headline}</h1>
                                    <div className="content" dangerouslySetInnerHTML={{ __html: item.articleBody[0].content.html }} />
                                </HeadlessXpmEditor>
                            </Fragment>
                        )
                    })
                }
            </article>

        </div>
    )
}

export default HomeArticleRegion