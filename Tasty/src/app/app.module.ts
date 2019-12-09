import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShowcaseComponent } from './components/showcase/showcase.component';
import { FooterComponent } from './components/footer/footer.component';
import { TitleComponent } from './components/title/title.component';
import { SwatchComponent } from './components/swatch/swatch.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ProductComponent } from './components/product/product.component';
import { ShopShowcaseComponent } from './components/shop-showcase/shop-showcase.component';
import { ButtonComponent } from './components/button/button.component';
import { MiniBannerComponent } from './components/mini-banner/mini-banner.component';
import { AlertComponent } from './components/alert/alert.component';
import { CartComponent } from './components/cart/cart.component';
import { CartIconComponent } from './components/cart-icon/cart-icon.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { OrderComponent } from './components/order/order.component';
import { OrderItemComponent } from './components/order-item/order-item.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CheckoutItemComponent } from './components/checkout-item/checkout-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BannerComponent,
    NavbarComponent,
    ShowcaseComponent,
    FooterComponent,
    TitleComponent,
    SwatchComponent,
    ShopComponent,
    ProductComponent,
    ShopShowcaseComponent,
    ButtonComponent,
    MiniBannerComponent,
    AlertComponent,
    CartComponent,
    CartIconComponent,
    TooltipComponent,
    OrderComponent,
    OrderItemComponent,
    CheckoutComponent,
    CheckoutItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
