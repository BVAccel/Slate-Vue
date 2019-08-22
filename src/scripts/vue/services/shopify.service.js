import ShopifyClient from 'shopify-buy';

const ProductUrl = 'gid://shopify/Product/';

export class ShopifyService {
  constructor() {
    // Create client
    this.shopifyClient = ShopifyClient.buildClient({
      domain: 'slate-vue.myshopify.com',
      storefrontAccessToken: 'c9495a252e4d32fa9007acd0f6922e67',
    });
  }

  /**
   * FIELDS
   */
  getShopifyClient() {
    return this.shopifyClient;
  }

  getProducts() {
    return new Promise((resolve, reject) => {
      // Fetch all products in your shop
      this.shopifyClient.product.fetchAll().then((products) => {
        console.log('All Products', products);
        resolve(products);
      });
    });
  }

  getProduct(productId) {
    return new Promise((resolve, reject) => {
      // must be base 64 encoded
      let base64Id = btoa(ProductUrl + productId);
      this.shopifyClient.product.fetch(base64Id).then((product) => {
        console.log('Product', product);
        resolve(product);
      });
    });
  }

  getAllCollectionWithProducts() {
    return new Promise((resolve, reject) => {
      this.shopifyClient.collection.fetchAllWithProducts().then((collections) => {
        // Do something with the collections
        console.log('collections', collections);
        resolve(collections);
      });
    });
  }

  getCollectionWithProducts(collectionId) {
    console.log('getCollectionWithProducts');
    return new Promise((resolve, reject) => {
      this.shopifyClient.collection.fetchWithProducts(collectionId).then((collection) => {
        // Do something with the collection
        resolve(collection);
      });
    });
  }

  getCollectionId(collectionhandle) {
    return new Promise((resolve, reject) => {
      this.getAllCollectionWithProducts().then((resp) => {
        for (let i = 0; i < resp.length; i++) {
          const current = resp[i];
          if (current.handle == collectionhandle) {
            resolve(current.id);
          }
        }
      });
    });
  }
}
