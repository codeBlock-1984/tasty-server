import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnChanges {
  @Input() data: any = {
    message: null,
    customClass: ''
  };
  @Input() customClass: string;

  constructor() { }

  ngOnInit() {
    
  }

  ngOnChanges() {
    if (this.data) {
      setTimeout( () => { this.data = null },
        1000
      );
    }
  }

}
