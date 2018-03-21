import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartState } from '../state/cart-state';
import { Product } from './product';
import { ADD_CART, DELETE_CART,INIT} from '../state/cart-actions';
import { products } from '../data/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:Array<Product>;
  toggleCartDetails:boolean = false;
  constructor(private store:Store<CartState>) { 
    let st =  this.store.select('cartState');
    st.dispatch({type:INIT})
  }
  addToCart(item){
    let st =  this.store.select('cartState');
    st.dispatch({type:ADD_CART,payload:item});
  }

  showHideCartDetails($event){
    this.toggleCartDetails = !this.toggleCartDetails;
  }

  ngOnInit() {
    this.products = products;

  }

}
