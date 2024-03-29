import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.scss']
})
export class CartIconComponent implements OnInit {
  @Input() customClass: string;

  constructor() { }

  ngOnInit() {
  }

}
