import { Component, OnInit, Input } from '@angular/core';
import { Swatch } from '../../models/Swatch';

@Component({
  selector: 'app-swatch',
  templateUrl: './swatch.component.html',
  styleUrls: ['./swatch.component.scss']
})
export class SwatchComponent implements OnInit {
  @Input() swatch: Swatch;

  constructor() { }

  ngOnInit() {
  }

}
