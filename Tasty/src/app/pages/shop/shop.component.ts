import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { mainLinks } from '../../data/navbar.data';
import { ProductService } from '../../services/product.service';
import { DataService } from '../../services/data.service';
import { Swatch } from 'src/app/models/Swatch';
import { Helper } from '../../helpers';

const { isDuplicate } = Helper;

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  title: string = 'shop';
  topnavLinks: string[] = mainLinks;
  showcaseItems: Swatch[];
  cart: any[] = [];
  cartItemCount: number = 0;
  alert: any;
  cartStatus: string = 'closed';


  constructor(private productService: ProductService, private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.productService.getProducts()
      .subscribe(data => {
        this.showcaseItems = data.data[0].data;
      });
  
    this.dataService.currentOrder.subscribe(data => {
      return this.cart = data;
    });
    this.cartItemCount = this.cart.length;
    // this.orderTotal = getOrderTotal(this.order);
  }

  addToCart(event) {
    if (isDuplicate(event, this.cart)) {
      this.alert = {
        message : {
          title: null,
          text: 'item already in your cart'
        },
        customClass: 'info'
      };
      return undefined;
    }
    event.quantity = 1;
    this.cart.push(event);
    this.cartItemCount += 1;
    this.alert = {
      message : {
        title: null,
        text: 'item added to cart'
      },
      customClass: 'success'
    };
  }

  openCart() {
    if (this.cart.length < 1) {
      this.alert = {
        message : {
          title: null,
          text: 'Your cart is currently empty'
        },
        customClass: 'info'
      };
    } else {
      this.cartStatus = 'open';
    }
  }

  handleAdd(orderItem) {
    const newCart: any[] = this.cart.map((cartItem) => {
      if (cartItem.name === orderItem.name) {
        cartItem.quantity += 1;
      }
      return cartItem;
    });
    this.cart = newCart;
  }

  handleRemove(orderItem) {
    const newCart: any[] = this.cart.map((cartItem) => {
      if (cartItem.name === orderItem.name) {
        cartItem.quantity -= 1;
      }
      return cartItem;
    });
    this.cart = newCart;
  }

  handleDelete(orderItem) {
    const newCart: any[] = this.cart.filter((cartItem) => {
      if (cartItem.name !== orderItem.name) {
        return cartItem;
      }
    });
    this.cart = newCart;
  }

  goToShop() {
    this.cartStatus = 'closed';
  }

  checkout() {
    this.dataService.setOrder(this.cart);
    this.router.navigate(['/checkout']);
  }

}
