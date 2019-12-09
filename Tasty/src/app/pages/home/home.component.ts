import { Component, OnInit } from '@angular/core';
import { showcaseData } from '../../data/showcase.data';
import { Swatch } from '../../models/Swatch';
import { mainLinks } from '../../data/navbar.data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showcaseItems: Swatch[] = showcaseData;
  showcaseTitle: string = 'show case';
  topnavLinks: string[] = mainLinks;

  constructor() { }

  ngOnInit() {
  }

 
}
