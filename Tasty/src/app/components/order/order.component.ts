import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Helper } from '../../helpers';

const { getOrderTotal } = Helper;

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnChanges {
  @Input() order: any = [];
  @Output() add: EventEmitter<any> = new EventEmitter();
  @Output() remove: EventEmitter<any> = new EventEmitter();
  @Output() delete: EventEmitter<any> = new EventEmitter();
  @Output() goToShopEvent: EventEmitter<any> = new EventEmitter();
  @Output() checkoutEvent: EventEmitter<any> = new EventEmitter();
  orderTotal: number = 0;

  constructor() { }

  ngOnInit() {
    
  }

  ngOnChanges() {
    this.orderTotal = getOrderTotal(this.order);
  }

  handleAdd(orderItem) {
    this.add.emit(orderItem);
  }

  handleRemove(orderItem) {
    this.remove.emit(orderItem);
  }

  handleDelete(orderItem) {
    this.delete.emit(orderItem);
  }

  handleGoToShop() {
    this.goToShopEvent.emit();
  }

  handleCheckout() {
    this.checkoutEvent.emit();
  }

}
