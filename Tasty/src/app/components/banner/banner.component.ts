import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  title: string = 'tasty';
  text: string = 'life was never so delicious...';
  button: string = 'go to shop';
  customClass: string = 'pri-btn';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openShop() {
    this.router.navigate(['/shop']);
  }

}
