import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  text: string = 'codeBlock 2019';
  constructor() { }

  ngOnInit() {
  }

}
