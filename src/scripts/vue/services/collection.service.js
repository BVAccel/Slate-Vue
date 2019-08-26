import { GraphQLClient } from 'graphql-request';
import { getCollection } from './queries/CollectionQueries';
const queryService = new QueryService();
const TOKEN = '01fd7447bdcd2b706797f474fbc12ccf';
const STORE = '';
const client = new GraphQLClient(STORE, { headers: { 'X-Shopify-Storefront-Access-Token': TOKEN } });
export class GraphQlService {
  constructor() {}

  getCollection(handleId, prevQuantity, productQuantity, variantQuantity) {
    
  }

  /**
   * FIELDS
   */

  // getCollectionByHandle(handleId, productQuantity, variantQuantity) {
  //   let promise = new Promise((resolve, reject) => {
  //     // Get Graphql query
  //     let productQuery = queryService.getCollectionQuery(handleId, productQuantity, variantQuantity);
  //     // Fetch query data
  //     client.request(productQuery).then((data) => {
  //       resolve(data);
  //     });
  //   });
  //   return promise;
  }
}
