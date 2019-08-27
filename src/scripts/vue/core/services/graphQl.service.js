import { GraphQLClient } from "graphql-request";
import { QueryService} from './query.service';
const queryService = new QueryService();
const TOKEN ='';
const STORE ='';
const client = new GraphQLClient(STORE, { headers: {  "X-Shopify-Storefront-Access-Token": TOKEN} })
export class GraphQlService{

    constructor(){ }

    /**
     * FIELDS
     */

    getCollectionByHandle(handleId){
        let promise = new Promise((resolve,reject)=>{
          // Get Graphql query
          let productQuery = queryService.getCollectionQuery(handleId);
          // Fetch query data
          client.request(productQuery).then(data => {
              resolve(data)
          })
        });
        return promise;
    }



}