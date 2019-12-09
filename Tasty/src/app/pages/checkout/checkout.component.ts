import { Component, OnInit } from '@angular/core';
import { mainLinks } from '../../data/navbar.data';
import { DataService } from '../../services/data.service';
import { Helper } from '../../helpers';

const { getOrderTotal } = Helper;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  order: any[];
  orderTotal: number;
  title: string = 'checkout';
  topnavLinks: string[] = mainLinks;
  cartItemCount: number = 0;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.currentOrder.subscribe(data => {
      return this.order = data;
    });
    this.orderTotal = getOrderTotal(this.order);
  }

}
