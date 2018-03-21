
import { ActionReducer, Action } from '@ngrx/store';
import { CartItem } from './cart-item';
export const ADD_CART = 'ADD_CART';
export const DELETE_CART = 'DELETE_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const INCREMENT_COUNT = 'INCREMENT_COUNT';
export const DECREMENT_COUNT = 'DECREMENT_COUNT';
export const INIT = 'INIT';

export class MyAction implements Action{
    type:string;
    payload:any;

}
let cartId:number=0;

export function cartReducer(state:CartItem=new CartItem(),action:MyAction){
    switch(action.type){
        case INIT :
            state.cartState =[];
            state.totalCount=0;
            return {...state};
        case ADD_CART:
            let payload = {...action.payload};
            payload.cartId=cartId++;
            state.cartState.push(payload); 
            state.totalCount = state.cartState.length;        
            return {...state};
        case DELETE_CART:
           
            state.cartState = state.cartState.filter(function(item){
                return item.cartId != action.payload.cartId;
            });
            state.totalCount = state.cartState.length;
            return {...state};
        case CLEAR_CART:
            state.cartState =[];
            state.totalCount=0;
            return {...state};
        case INCREMENT_COUNT:
            console.log(ADD_CART);
            return state;
        case DECREMENT_COUNT:
            console.log(ADD_CART);
            return state;
        default:
            return state;
        
        

    }
}



