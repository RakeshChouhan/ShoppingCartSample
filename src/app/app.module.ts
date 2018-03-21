import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { cartReducer } from './state/cart-actions';
import { CartComponent } from './cart/cart.component';
import { CartCounterComponent } from './cart-counter/cart-counter.component';
import { CartService } from './cart/cart.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    CartComponent,
    CartCounterComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({cartState:cartReducer})
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
