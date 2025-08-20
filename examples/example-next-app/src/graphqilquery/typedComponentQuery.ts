export const TYPED_COMPONENT_QUERY = `query typedComponent($componentId:Int!, $publicationId:Int!, $namespaceId:Int!){
    typedComponent(componentId: $componentId, publicationId: $publicationId, namespaceId: $namespaceId){
      title
      ... on Article{
        itemId
        publicationId
        title
        headline
        articleBody{
          subheading
          content{
            html
          }
          media{
            ... on BinaryComponent{
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
    }
  }`