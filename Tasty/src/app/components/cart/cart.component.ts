import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartIconStyle: string = 's-30 c-w';
  cartIconTooltip: string = 'view cart';
  @Output() clickEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleClick() {
    this.clickEvent.emit();
  }

}
