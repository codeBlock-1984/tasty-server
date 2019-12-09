import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Input() customClass: string;
  @Output() clickEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  
  handleClick() {
    this.clickEvent.emit();
  }

}
