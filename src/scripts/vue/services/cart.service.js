
import { EventBus, CartUpdated } from './event.service';
const $http = require('axios');
const ChangeCart = '/cart/change.js';
const AddToCart = '/cart/add.js';
const GetCart = '/cart.js';
const ClearCart = '/cart/clear.js'


export class CartService{

    constructor(){}


    /** CHANGE ITEM IN CART
     * @param { item quantity } qty
     * @param { item key } key
     */
    changeItem(qty,key){
        return new Promise((resolve,reject)=>{
            $http.post(ChangeCart,{ quantity:qty,id:key })
            .then(function (resp) {
                console.log('resp in change item', resp);
                    EventBus.$emit(CartUpdated,resp);
                    resolve(resp.data);
                },function (error) {
                    reject(error);
                }
            );
        })
    }


    /** CHANGE ITEM IN CART
     * @param { item quantity } qty
     * @param { item varient ID } variant_id
     */
    addItem(qty,variant_id){
        let vm = this;
        return new Promise((resolve,reject)=>{
            $http.post(AddToCart , { quantity:qty,id:variant_id })
            .then(function (resp) {
                    vm.getCartData().then((resp)=>{
                        EventBus.$emit(CartUpdated,resp);
                        resolve(resp.data);
                    })
                },function (error) {
                    reject(error);
                }
            );
        })
    }

    // GET CART DATA
    getCartData() {
        return new Promise((resolve, reject) => {
            $http.get(GetCart)
                .then(function (resp) {
                    resolve(resp);
                }, function (error) {
                    reject(error);
                });
        })
    }


    /** CLEAR ALL ITEMS IN CART */
    clearCart(){
        return new Promise((resolve,reject)=>{
            $http.post(ClearCart)
            .then(function (resp) {
                    EventBus.$emit(CartUpdated,resp.data);
                    resolve(resp.data);
                },function (error) {
                    reject(error);
                }
            );
        })
    }


}