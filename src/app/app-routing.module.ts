import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductDtoComponent } from './components/product-dto/product-dto.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { CartComponent } from './components/cart/cart.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import { ProductDtoDetailsComponent } from './components/product-dto-details/product-dto-details.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { AboutComponent } from './components/about/about.component';
import { OrderDtoComponent } from './components/order-dto/order-dto.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductDtoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'allProducts', component: AllProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'placeOrder', component: PlaceOrderComponent },
  { path: 'productDetails', component: ProductDtoDetailsComponent },
  { path: 'thankYou', component: ThankYouComponent },
  { path: 'about', component: AboutComponent },
  { path: 'order', component: OrderDtoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
