
import { usePageStore } from "../store/store";
import { Fragment, useEffect, useState } from "react";
import { TYPED_PAGE_QUERY_VARIABLES, type ITypedPageQueryVariables } from "../graphqlQueries/variables/typedPageQuery";
import { TYPED_PAGE_QUERY } from "../graphqlQueries/queries/typedPageQuery";
import { GraphiqlService } from "../services/GraphiqlService";
import { HeadlessXpmEditor } from "headless-xpm-react";
import FurtherInfoComponents from "../components/FurtherInfoComponents";
import FurtherInfoMainRegion from "../components/FurtherInfoMainRegion";

const graphqlService = new GraphiqlService();

const FurtherInformation = () => {
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
        url: "/further-information/index.html"
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
          <div className="row">
            <div className="col-sm-12 col-md-12">
              {
                pageData?.map(region => {
                  return (
                    <Fragment key={region.name}>
                      {
                        region.name === "Main" ?
                          <div data-region={region.components.name}>
                            {
                              region.components?.map((item: any) => {
                                return (
                                  <HeadlessXpmEditor tcmId={`tcm:${item.publicationId}-${item.itemId}`} key={item.id}>
                                    <FurtherInfoMainRegion item={item} />
                                  </HeadlessXpmEditor>
                                )
                              })
                            }
                          </div>
                          : null
                      }
                      {region.name === "Further Info" ?
                        <div data-region={region.name}>
                          <div className="row">
                            {
                              region?.components?.map((item: any) => {
                                return (
                                  <div className="col-sm-6 col-md-4" key={item.id}>
                                    <HeadlessXpmEditor tcmId={`tcm:${item.publicationId}-${item.itemId}`} key={item.id}>
                                      <FurtherInfoComponents item={item} />
                                    </HeadlessXpmEditor>
                                  </div>
                                )
                              })
                            }

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
      </main >
    </HeadlessXpmEditor>
  )
}

export default FurtherInformation