//**********************//
//* COLLECTION QUERIES *//
//**********************//

export class CollectionQueries {

  // COLLECTION QUERY - Basic query to get a collection. You must provide each of the arguments for it to work.
  getCollection(handle, totalFetched, amountToFetch, variantQuantity) {
    let query = `
      {
        collectionByHandle(handle:"${handle}") {
          title
          id
          products(first:${amountToFetch} offset:${totalFetched}) {
            edges {
              node {
                title
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
    `;
  }

  // SORT QUERIES - Use these to sort your collections.
  sortByPriceAsc() {
    let query = `{}`
  }

  sortByPriceDesc() {
    let query = `{}`
  }

  sortByNew() {
    let query = `{}`
  }

  sortByOld() {
    let query = `{}`
  }

  sortByFeatured() {
    let query = `{}`
  }

  sortByBestSellers() {
    let query = `{}`
  }

}