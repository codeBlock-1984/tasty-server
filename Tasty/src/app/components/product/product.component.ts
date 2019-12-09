import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: any;
  @Output() clickEvent: EventEmitter<any> = new EventEmitter<any>();
  buttonText: string = 'add to cart';
  buttonClass: string = 'pri-btn';

  constructor() { }

  ngOnInit() {
  }

  handleClick(product: any) {
    this.clickEvent.emit(product);
  }

}
