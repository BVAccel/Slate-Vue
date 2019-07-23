export class QueryService{

    getCollectionQuery(handleId){
        let query = `
        {
            collectionByHandle(handle:"${handleId}") {
              id
              products(first:10) {
                edges {
                  node {
                    id

                    images(first:2)  {
                      edges {
                        node {
                          id
                          originalSrc
                        }
                      }
                    }
                    title
                    variants(first:10) {
                      edges {
                        node {
                          id
                          title
                          price
                          image{
                            id
                            originalSrc
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }`;
        return query
      }

}