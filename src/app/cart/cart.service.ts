import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CartService {
  cartVisible:boolean=false;
 private cartVisibility = new BehaviorSubject<boolean>(this.cartVisible);
  currentState$ = this.cartVisibility.asObservable();
  constructor() { 


  }
  toggleCartState(){
    this.cartVisible = !this.cartVisible;
    this.cartVisibility.next(!this.cartVisible);
  }

}
