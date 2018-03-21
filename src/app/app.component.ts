import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import { CartState } from './state/cart-state';
import { ADD_CART, INIT } from './state/cart-actions';
import { Product } from './products/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private store:Store<CartState>){
    let st =  store.select('cartState');
    //let product = new Product(1,"KeyBoard","KeyBoard",1234,"");

    st.dispatch({type:INIT});

  }

}
