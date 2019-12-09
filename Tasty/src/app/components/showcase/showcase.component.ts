import { Component, OnInit, Input } from '@angular/core';
import { Swatch } from '../../models/Swatch';;

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {
  @Input() swatches: Swatch[];
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
