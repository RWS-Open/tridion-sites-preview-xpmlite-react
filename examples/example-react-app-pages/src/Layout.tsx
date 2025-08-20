import InfoBar from './components/InfoBar'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from "react-router";
import { usePageStore } from './store/store';
import { useEffect } from 'react';
import { PUBLICATION_MAPPING_QUERY } from './graphqlQueries/publicationMappingQuery';
import { PUBLICATION_MAPPING_QUERY_VARIABLES } from './graphqlQueries/publicationMappingQueryVariables';
import { GraphiqlService } from './services/GraphiqlService';
const graphqlService = new GraphiqlService();
const Layout = () => {

  const { setPublicationId } = usePageStore(state => state)

  useEffect(() => {
    getPublicationId()
  }, [])

  const getPublicationId = async () => {
    const siteMapQuery = {
      query: PUBLICATION_MAPPING_QUERY,
      variables: PUBLICATION_MAPPING_QUERY_VARIABLES
    }
    const response = await graphqlService.getGraphqlData(siteMapQuery)
    setPublicationId(response.data.publicationMapping.publicationId)
  }
  return (
    <>
      <InfoBar />
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout