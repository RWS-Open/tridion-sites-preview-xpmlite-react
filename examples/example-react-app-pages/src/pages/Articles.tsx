import { useState, useEffect, Fragment } from 'react'
import { usePageStore } from "../store/store";
import { TYPED_PAGE_QUERY } from '../graphqlQueries/queries/typedPageQuery';
import { TYPED_PAGE_QUERY_VARIABLES, type ITypedPageQueryVariables } from '../graphqlQueries/variables/typedPageQuery';
import { GraphiqlService } from '../services/GraphiqlService';
import { HeadlessXpmEditor } from 'headless-xpm-react';
import ArticlesMainRegion from '../components/ArticlesMainRegion';
import ArticlesFurtherInfoRegion from '../components/ArticlesFurtherInfoRegion';
import NewsImage from "../assets/company-news-placeholder_tcm5-289_w2048_n.png"
const graphqlService = new GraphiqlService();

const Articles = () => {
    const { setPageData, pageData, publicationId } = usePageStore(state => state);
    const [pageId, setPageId] = useState<string>("")
    
    useEffect(() => {
        if (publicationId !== null) {
            getPageData()
        }
    }, [publicationId])

    const getPageData = async () => {

        if (publicationId !== null) {
            const typedPageQueryVariables = {
                ...TYPED_PAGE_QUERY_VARIABLES,
                publicationId: +publicationId,
                url: "/articles/index.html"
            } as ITypedPageQueryVariables

            const response = await graphqlService.getGraphqlData({
                query: TYPED_PAGE_QUERY,
                variables: typedPageQueryVariables
            });

            setPageId(`tcm:${response.data.typedPage.publicationId}-${response.data.typedPage.itemId}-${response.data.typedPage.itemType}`)
            setPageData(response.data.typedPage.regions)
        }
    }
    return (
        <HeadlessXpmEditor tcmId={pageId} isPage={true}>
            <main className="page-row page-row-expanded" role="main">
                <div className="container-fluid page-border">
                    <div typeof="Region" data-region="Hero">
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-12">
                            {
                                pageData?.map(region => {
                                    return (
                                        <Fragment key={region.name}>
                                            {
                                                region.name === "Main" ?
                                                    <div data-region={region.name}>
                                                        {
                                                            region.components?.map((item: any) => {
                                                                return (
                                                                    <HeadlessXpmEditor tcmId={`tcm:${item.publicationId}-${item.itemId}`} key={item.id}>
                                                                        <ArticlesMainRegion item={item} />
                                                                    </HeadlessXpmEditor>
                                                                )
                                                            })
                                                        }

                                                    </div>
                                                    : null
                                            }
                                            {
                                                region.name === "Further Info" ?
                                                    <div data-region={region.name}>
                                                        <div className="row">
                                                            {
                                                                region.components?.map((item: any, idx: number) => {
                                                                    return (
                                                                        <Fragment key={item.id}>
                                                                            {
                                                                                idx === 0 ?
                                                                                    <div className="col-sm-6 col-md-4">
                                                                                        <HeadlessXpmEditor tcmId={`tcm:${item.publicationId}-${item.itemId}`} key={item.id}>
                                                                                            <ArticlesFurtherInfoRegion item={item} />
                                                                                        </HeadlessXpmEditor>
                                                                                    </div>
                                                                                    : null
                                                                            }
                                                                        </Fragment>
                                                                    )
                                                                })
                                                            }
                                                            <div className="col-sm-6 col-md-4">
                                                                <div>
                                                                    <h3>Latest News</h3>
                                                                    <ul>
                                                                        <li>
                                                                            Fusce ullamcorper <time className="meta small">[15 Jul 2014]</time>
                                                                        </li>
                                                                        <li>
                                                                            Praesent facilisis consectet. <time className="meta small">[17 Aug 2014]</time>
                                                                        </li>
                                                                        <li>
                                                                            Cras vel justo semp <time className="meta small">[18 Aug 2014]</time>
                                                                        </li>
                                                                        <li>
                                                                            Aliquam quis egesta <time className="meta small">[18 Jun 2014]</time>
                                                                        </li>
                                                                    </ul>
                                                                    <p>
                                                                        <a href="/articles/news">See all news <i className="fa fa-chevron-right"></i></a>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-6 col-md-4">
                                                                <div className="video">
                                                                    <h3>Company News</h3>
                                                                    <div className="embed-video">
                                                                        <img src={NewsImage} alt="Company News" />
                                                                        <button type="button" data-video="2YBtspm8j8M">
                                                                            <i className="fa fa-play-circle"></i>
                                                                        </button>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                    : null
                                            }
                                        </Fragment>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </main>
        </HeadlessXpmEditor>
    )
}

export default Articles