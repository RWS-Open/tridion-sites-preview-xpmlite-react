export const TYPED_PAGE_QUERY = `query typedPageQuery($namespaceId: Int, $publicationId: Int, $url: String) {
  typedPage(namespaceId: $namespaceId, publicationId: $publicationId, url: $url) {
    itemId
    publicationId
    itemType
    url
    regions {
      name
      components {
        title
        id
        ... on ItemList {
          headline
          itemId
          itemType
          publicationId
          itemListElement {  
            __typename
            subheading
            link{
              linkText
              externalLink
              internalLink{
                title
                id
                itemId
                itemType
              }
              alternateText
            }
            content{
              ... on Rtf{
                html
              }
            }
            media {
              ... on BinaryComponent {
                variants {
                  edges {
                    node {
                      description
                      binaryId
                      downloadUrl

                    }
                  }
                }
              }
            }
          }
        }
        ... on Article {
          metadata{
            standardMeta{
              name
              introText
            }
          }
          headline
          itemId
          publicationId
          itemType
          articleBody {
            subheading
            content{
              html
            }
          
            media {
              ... on BinaryComponent {
                variants {
                  edges {
                    node {
                      binaryId
                      downloadUrl
                    }
                  }
                }
              }
            }
            
          }
          image {
            ... on BinaryComponent {
              variants {
                edges {
                  node {
                    binaryId
                    downloadUrl
                  }
                }
              }
            }
          }
        }
        ... on Place{
          itemId
          publicationId 
          name
          email
          telephone
          faxNumber
          address{
            html
          }
         image{
          ... on BinaryComponent{
            variants{
              edges{
                node{
                  downloadUrl
                  binaryId
                  description
                }
              }
            }
          }
         }
        }
        ... on YouTubeVideo{
          title
          itemId
          publicationId
          metadata{
            headline
            youTubeId
          }
          variants{
            edges{
              node{
                downloadUrl
              }
            }
          }
        }
      }
    }
  }
}`