import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartState } from '../state/cart-state';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-cart-counter',
  templateUrl: './cart-counter.component.html',
  styleUrls: ['./cart-counter.component.css']
})
export class CartCounterComponent implements OnInit {

  
  @Output() showCartEvent: EventEmitter <boolean> =  new EventEmitter();
  showCartDetails:boolean=false;
  cartCount=0;
  constructor(private store:Store<CartState>,private cartService:CartService) {
    this.updateCartCount();
   }

  updateCartCount(){
    let st = this.store.select('cartState');
    this.cartCount=0;
    st.subscribe((data)=>{
     this.cartCount = data.totalCount;
    })
  }
  toggleCartDetails(){
    this.cartService.toggleCartState();
  }
  ngOnInit() {
    this.cartService;
  }

}
