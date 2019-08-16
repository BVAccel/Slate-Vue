
import { EventBus, CartUpdated } from './event.service';
const $http = require('axios');

export class CartService{

    constructor(){
        this.name = 'CartService';
    }


    /**
     * FIELDS
     */


    changeItem(qty,key){
        console.log(this);
        return new Promise((resolve,reject)=>{
            $http.post('/cart/change.js', { quantity:qty,id:key })
            .then(function (resp) {
                    EventBus.$emit(CartUpdated,resp.data.items);
                    resolve(resp.data);
                },function (error) {
                    reject(error);
                }
            );
        })
    }




}