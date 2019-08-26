export class QueryService {
  getCollectionQuery(handleId, prevQuantity, productQuantity, variantQuantity) {
    let query = `
      {
        collectionByHandle(handle:"${handleId}") {
          id
          products(first:${productQuantity} offset:${prevQuantity}) {
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
                variants(first:${variantQuantity}) {
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
      }
    `
  }
}