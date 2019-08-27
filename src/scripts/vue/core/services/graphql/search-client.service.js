import { createClient } from 'vue-gql';
import { config } from './config';

export const SearchClient = createClient({
  url: config.url,
  headers: { 'X-Shopify-Storefront-Access-Token': config.token },
});
