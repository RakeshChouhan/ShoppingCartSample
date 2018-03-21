import { Component, OnInit, OnDestroy} from '@angular/core';
import { Store } from '@ngrx/store';
import { CartState } from '../state/cart-state';
import { Product } from '../products/product';
import { DELETE_CART,CLEAR_CART} from '../state/cart-actions';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy{

  
  products:Array<Product>;
  totalPrice:number = 0;
  cartId:number=0;
  cartVisible:boolean=false;
  constructor(private store:Store<CartState>, private cartService:CartService) { 
    cartService.currentState$.subscribe((visibility)=>{
      this.cartVisible = visibility;
    });
  }
  ngOnInit() {
    let st = this.store.select("cartState");
    st.subscribe((data)=>{
      this.products = this.getProducts(data);
    })

  }
  getProducts(data){
    this.totalPrice = 0;
    let products:Array<Product>
     products = data.cartState;
     products.map((product)=>{
       this.totalPrice = this.totalPrice+ product.price;
     })
     return products;
  }

  deleteFromCart(item){
    let st =  this.store.select('cartState');
     st.dispatch({type:DELETE_CART,payload:item});
  }

  clearCart(){
    let st =  this.store.select('cartState');
    st.dispatch({type:CLEAR_CART});
  }
  hideCart(){
    this.cartService.toggleCartState();
  }
  ngOnDestroy(){
   // this.cartService.currentState$.
  }


}
