export const SITE_MAP_QUERY = `query SiteMap($namespaceId: Int!, $publicationId: Int!) {
    sitemap(namespaceId: $namespaceId, publicationId: $publicationId) {
      id
      title
      hasChildNodes
      items {
        id
        url
        title
        visible
  
        type
        ... on TaxonomySitemapItem {
          items {
            id
            url
            type
            title
            visible
          }
        }
      }
    }
  }`