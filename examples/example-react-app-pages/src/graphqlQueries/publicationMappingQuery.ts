export const PUBLICATION_MAPPING_QUERY = `query publicationMapping($namespaceId: Int!, $siteUrl: String!) {
    publicationMapping(namespaceId: $namespaceId, siteUrl: $siteUrl) {
      publicationId
    }
  }`