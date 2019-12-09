import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit, OnChanges {
  @Input() orderItem: any;
  @Output() addQty: EventEmitter<any> = new EventEmitter();
  @Output() removeQty: EventEmitter<any> = new EventEmitter();
  @Output() delete: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    
  }

  addQuantity(orderItem) {
    this.addQty.emit(orderItem);
  }

  removeQuantity(orderItem) {
    if (orderItem.quantity > 1) {
      this.removeQty.emit(orderItem);
    } else {
      return undefined;
    }
  }

  deleteItem(orderItem) {
    this.delete.emit(orderItem);
  }
}
