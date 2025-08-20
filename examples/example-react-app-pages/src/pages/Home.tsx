import { useEffect, Fragment, useState } from "react"
import { HeadlessXpmEditor } from "headless-xpm-react"

import { TYPED_PAGE_QUERY } from "../graphqlQueries/queries/typedPageQuery"
import { TYPED_PAGE_QUERY_VARIABLES, type ITypedPageQueryVariables } from "../graphqlQueries/variables/typedPageQuery"
import { GraphiqlService } from "../services/GraphiqlService"
import { usePageStore } from "../store/store";

import HomeHeroRegion from "../components/HomeHeroRegion";
import HomeArticleRegion from "../components/HomeArticleRegion";
import HomeFurtherInfoRegion from "../components/HomeFurtherInfoRegion";

const graphqlService = new GraphiqlService();

const Home = () => {
    const { setPageData, pageData, publicationId } = usePageStore(state => state);
    const [pageId, setPageId] = useState<string>("")

    useEffect(() => {
        if (publicationId !== null) {
            getPageData()
        }
    }, [publicationId])
    
    const getPageData = async () => {

        const typedPageQueryvariables = {
            ...TYPED_PAGE_QUERY_VARIABLES,
            publicationId: parseInt(publicationId as string),
            url: "/index.html"
        } as ITypedPageQueryVariables

        const response = await graphqlService.getGraphqlData({
            query: TYPED_PAGE_QUERY,
            variables: typedPageQueryvariables
        });
        setPageId(`tcm:${response.data.typedPage.publicationId}-${response.data.typedPage.itemId}-${response.data.typedPage.itemType}`)
        setPageData(response.data.typedPage.regions)

    }

    return (
        <HeadlessXpmEditor tcmId={pageId} isPage={true}>
            <main className="page-row page-row-expanded" role="main">
                <div className="container-fluid page-border">
                    {
                        pageData?.map(region => {
                            return (
                                <Fragment key={region.name}>
                                    {
                                        region.name === "Hero" ? <HomeHeroRegion region={region} /> : null
                                    }

                                    <div className="row">
                                        <div className="col-sm-12 col-md-12">
                                            {region.name === "Article" && <HomeArticleRegion region={region} />}
                                            {region.name === "Further Info" && <HomeFurtherInfoRegion region={region} />}
                                        </div>
                                    </div>
                                </Fragment>
                            )
                        })
                    }
                </div>
            </main>
        </HeadlessXpmEditor>
    )
}

export default Home