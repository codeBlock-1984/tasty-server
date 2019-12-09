import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mini-banner',
  templateUrl: './mini-banner.component.html',
  styleUrls: ['./mini-banner.component.scss']
})
export class MiniBannerComponent implements OnInit {
  title: string = 'tasty';
  text: string = 'life has never been so delicious'
  @Input() cartItemCount;

  constructor() { }

  ngOnInit() {
  }

}
