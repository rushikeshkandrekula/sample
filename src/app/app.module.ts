import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AngularFireModule} from '@angular/fire';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { OrdersComponent } from './components/orders/orders.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    AccountsComponent,
    OrdersComponent,
    NavbarComponent,
    CartComponent,
    ProductsComponent,
    SignUpComponent,
    NotFoundComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyCRR1F8w39engiOE4gXvTPtmvggoK8XEg8",
    authDomain: "ecommercesite-5558d.firebaseapp.com",
    databaseURL: "https://ecommercesite-5558d.firebaseio.com",
    projectId: "ecommercesite-5558d",
    storageBucket: "ecommercesite-5558d.appspot.com",
    messagingSenderId: "1009029805157",
    appId: "1:1009029805157:web:b0b3ba50b8a89cf52b028c",
    measurementId: "G-18CLJ9W31T",
      }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
