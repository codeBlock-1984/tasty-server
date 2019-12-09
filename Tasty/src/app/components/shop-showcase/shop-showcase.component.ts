import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shop-showcase',
  templateUrl: './shop-showcase.component.html',
  styleUrls: ['./shop-showcase.component.scss']
})
export class ShopShowcaseComponent implements OnInit {
  @Input() products: any[];
  @Output() clickEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  handleClick(event) {
    this.clickEvent.emit(event);
  }

}
