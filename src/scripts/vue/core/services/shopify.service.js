import ShopifyClient from 'shopify-buy';
const $http = require('axios');

const ProductUrl = 'gid://shopify/Product/';
const CollectionUrl = 'gid://shopify/Collection/';

export class ShopifyService{

    constructor(){
        // Create client
       this.shopifyClient = ShopifyClient.buildClient({
            domain: 'slate-vue.myshopify.com',
            storefrontAccessToken: 'c9495a252e4d32fa9007acd0f6922e67'
        })

    }

    /**
     * FIELDS
     */
    getShopifyClient(){
        return this.shopifyClient
    }


    getProducts(){
        return new Promise((resolve,reject)=>{
            // Fetch all products in your shop
            this.shopifyClient.product.fetchAll().then((products) => {
                console.log('All Products', products);
                 resolve(products);
            });
        })
    }

    getProduct(productId){
        return new Promise((resolve, reject)=>{
            // must be base 64 encoded
            let base64Id = btoa( ProductUrl + productId );
            this.shopifyClient.product.fetch(base64Id).then((product) => {
                console.log('Product', product);
                resolve(product);
            });
        })
    }

    getAllCollectionWithProducts(){
        return new Promise((resolve, reject)=>{
            this.shopifyClient.collection.fetchAllWithProducts().then((collections) => {
              // Do something with the collections
              console.log("collections",collections);
              resolve(collections);
            })
        })
    }


    getCollectionWithProducts(collectionId){
        console.log("getCollectionWithProducts with ID: ", collectionId);
        return new Promise((resolve, reject)=>{
            this.shopifyClient.collection.fetchWithProducts(collectionId).then((collection) => {
                // Do something with the collection
                resolve(collection);
            });
        })
    }

    getCollectionId(collectionhandle){
        return new Promise((resolve, reject)=>{
            this.getAllCollectionWithProducts().then((resp)=>{
                for (let i = 0; i < resp.length; i++) {
                    const current = resp[i];
                    if (current.handle == collectionhandle){
                        resolve(current.id);
                    }
                }
            })
        })
    };

    /**
     * Note: this is just used to get a large array for the time being.
     */
    getDummyData(){
        let string = '[{"id":"67197","employee_name":"bbvbnvcn","employee_salary":"2147483647","employee_age":"24","profile_image":""},{"id":"67198","employee_name":"Swapnilab","employee_salary":"20000","employee_age":"29","profile_image":""},{"id":"67202","employee_name":"Captain462","employee_salary":"10000","employee_age":"23","profile_image":""},{"id":"67203","employee_name":"Captain747","employee_salary":"10000","employee_age":"23","profile_image":""},{"id":"67204","employee_name":"SwapnilBorade","employee_salary":"20000","employee_age":"29","profile_image":""},{"id":"67205","employee_name":"Captain343","employee_salary":"10000","employee_age":"23","profile_image":""},{"id":"67206","employee_name":"sfsdfgsf","employee_salary":"545444","employee_age":"24","profile_image":""},{"id":"67209","employee_name":"SwapnilBorad","employee_salary":"20000","employee_age":"29","profile_image":""},{"id":"67210","employee_name":"Captain58","employee_salary":"10000","employee_age":"23","profile_image":""},{"id":"67211","employee_name":"55555555","employee_salary":"354544","employee_age":"24","profile_image":""},{"id":"67212","employee_name":"SwapnilBor","employee_salary":"20000","employee_age":"29","profile_image":""},{"id":"67213","employee_name":"Captain694","employee_salary":"10000","employee_age":"23","profile_image":""},{"id":"67215","employee_name":"rajarajasolan","employee_salary":"2147483647","employee_age":"32","profile_image":""},{"id":"67218","employee_name":"Captain330","employee_salary":"10000","employee_age":"23","profile_image":""},{"id":"67222","employee_name":"test554218","employee_salary":"123","employee_age":"23","profile_image":""},{"id":"67224","employee_name":"akshay","employee_salary":"123","employee_age":"23","profile_image":""},{"id":"67228","employee_name":"t11est12assaan","employee_salary":"12312321","employee_age":"23","profile_image":""},{"id":"67231","employee_name":"tt","employee_salary":"123","employee_age":"23","profile_image":""},{"id":"67233","employee_name":"qwerty","employee_salary":"123","employee_age":"23","profile_image":""},{"id":"67234","employee_name":"pooiuy","employee_salary":"123","employee_age":"23","profile_image":""},{"id":"67238","employee_name":"test2vt","employee_salary":"123","employee_age":"23","profile_image":""},{"id":"67242","employee_name":"test78","employee_salary":"123","employee_age":"23","profile_image":""},{"id":"67243","employee_name":"ramsai52","employee_salary":"0","employee_age":"0","profile_image":""},{"id":"67248","employee_name":"Captain468","employee_salary":"10000","employee_age":"23","profile_image":""},{"id":"67249","employee_name":"tuyttu","employee_salary":"0","employee_age":"0","profile_image":""},{"id":"67250","employee_name":"Captain641","employee_salary":"10000","employee_age":"23","profile_image":""},{"id":"67251","employee_name":"Captain212","employee_salary":"10000","employee_age":"23","profile_image":""},{"id":"67257","employee_name":"Johnnds","employee_salary":"1744","employee_age":"16","profile_image":""},{"id":"67263","employee_name":"tuyttujknbm","employee_salary":"0","employee_age":"0","profile_image":""},{"id":"67264","employee_name":"vardh","employee_salary":"100000","employee_age":"55","profile_image":""},{"id":"67266","employee_name":"John123Test","employee_salary":"123","employee_age":"23","profile_image":""},{"id":"67267","employee_name":"zzz","employee_salary":"123","employee_age":"23","profile_image":""},{"id":"67270","employee_name":"bvjnvmj","employee_salary":"0","employee_age":"0","profile_image":""},{"id":"67271","employee_name":"Rama6789","employee_salary":"67890","employee_age":"25","profile_image":""},{"id":"67274","employee_name":"vnbvnbv","employee_salary":"0","employee_age":"0","profile_image":""},{"id":"67275","employee_name":"JKDFJLKKDSL","employee_salary":"12345","employee_age":"24","profile_image":""},{"id":"67276","employee_name":"test0000000000000001","employee_salary":"123","employee_age":"23","profile_image":""},{"id":"67277","employee_name":"Bob29","employee_salary":"123","employee_age":"23","profile_image":""},{"id":"67284","employee_name":"Bob377","employee_salary":"12345","employee_age":"99","profile_image":""},{"id":"67285","employee_name":"sdfdsfds","employee_salary":"54544","employee_age":"24","profile_image":""},{"id":"67288","employee_name":"rfdsfdsf","employee_salary":"9566","employee_age":"24","profile_image":""},{"id":"67290","employee_name":"sdfgdfg","employee_salary":"0","employee_age":"24","profile_image":""},{"id":"67291","employee_name":"grfgfdjhnfgj","employee_salary":"0","employee_age":"0","profile_image":""},{"id":"67292","employee_name":"zubair12","employee_salary":"28765","employee_age":"35","profile_image":""},{"id":"67294","employee_name":"HarryPotter","employee_salary":"123","employee_age":"23","profile_image":""},{"id":"67296","employee_name":"vardha","employee_salary":"120000","employee_age":"87","profile_image":""},{"id":"67297","employee_name":"ch","employee_salary":"0","employee_age":"0","profile_image":""},{"id":"67298","employee_name":"Nupur","employee_salary":"500000","employee_age":"26","profile_image":""},{"id":"67299","employee_name":"ch1","employee_salary":"0","employee_age":"0","profile_image":""},{"id":"67300","employee_name":"Bob48","employee_salary":"123","employee_age":"23","profile_image":""},{"id":"67301","employee_name":"Bob49","employee_salary":"12345","employee_age":"23","profile_image":""},{"id":"67302","employee_name":"Bob378","employee_salary":"12345","employee_age":"99","profile_image":""},{"id":"67303","employee_name":"HarryPotter1","employee_salary":"123","employee_age":"23","profile_image":""},{"id":"67305","employee_name":"HarryPotter2","employee_salary":"123","employee_age":"23","profile_image":""},{"id":"67306","employee_name":"harnisha","employee_salary":"7878","employee_age":"17","profile_image":""},{"id":"67307","employee_name":"Bob4144","employee_salary":"100000","employee_age":"80","profile_image":""},{"id":"67309","employee_name":"Bob4933","employee_salary":"10000","employee_age":"23","profile_image":""},{"id":"67312","employee_name":"testjlm","employee_salary":"123","employee_age":"23","profile_image":""},{"id":"67314","employee_name":"sadsd","employee_salary":"3432","employee_age":"32","profile_image":""},{"id":"67316","employee_name":"kkkk","employee_salary":"90888","employee_age":"65","profile_image":""},{"id":"67317","employee_name":"Bob3789","employee_salary":"12345","employee_age":"99","profile_image":""},{"id":"67320","employee_name":"abcdefsgxj","employee_salary":"373783","employee_age":"46","profile_image":""},{"id":"67323","employee_name":"TestName36","employee_salary":"26700","employee_age":"29","profile_image":""},{"id":"67324","employee_name":"TestName37","employee_salary":"3200","employee_age":"23","profile_image":""},{"id":"67325","employee_name":"TestName38","employee_salary":"2673","employee_age":"25","profile_image":""},{"id":"67326","employee_name":"TestName39","employee_salary":"4300","employee_age":"34","profile_image":""},{"id":"67327","employee_name":"kkckck","employee_salary":"8383","employee_age":"28","profile_image":""},{"id":"67329","employee_name":"Visu","employee_salary":"66666","employee_age":"32","profile_image":""},{"id":"67333","employee_name":"Souvik","employee_salary":"2000","employee_age":"30","profile_image":""},{"id":"67338","employee_name":"eewrfewf","employee_salary":"689","employee_age":"24","profile_image":""},{"id":"67339","employee_name":"HarryPotter3","employee_salary":"123","employee_age":"23","profile_image":""},{"id":"67341","employee_name":"adsfdhnfgj","employee_salary":"0","employee_age":"0","profile_image":""},{"id":"67343","employee_name":"abc123","employee_salary":"12345","employee_age":"99","profile_image":""},{"id":"67346","employee_name":"namedummyjETI","employee_salary":"100456","employee_age":"26","profile_image":""},{"id":"67347","employee_name":"new test","employee_salary":"50000","employee_age":"26","profile_image":""},{"id":"67349","employee_name":"abc1234","employee_salary":"12345","employee_age":"99","profile_image":""},{"id":"67350","employee_name":"WNTkC7sj1E","employee_salary":"7637261","employee_age":"30","profile_image":""},{"id":"67353","employee_name":"nDrfALW7EV","employee_salary":"0","employee_age":"30","profile_image":""},{"id":"67355","employee_name":"John111","employee_salary":"7637261","employee_age":"30","profile_image":""},{"id":"67356","employee_name":"sfdhnfgj","employee_salary":"0","employee_age":"0","profile_image":""},{"id":"67360","employee_name":"dsfsdfs","employee_salary":"544445","employee_age":"24","profile_image":""},{"id":"67361","employee_name":"8123945027","employee_salary":"2147483647","employee_age":"2147483647","profile_image":""},{"id":"67364","employee_name":"DhNCokLg3A","employee_salary":"7637261","employee_age":"30","profile_image":""},{"id":"67367","employee_name":"Sid9rfHCEF","employee_salary":"0","employee_age":"30","profile_image":""},{"id":"67368","employee_name":"Y3CuZIwq50","employee_salary":"7637261","employee_age":"30","profile_image":""},{"id":"67369","employee_name":"Bob41445","employee_salary":"100000","employee_age":"80","profile_image":""},{"id":"67371","employee_name":"jaanu","employee_salary":"123456","employee_age":"24","profile_image":""},{"id":"67372","employee_name":"test12assaa33n","employee_salary":"12312321","employee_age":"23","profile_image":""},{"id":"67373","employee_name":"test12as22saan","employee_salary":"12312321","employee_age":"23","profile_image":""},{"id":"67374","employee_name":"Bob414454","employee_salary":"100000","employee_age":"80","profile_image":""},{"id":"67375","employee_name":"testTrainingCD","employee_salary":"123","employee_age":"23","profile_image":""},{"id":"67376","employee_name":"Bob4144545","employee_salary":"100000","employee_age":"80","profile_image":""},{"id":"67401","employee_name":"abcd123","employee_salary":"12345","employee_age":"99","profile_image":""},{"id":"67403","employee_name":"sdfgdggfdgdf","employee_salary":"566","employee_age":"24","profile_image":""},{"id":"67404","employee_name":"gvfgfggfg","employee_salary":"4142","employee_age":"25","profile_image":""},{"id":"67407","employee_name":"SampleAPItest","employee_salary":"12345","employee_age":"30","profile_image":""},{"id":"67416","employee_name":"HarryPotter4","employee_salary":"123","employee_age":"23","profile_image":""},{"id":"67417","employee_name":"emp","employee_salary":"4142","employee_age":"25","profile_image":""},{"id":"67425","employee_name":"test91357885","employee_salary":"123","employee_age":"23","profile_image":""},{"id":"67431","employee_name":"HarryPotter6","employee_salary":"123","employee_age":"23","profile_image":""},{"id":"67432","employee_name":"emp0011","employee_salary":"4142","employee_age":"25","profile_image":""},{"id":"67437","employee_name":"Sayali","employee_salary":"20000","employee_age":"29","profile_image":""},{"id":"67445","employee_name":"abcd1234","employee_salary":"12345","employee_age":"99","profile_image":""},{"id":"67455","employee_name":"hgfjhgj","employee_salary":"4142","employee_age":"25","profile_image":""},{"id":"67456","employee_name":"Pravin","employee_salary":"123","employee_age":"28","profile_image":""},{"id":"67463","employee_name":"vfdxhgfnj","employee_salary":"0","employee_age":"0","profile_image":""},{"id":"67468","employee_name":"{itemId}","employee_salary":"12345","employee_age":"99","profile_image":""},{"id":"67476","employee_name":"Pravin1","employee_salary":"123","employee_age":"28","profile_image":""},{"id":"67478","employee_name":"Pravin2","employee_salary":"123","employee_age":"28","profile_image":""},{"id":"67490","employee_name":"Bipin","employee_salary":"201","employee_age":"27","profile_image":""},{"id":"67491","employee_name":"Bipin3","employee_salary":"2014","employee_age":"274","profile_image":""},{"id":"67501","employee_name":"abcdef123","employee_salary":"12345","employee_age":"99","profile_image":""},{"id":"67502","employee_name":"Reportstest","employee_salary":"1000","employee_age":"25","profile_image":""},{"id":"67507","employee_name":"test123545454544","employee_salary":"123","employee_age":"23","profile_image":""},{"id":"67514","employee_name":"kala","employee_salary":"0","employee_age":"24","profile_image":""},{"id":"67519","employee_name":"vg","employee_salary":"2","employee_age":"1","profile_image":""},{"id":"67522","employee_name":"wwe","employee_salary":"1","employee_age":"1","profile_image":""},{"id":"67524","employee_name":"DINESH","employee_salary":"123","employee_age":"23","profile_image":""},{"id":"67525","employee_name":"guru","employee_salary":"123","employee_age":"23","profile_image":""},{"id":"67527","employee_name":"wq","employee_salary":"12","employee_age":"12","profile_image":""},{"id":"67532","employee_name":"werere","employee_salary":"1","employee_age":"1","profile_image":""},{"id":"67535","employee_name":"rey","employee_salary":"0","employee_age":"0","profile_image":""},{"id":"67537","employee_name":"ter","employee_salary":"12","employee_age":"12","profile_image":""},{"id":"67539","employee_name":"ff","employee_salary":"12","employee_age":"12","profile_image":""},{"id":"67541","employee_name":"123","employee_salary":"1234","employee_age":"12345","profile_image":""},{"id":"67543","employee_name":"o9ooooo","employee_salary":"0","employee_age":"0","profile_image":""},{"id":"67544","employee_name":"hbnjnjm","employee_salary":"988488","employee_age":"95","profile_image":""},{"id":"67547","employee_name":"Onur Deneme1","employee_salary":"260","employee_age":"26","profile_image":""},{"id":"67550","employee_name":"workshop_test_create6","employee_salary":"1000","employee_age":"35","profile_image":""},{"id":"67552","employee_name":"abcdef1234","employee_salary":"12345","employee_age":"99","profile_image":""},{"id":"67554","employee_name":"abcdef12345","employee_salary":"12345","employee_age":"99","profile_image":""},{"id":"67555","employee_name":"${dummy_name}","employee_salary":"12345","employee_age":"99","profile_image":""},{"id":"67557","employee_name":"s","employee_salary":"12345","employee_age":"99","profile_image":""},{"id":"67558","employee_name":"Amit Negi111","employee_salary":"123456","employee_age":"44","profile_image":""},{"id":"67562","employee_name":"s2","employee_salary":"12345","employee_age":"99","profile_image":""},{"id":"67564","employee_name":"test1","employee_salary":"123","employee_age":"23","profile_image":""},{"id":"67565","employee_name":"xyz321","employee_salary":"12345","employee_age":"99","profile_image":""},{"id":"67574","employee_name":"SSESEVi","employee_salary":"85984","employee_age":"54","profile_image":""},{"id":"67578","employee_name":"fhuewiafhiufiuwef2r23","employee_salary":"123","employee_age":"23","profile_image":""},{"id":"67580","employee_name":"testssss","employee_salary":"41234","employee_age":"23","profile_image":""},{"id":"67586","employee_name":"Bob3790","employee_salary":"12345","employee_age":"99","profile_image":""},{"id":"67587","employee_name":"Bob3791","employee_salary":"12345","employee_age":"99","profile_image":""},{"id":"67588","employee_name":"xyz3210","employee_salary":"12345","employee_age":"99","profile_image":""},{"id":"67592","employee_name":"xyz32101","employee_salary":"12345","employee_age":"99","profile_image":""},{"id":"67596","employee_name":"tasdest","employee_salary":"12","employee_age":"23","profile_image":""},{"id":"67601","employee_name":"taest","employee_salary":"1213","employee_age":"23","profile_image":""}]'
        let json = JSON.parse(string);
        return json;
    }



}